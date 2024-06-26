---
title: Selección de puntos y estadísticas espectrales
layout: default
parent: Casos de uso y ejemplos
nav_order: 5
---

- [Selección de puntos](#selección-de-puntos)
  - [Carga de la nube y ventana de selección](#carga-de-la-nube-y-ventana-de-selección)
    - [Modos de selección](#modos-de-selección)
- [Análisis espectral](#análisis-espectral)
  - [Ventana de análisis espectral](#ventana-de-análisis-espectral)



{: .highlight }
La funcionalidad detalla en esta sección se encuentra en proceso de implementación y podría no estar disponible en GEU o generar errores durante el funcionamiento de la aplicación.

# Selección de puntos

Ciertos procesos relacionados al uso de nubes de puntos requieren trabajar con un subconjunto de puntos en lugar de la nube en su totalidad. En las siguientes secciones quedará detallado el procedimiento para, tras cargar una nube de puntos en GEU, realizar una selección de forma interactiva mediante el puntero sobre la pantalla.

## Carga de la nube y ventana de selección

Como primer paso, debe cargar una nube de puntos en la aplicación mediante cualquier método, tal que aparezca en el inspector de la escena activa. Utilizando el clic principal sobre la entrada de la nube en este listado mostrará los detalles sobre la nube, entre los que se incluye el botón "Selección de puntos" para abrir la ventana de selección.


![Vista del inspector tras seleccionar una nube de puntos en GEU](../Assets/Images/seleccion_input.png)

Esta ventana se compone de múltiples controles. El siguiente listado detalla cada una de las regiones marcadas en la imagen de muestra, presentada a continuación:

1. **Información de la nube y selección**: Nombre de la nube sobre la que se realiza la selección y elección del método y tipo de dato a seleccionar. El botón "Iniciar selección" provoca que GEU utilice la próxima acción para realizar el proceso de selección. El botón "Limpiar historial" borrará las entradas del historial de selecciones recientes.
2. **Historial de selección**: Listado con los resultados de selecciones recientes, indicando tipo y cantidad de datos seleccionados. Es posible seleccionar una entrada mediante el clic principal sobre el texto, y eliminarla del listado mediante el botón situado al lateral de cada entrada.
3. **Propiedades de visualización**: Ajustes para la visualización en la escena 3D de los elementos seleccionados. Adicionalmente, puede marcar la opción "Ver marcadores de depuración" para mostrar las rayos trazados desde la cámara al realizar el proceso de selección activo del historial.

![Ventana de selección de puntos](../Assets/Images/seleccion_window.png)

### Modos de selección

GEU habilita un total de cuatro modos de selección, que constan de métodos de interacción distintos y resultados variados:

 - **Punto**: Mediante un clic con el botón principal del ratón en pantalla, quedará seleccionado el punto más cercano al cursor en el instante del clic. La visualización mostrará un círculo en la escena 3D sobre el punto seleccionado.
 - **Meshlet**: Mediante un clic con el botón principal del ratón en pantalla, quedará seleccionado el *meshlet* más cercano al cursor en el instante del clic, o bien el primer *meshlet* encontrado en la región del clic. Como resumen, un *meshlet* no es más que la conjunción de varios puntos próximos espacialmente; quedan representados principalmente mediante la caja envolvente de los puntos contenidos. La visualización mostrará la caja envolvente sobre la escena 3D del *meshlet* seleccionado.
 - **Área de puntos**: Tras hacer un primer clic y mantener presionado el botón principal del ratón, podrá arrastrar para delimitar un área en la pantalla. Al soltar el botón, todos los puntos de la nube bajo el área delimitada serán seleccionados. La visualización mostrará la caja envolvente en la escena 3D generada por los puntos seleccionados.
 - **Área de *meshlets***: Tras hacer un primer clic y mantener presionado el botón principal del ratón, podrá arrastrar para delimitar un área en la pantalla. Al soltar el botón, todos los meshlets parcial o totalmente dentro del área serán seleccionados. La visualización mostrará todas las cajas envolventes en la escena 3D de los *meshlets* seleccionados.

|![Ejemplo de selección de un punto individual](../Assets/Images/seleccion_selPunto.png)|
|:-:|
|Resultado de la selección de un punto individual|

|![Ejemplo de selección de un área de meshlets](../Assets/Images/seleccion_selMeshlets.png)|
|:-:|
|Resultado de selección de un área de *meshlets*|

# Análisis espectral

Uno de los usos para la selección de un subconjunto de puntos puede aplicarse en la generación de estadísticas espectrales: trabajar en esto con la totalidad de la nube puede inducir problemas de precisión y escalado dada la inmensidad de información disponible. Limitando los resultados a un subconjunto, podrá obtener resultados específicos en regiones de interés delimitadas por la selección.

## Ventana de análisis espectral

Esta funcionalidad se implementa como un módulo en GEU, accesible desde la barra superior de menú en ***Experimental* -> *Análisis espectral***. La ventana asociada presenta diversos parámetros como la nube de puntos objetivo y el atributo a trabajar, seguido de la información propia del subconjunto activo y una gráfica con las estadísticas generadas. El listado de atributos contiene las disintas fuentes espectrales disponibles en GEU, y se encontrarán activadas únicamente aquellas que posea la nube de puntos seleccionada.

![Ventana del módulo Análisis Espectral](../Assets/Images/spectanalysis_window.png)

Para asignar un subconjunto de puntos, debe realizar previamente la selección desde la ventana de selección, mediante el método que desee. Una vez disponga de la entrada en el historial de selecciones recientes, puede arrastrar mediante el clic principal del ratón dicha entrada hasta la ventana de análisis, sobre la información del subconjunto (situado entre dos líneas separadoras en el centro de la ventana).

![Asignación de un resultado de selección para el análisis espectral](../Assets/Images/spectanalysis_drag.png)

Una vez asignado, podrá generar los valores estadísticos propios del subconjunto sobre el tipo de dato espectral seleccionado. En este ejemplo, la nube solo dispone de información hiperespectral, dando lugar a una gráfica con la media y la desviación típica del subconjunto para cada una de las bandas espectrales captadas (correspondientes a distintas longitudes de onda).

![Resultado de la generación de valores estadísticos (hiperespectral)](../Assets/Images/spectanalysis_result.png)

{: .highlight }
Actualmente, el módulo se encuentra en desarrollo y puede sufrir alteraciones visuales y/o de funcionamiento. Además, por motivos de rendimiento, la generación de estadísticas solo puede realizarse en subconjuntos correspondientes a selección de *meshlets*.
