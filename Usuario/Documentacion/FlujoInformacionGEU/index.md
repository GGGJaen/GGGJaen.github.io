---
title: Flujo de información en GEU
parent: Documentación de GEU
layout: default
nav_order: 2
---

El conjunto de utilidades que ofrece GEU parten de un núcleo central común a todos los módulos implementados para la aplicación; este núcleo, por tanto, se dedica a dar soporte a las operaciones más básicas: control de la información interna, la visualización e interacción en tiempo real y el procesamiento de los datos según distintos métodos.

## Procesamiento interno de datos

### Fuentes de datos

Cualquier operación realizada en GEU requiere, previamente, de un conjunto de datos preparado para su procesamiento que puede tomarse desde distintas fuentes, algunas mediante trabajo de campo y otras con servicios en línea con acceso a satélites:

- **Sensores Lidar**: devuelven como resultado una nube de puntos del terreno escaneado.
- **Cámaras RGB**: a partir de un conjunto de imágenes, es posible obtener una nube de puntos con procesos como *SfM*.
- **Sensores espectrales**: capturas de información sobre distintas longitudes de onda del espectro electromagnético.
  - **Térmica**: una única longitud de onda, dada en formato de imagen raster.
  - **Multiespectral**: varias longitudes de onda o bandas, dadas mediante una imagen raster por banda.
  - **Hiperespectral**: cientos de bandas, dadas en un *hipercubo* o imagen 3D, apilando las imágenes raster de cada banda.

Una vez se han tomado datos, requieren, generalmente, un preprocesamiento antes de poder utilizarse con GEU. Este paso varía según el tipo de dato de entrada y su formato, recurriendo a distintas herramientas software para su preparación:

 - [**CloudCompare**](https://www.cloudcompare.org/): manejo de nubes de puntos y multitud de operaciones. Útil para realizar recorte o muestreo de la nube, reduciendo la cantidad de puntos, o procesos de alineamiento entre varias nubes.
 - [**Pix4d**](https://www.pix4d.com/): suite de herramientas para fotogrametría, capaz de transformar capturas 2D en mapas digitales y modelos 3D (por ejemplo, a nubes de puntos con *SfM*).
 - [**Qgis**](https://qgis.org/): sistema de información geográfica empleado para la visualización y el alineamiento de los datos captados.
 - [**HyperSpec** y **SpectralView**](https://headwallphotonics.com/products/software/hyperspec-iii-and-spectralview/): Herramientas para la toma y gestión de capturas hiperespectrales, con funcionalidad adicional como visualización y clasificación espectral.

Al finalizar el preprocesamiento de los datos que lo requieran, el conjunto puede almacenarse para su uso en GEU y que sea accesible en cualquier momento. Esto se consigue con el uso del servidor NAS para almacenamiento masivo, donde quedan guardados los datos, y una base de datos relacional que aporte una estructura a los datos del servidor NAS.

La subida de un nuevo dato, por tanto, requiere generar una entrada con diversos metadatos sobre el conjunto en la base de datos mediante formularios, continuado por la subida al servidor NAS en una ruta especificada. Al seguir la estructura definida, GEU puede acceder con precisión a cualquier dato disponible y realizar búsquedas concretas mediante varios filtros durante la consulta.

### Carga de datos: nubes de puntos

A la hora de importar una nube de puntos en GEU, se hace uso de los formatos estándar PLY y LAS/LAZ. Ambos cuentan con una cabecera de metadatos sobre los puntos incluidos, por ejemplo: desplazamiento (*offset*, define la posición de la nube en el sistema de coordenadas local), tipos de datos adicionales (color, normales, o cualquier otro valor añadido a cada punto), o posición geográfica.

La carga de una nube, aunque difiera en formatos de entrada, sigue el mismo esquema para ambos en el cual se leen primero los metadatos y, a continuación, quedan almacenados los valores de cada punto para todas las propiedades que incluyan. Internamente, todos estos valores por punto son gestionados en una clase propia utilizando colecciones comunes, principalmente vectores de tamaño dinámico.

Si bien este proceso es considerablemente simple, GEU realiza una serie de optimizaciones internas que garantizan el mejor rendimiento posible durante la visualización de escenas más complejas o de gran tamaño. Una vez todos la posición de todos los puntos ha sido leída desde el fichero, como primer paso de optimización, esos puntos se ordenan espacialmente siguiendo una [curva de Hilbert](https://mathworld.wolfram.com/HilbertCurve.html), recibiendo cada uno un índice relativo a la posición en esta curva. A continuación, el conjunto entero de puntos se subdivide en agrupaciones mucho menores, dando lugar a la estructura del *meshlet* que será detallada más adelante [Meshlets y sombreadores de cómputo](#meshlets-y-sombreadores-de-cómputo).

En proceso
{: .label .label-yellow }


