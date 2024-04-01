<!-- ---
title: Segmentación de individuos
layout: default
parent: Casos de uso y ejemplos
nav_order: 4
--- -->

# Segmentación de individuos

El módulo de segmentación de individuos permite extraer las regiones correspondientes a árboles individuales a partir de una imagen aérea. En GEU, este proceso queda dividido en dos partes, preprocesamiento y búsqueda/gestión de regiones. Adicionalmente, los resultados podrán ser almacenados en la base de datos remota directamente desde la propia interfaz del módulo.

## Preprocesamiento

En este ejemplo, utilizaremos los datos de la finca **J2**, partiendo de su nube de puntos y una imagen aérea clasificada. En la siguiente imagen se etiqueta cada paso a seguir al seleccionar y ajustar la imagen de entrada, detallando a continuación cada una de estas secciones:

1. **Datos de entrada**: Selección de la imagen de entrada para realizar la segmentación, en formato PNG. También se facilita un selector de canal de color para ajustar esta imagen en situaciones concretas (la imagen de este ejemplo clasifica la vegetación de interés en verde, por tanto, queda seleccionado únicamente el canal verde).
2. **Parámetros**: Diversos valores de preprocesamiento sobre la imagen de entrada. En primer lugar, se realiza una umbralización para resaltar el contraste de las regiones de interés. Después, mediante una dilatación se expanden ligeramente las regiones resaltadas para facilitar la detección posterior. Ambos procedimientos pueden alterarse modificando sus parámetros:
    * **Umbral**: Valor diferenciador al umbralizar la imagen. Los píxeles que no superen este valor se les asignará el valor mínimo, mientras que el resto obtendrán el valor máximo.
    * **Umbralización invertida**: Invierte el comportamiento de la umbralización: los píxeles que superen el valor reciben el valor máximo y, el resto, el mínimo.
    * **Dimensiones kernel de dilatación**: Dimensiones de la matriz cuadrada empleada al dilatar la imagen. Siembre tomará un valor impar.
    * **Kernel de dilatación**: Empleando el botón junto al parámetro anterior, puede editarse cada valor de la matriz. Por defecto, todas las celdas se establecen a 1.
    * **Iteraciones de dilatación**: Número de veces que se aplicará la dilatación sobre la imagen. Valores más altos distorsionan más la imagen.
3. **Previsualización**: Visualización de la imagen de entrada y su preprocesamiento. El resultado de la imagen dilatada será aquella a utilizar durante la segmentación automática.

![image](../Assets/Images/segment_input.png)

## Búsqueda y gestión de regiones

Una vez la imagen de entrada ha sido procesada, se recurre a la librería OpenCV para buscar regiones de interés en la imagen dilatada. Esto depende en gran medida de la imagen de entrada, pero puede establecerse el método en que se gestionan internamente los contornos, aunque no suele suponer un impacto considerable en los resultados.

Como método de filtrado, se facilita un rango de tamaño para las regiones encontradas. Aquellas regiones cuyo tamaño no se encuentre en el rango establecido serán descartadas del resultado. Se recomienda ajustar este rango mediante la previsualización del mismo según la imagen a tratar.

Finalmente, el procedimiento de segmentación evalúa la imagen y genera las regiones de interés, mostrándolas sobre la previsualización como rectángulos. Al ser un proceso ciertamente impreciso en estas situaciones, se facilitan herramientas para la gestión de regiones, pudiendo añadir, mover o eliminar regiones manualmente mediante el cursor.

![image](../Assets/Images/segment_areas.png)

## Subida a base de datos

Con todas las regiones establecidas, los resultados pueden subirse a la base de datos remota siempre que se tenga una conexión activa a la misma. Las entradas que tomarán las regiones necesitan una posición geográfica y otros metadatos. En la siguiente imagen se etiqueta cada paso a seguir al rellenar el formulario con los parámetros para la subida, detallando a continuación cada una de estas secciones:

1. **Tipo y georeferenciación**: Selección del tipo de dato individual obtenido de la segmentación, y posición geográfica del rectángulo de la imagen. Mediante esta posición geográfica se asignará, a cada individuo, su posición geográfica. Esta posición puede establecerse manualmente (esquinas opuestas) o tomarse desde una nube de puntos cargada en la escena.
2. **Sistema de coordenadas**: Para simplificar la experiencia de usuario, GEU presenta las coordenadas geográficas en el sistema *WGS84 - UTM* (zona 30S por defecto), pero la base de datos remota opera internamente con coordenadas esféricas. Por esto, debe indicarse en este punto cualquier modificación sobre el sistem de coordenadas con objeto de mantener la consistencia de los datos almacenados.
3. **Zona**: Por último, debe asignarse la zona correspondiente a los datos tratados. En este ejemplo, corresponden a la Zona asociada a la finca *J2*.

![image](../Assets/Images/segment_upload.png)