---
title: Fusión hiperespectral
parent: Módulos de la aplicación
grand_parent: Documentación de GEU
layout: default
nav_order: 3
---

# Fusión hiperespectral

Una captura hiperespectral incorpora ingentes cantidades de información al compararse con el resto de información sensorial que soporta GEU: mientras que las imágenes térmicas utilizan un valor adicional (temperatura) y las multiespectrales rondan los 5 o 6 valores (longitudes de onda concretas o agregaciones de ellas), el sensor hiperpespectral es capaz de tomar cientos de longitudes de onda sobre el espectro electromagnético. En concreto, con los sensores utilizados para la recolección de datos, cada píxel incorpora 270 valores de reflectancia, con una separación aproximada de 3 nanómetros entre sí.

Al igual que el resto de procesos de fusión, los datos hiperespectrales requieren cierto preprocesamiento que facilite el acceso a sus valores y permitan alinear los conjuntos de datos espectrales y espaciales:

![Flujo de datos para la fusión hiperespectral](./EsquemaGEU_FusionHiperespectral.png)

Comenzando por el aspecto común, la nube de puntos que representa la zona a aumentar puede obtenerse con un escaneo LiDAR o aplicando un proceso de *SfM* a un conjunto de imágenes RGB.

Para las imágenes hiperespectrales, sin embargo, es necesario un proceso algo más complejo de ortorectificación con el objetivo principal de corregir cualquier distorsión inducida por el sensor. Este proceso se realiza ajeno a GEU en software especializado, dando como resultado la imagen hiperespectral ortorectificada, que denominamos hipercubo al ser una simple apilación de imágenes sobre cada longitud de onda escaneada.

Gracias al proceso de ortorectificación y la presencia de metadatos sobre la posición geográfica de ambos conjuntos de datos, el proceso de fusión en GEU resulta trivial; simplemente cargando la nube de puntos y el hipercubo, su información geográfica permite posicionarlos bajo el mismo sistema de coordenadas y alinearlos con una misma matriz de traslación una vez colocados en el origen:

```
1 0 0 offset_x
0 1 0 offset_y
0 0 1 offset_z
0 0 0 1
```

Antes de detallar cómo GEU asigna los valores hiperespectrales a cada punto, hay más detalles sobre el hipercubo que son relevantes para su uso. En lugar de un fichero único con toda la información, estos hipercubos se dividen en el fichero de datos, donde cada píxel contiene los cientos de valores hiperespectrales, y un fichero de cabecera con  multitud de metadatos de utilidad. Tales metadatos permiten, principalmente, leer correctamente el hipercubo, detallando las dimensiones y número de bandas captadas, pero también incluyen detalles sobre las longitudes de onda específicas, su separación, y algunas propiedades de la cámara empleada.

La librería *GDAL* permite la lectura de un hipercubo de forma nativa, abtrayendo la gestión de estos metadatos en varias clases y funciones. Si bien la lectura de los datos es considerablemente simple, surge el gran problema de gestionar tal magnitud de información: los conjuntos de datos hiperespectrales utilizados requieren varios GB de almacenamiento en disco, que deberán reservarse en memoria principal en algún momento.

Ya que la lectura implica acceso a disco, cualquier alternativa presentará una desventaja en tiempo de ejecución o en uso de memoria. Una primera solución planteada consiste en asignar poco a poco los valores, tal que solo quede cargado en memoria una pequeña parte del hipercubo; el problema con este enfoque surge al requerir múltiples accesos a disco, que impactan en gran medida al tiempo de ejecución. Por otro lado, cargar todo el hipercubo en memoria y procesarlo posteriormente, si bien no genera multitud de accesos de lectura, ocupará gran parte de la memoria principal disponible del sistema.

GEU recurre al segundo método al tratar de favorecer el tiempo de respuesta, pues el propio proceso de fusión también es significativamente complejo computacionalmente. En la mayoría de situaciones, la nube de puntos escaneada tendrá una mayor dimensión que el hipercubo, dando lugar a puntos con información vacía. Dado que la fusión se basa en la proyección de un conjunto de datos sobre el otro, aquellos puntos fuera del alcance del hipercubo pueden recortarse y ser ignorados mediante un simple algoritmo:

```c
pointcloud = Point[num_points]
points_inside = Point[]
for Point p in pointcloud:
    if hypercube.georectangle.contains(p.geoposition.x, p.geoposition.y):
        points_inside += p
```

Indagando aún más en el problema anterior, GEU optimiza en gran medida el algoritmo al aprovechar el uso del *meshlet* como una agrupación de puntos. En lugar de comprobar cada punto individualmente, se evalúa si la caja envolvente de cada *meshlet* intersecta con el rectángulo del hipercubo, reduciendo en gran medida el número de comparaciones. Conociendo el conjunto de puntos dentro del hipercubo, la fusión consiste en asignar a cada punto los valores hiperespectrales del píxel al que corresponde, encontrado mediante la proyección del punto 3D a la imagen 2D.

Dada una posición en el espacio 3D, tras la alineación de ambos conjuntos de datos es posible ignorar la profundida en la proyección. A partir del punto con sus coordenadas horizontal y vertical, basta con añadir el desplazamiento geográfico original para que quede colocado en el mismo sistema que los píxeles del hipercubo. Tomando el rectángulo formado por el hipercubo, obtener la posición relativa de un punto en su interior es un problema trivial gracias al uso de *GDAL* ([Geotransform Tutorial](https://gdal.org/en/stable/tutorials/geotransforms_tut.html)), que se resume en la siguiente operación:

```
pixelX = (geoX - topLeftCornerX) / sizeW;
pixelY = (geoY - topLeftCornerY) / sizeY;
```

Mediante el píxel correspondiente a cada punto, la nube queda fusionada tras asignar, a cada uno, la colección de valores hiperespectrales de cada longitud de onda, tal que cada punto en la nube incluya información de su posición, color, y valores hiperespectrales.

## Magnitud de los datos fusionados

{: .warning}
> Pendiente de redactar

