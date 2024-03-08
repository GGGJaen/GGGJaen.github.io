<!--
---

title: Segmentación de individuos
layout: default
parent: Casos de uso y ejemplos
nav_order: 2

---

# Segmentación de individuos

El módulo de segmentación de individuos permite extraer las regiones correspondientes a árboles individuales a partir de una imagen aérea. En GEU, este proceso queda dividido en dos partes, preprocesamiento y búsqueda/gestión de regiones. Adicionalmente, los resultados podrán ser almacenados en la base de datos remota directamente desde la propia interfaz del módulo.

## Preprocesamiento

En primer lugar, debe seleccionarse la imagen aérea de la zona que se busca segmentar. Es preferible emplear imágenes de alto contraste en que resalten los individuos sobre el resto de elementos (por ejemplo, ciertos índices de vegetación). Tras la selección, GEU procesará automáticamente una versión umbralizada, intensificando el contraste entre fondo y regiones de interés, seguida de otra versión dilatada para expandir esas regiones y facilitar su detección. Los parámetros de ambos procedimientos pueden alterarse según las necesidades de cada imagen:

* **Umbral**: Valor diferenciador al umbralizar la imagen. Los píxeles que no superen este valor se les asignará el valor mínimo, mientras que el resto obtendrán el valor máximo.
* **Umbralización invertida**: Invierte el comportamiento de la umbralización: los píxeles que superen el valor reciben el valor máximo y, el resto, el mínimo.
* **Dimensiones kernel de dilatación**: Dimensiones de la matriz cuadrada empleada al dilatar la imagen. Siembre tomará un valor impar.
* **Kernel de dilatación**: Empleando el botón junto al parámetro anterior, puede editarse cada valor de la matriz. Por defecto, todas las celdas se establecen a 1.
* **Iteraciones de dilatación**: Número de veces que se aplicará la dilatación sobre la imagen. Valores más altos distorsionan más la imagen.

![image](../Assets/Images/segment_input.png)

## Búsqueda y gestión de regiones

Una vez la imagen de entrada ha sido procesada, se recurre a la librería OpenCV para buscar regiones de interés en la imagen dilatada. Esto depende en gran medida de la imagen de entrada, pero puede establecerse el método en que se gestionan internamente los contornos, aunque no suele suponer un impacto considerable en los resultados.

Como método de filtrado, se facilita un rango de tamaño para las regiones encontradas. Aquellas regiones cuyo tamaño no se encuentre en el rango establecido serán descartadas del resultado. Se recomienda ajustar este rango mediante la previsualización del mismo según la imagen a tratar.

Finalmente, el procedimiento de segmentación evalúa la imagen y genera las regiones de interés, mostrándolas sobre la previsualización como rectángulos. Al ser un proceso ciertamente impreciso en estas situaciones, se facilitan herramientas para la gestión de regiones, pudiendo añadir, mover o eliminar regiones manualmente mediante el cursor.

![image](../Assets/Images/segment_areas.png)

## Subida a base de datos

Con todas las regiones establecidas, los resultados pueden subirse a la base de datos remota siempre que se tenga una conexión activa a la misma. Las entradas que tomarán las regiones necesitan una posición geográfica. Esta posición puede obtenerse asignando una nube de puntos georeferenciada o asignando manualmente las coordenadas de las esquinas. 

La zona en que se encuentran los individuos puede asignarse manualmente consultando la base de datos, o de forma automática según las coordenadas geográficas anteriores. Cuando toda la información ha sido asignada, los datos podrán subirse a la base de datos remota.

![image](../Assets/Images/segment_upload.png)
 -->