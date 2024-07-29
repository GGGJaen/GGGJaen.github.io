---
title: Fusión de datos espectrales
layout: default
parent: Casos de uso y ejemplos
nav_order: 3
---

- [Térmica](#térmica)
- [Multiespectral](#multiespectral)
- [Hiperespectral](#hiperespectral)
  - [Descarga de datos - Nube de puntos](#descarga-de-datos---nube-de-puntos)
  - [Descarga de datos - Hiperespectral](#descarga-de-datos---hiperespectral)
  - [Fusión de datos hiperespectrales](#fusión-de-datos-hiperespectrales)
  - [Visualización](#visualización)

# Térmica

En proceso
{: .label .label-yellow }

# Multiespectral

## Prerequisitos

Para realizar la fusión entre una nube de puntos, obtenida mediante SfM o LiDAR, y datos multiespectrales en forma de imágenes obtenidas mediante cámaras requerimos de ciertos pasos previos imposibles de realizar en GEU. 

{: .important}

> Es necesario tener instalado Pix4D, además de saber realizar el procesamiento SfM con el mismo.

En primer lugar, debemos generar una nube de puntos SfM utilizando las imágenes multiespectrales. De este proceso, se generarán varios ficheros: la nube de puntos y varios ficheros de metadatos. Si bien la nube de puntos generada puede ser de interés y resulta conveniente guardarla, dedido principalmente a la lentitud del proceso SfM, lo que realmente se necesita son los ficheros de metadatos. Más concretamente, aquel que contiene los parámetros optimizados de la cámara y el que contiene el offset aplicado a la nube. Normalmente tienen el siguiente formato:

> NombreNube_calibrated_camera_parameters.txt
> 
> NombreNube_offset.xyz

{: .note}

> A tener en cuenta
> 
> En caso de estar generando los datos para subirlos a la base de datos, dichos ficheros se debe de incluir como "Additional Data".

El fichero de parámetros de la cámara contiene información sobre la posición y rotación de cada una de las imágenes multiespectral, por lo que resulta esencial para realizar la fusión.

El fichero de offset nos indica que translacción se ha realizado sobre la nube multiespectral generada para ponerla en las coordenadas actuales y, por tanto, es necesaria deshacer para el proceso de fusión. Si bien este fichero es prácticamente esencial, se puede calcular a partir del fichero de offset de la nube RGB y un proceso de alineamiento manual + ICP con Cloud Compare. No obstante, este proceso puede llevar a errores dificil de detectar, además de requerir bastante más esfuerzo por parte del usuario, por lo que se desaconseja su uso.

## Fusión de datos multiespectrales

De manera similar al resto de fusiones, la manera de acceder al módulo de fusión multiespectral es através del menú de fusión, situado en la barra superior de la aplicación: **Fusión -> Multiespectral**. Se abrirá una ventana como esta:
![multi-window.png](../Assets/Images/multi-window.png)

Nada más abrirla solo se podrán seleccionar los campos esenciales para realizar el proceso de fusión. Conforme se rellenen dichos campos, aparecerán el resto de campos opcionales. 

En primer lugar, debemos seleccionar el directorio donde se encuentran las imágenes multiespectrales. En dicho directorio solo se deben de encontrar las imágenes multiespectrales y nada más. Una vez lo seleccionemos, el módulo lo analizará detectando todas las imágenes presentes, así como el fabricante y el modelo de cámara utilizado. En caso de que se intente fusionar imágenes de un modelo no soportado, se informará al usuario convenientemente. 

![multi-select-directory.png](../Assets/Images/multi-select-directory.png "Interfaz tras seleccionar el directorio de imágenes")

En segundo lugar, debemos seleccionar el fichero de parámetros SfM pulsando el botón *Abrir fichero de cámaras*. Tras abrirlo, al igual que con la selección del directorio de imágenes, se analizará y se informará de cualquier situación anómala detectada.

![multi-select-camera.png](../Assets/Images/multi-select-camera.png "Interfaz tras seleccionar el fichero de cámaras. Se puede ver una advertencia debido a que el nº de cámaras no coincide con el nº de imágenes.")

Tras esto, solo queda seleccionar la nube. Esta se deberá encontrar cargada en GEU para poder ser seleccionada. 



En este punto se podrá iniciar el proceso de fusión. No obstante, existen tres ficheros adicionales opcionales que se pueden incluir:

- Offset: Fichero que indica la translación a aplicar para alinear las nubes. En un caso típico, se seleccionará esta opción frente a la transformación ICP. Debe de ser un fichero tipo XYZ. También se da la opción de introducir los valores a mano.

- Transformación ICP: Solo necesario en caso de haber tenido que alinear la nube RGB y Multiespectral a mano. Su formato es el siguiente:
  
  ```
  0.999212 -0.019634 0.034462 -71.906822
  0.022034 0.997254 -0.070687 -6.331425
  -0.032980 0.071391 0.996899 -1.942858
  0.000000 0.000000 0.000000 1.000000
  *
  1.000000 0.000000 0.000000 0.000000
  0.000000 1.000000 0.000000 0.000000
  0.000000 0.000000 1.000000 0.000000
  0.000000 0.000000 0.000000 1.000000
  ```
  
  Donde una de las matrices es el alineamiento manual y la otra el resultado del alineamiento ICP. En ambos casos, será la nube multiespectral la que se desplace.

- Calibración de cada banda: Factor de calibración de cada banda multiespectral. Sigue el siguiente formato:
  
  ```
  1.0
  1.0
  1.0
  1.0
  1.0
  ```



Una vez se pulse el botón de *Mapeo 3D*, dará comienzo el mismo, bloqueandose todos los campos de la interfaz y apareciendo una barra de progreso que nos informará del mismo. El tiempo de cómputo dependerá tanto del tamaño de la nube y de las imágenes utilizadas como del número de las mismas.

![multi-mapping.png](../Assets/Images/multi-mapping.png)

## Visualización

Una vez realizada la fusión, es posible visualizar cada banda espectral estableciendo el modo de visualización a *Multiespectral* desde la ventana de *detalles* con la nube seleccionada en el *inspector*. Se puede cambiar la banda a visualizar mediante el slider que aparece justo debajo del selector de modo. 



# Hiperespectral

## Descarga de datos - Nube de puntos

Siguiendo el mismo procedimiento indicado en el ejemplo [Descarga y visualización de datos](/Casos%20de%20uso%20y%20ejemplos/Descarga-y-visualizacion-datos), realizamos la descarga de la nube de puntos correspondiente a la zona *Puente del Obispo*, al ser una que dispone de información hiperespectral.

Ya que buscamos nubes de puntos, establecemos el filtro de tipo a *SfM* y *LiDAR*. Además, añadimos el distintivo *Puente* para limitar los resultados aún más. Según el contenido de la base de datos, puede obtener resultados distintos al mostrado en este ejemplo; el flujo de trabajo es idéntico independientemente de este factor, solo debe asegurarse de utilizar datos parejos de la misma toma (por ejemplo, fusionar datos espectrales del año 2022 con una nube de puntos de 2024 podría originar incongruencias).

![Ventana de consulta para nubes de puntos con distintivo *Puente*](../Assets/Images/fusion_hiper_querynube.png)

## Descarga de datos - Hiperespectral

A continuación, descargamos también, de la misma zona, los datos hiperespectrales asociados.

![Ventana de consulta para datos hiperespectrales con distintivo *Puente*](../Assets/Images/fusion_hiper_querydato.png)

## Fusión de datos hiperespectrales

Una vez la nube de puntos está cargada en GEU y disponemos de la información hiperespectral, abrimos el menú de fusión hiperespectral situado en la barra superior: ***Fusión -> Hiperespectral***. En la ventana que aparece, debe especificarse el fichero hiperespectral (hipercubo) de entrada. Si la carga se realiza sin problemas, es posible previsualizar las distintas bandas espectrales incluidas en el hipercubo, a modo de imagen ráster. Utilice la barra lateral para establecer la banda a previsualizar.

![Ventana de fusión hiperespectral, visualizando bandas del hipercubo](../Assets/Images/fusion_hiper_input.png)

Debido al tamaño de estos datos y las nubes de puntos, trabajar simultáneamente con todas las bandas no es recomendable: pueden originarse problemas de memoria del sistema y originar un gran impacto en el rendimiento tanto de la aplicación como del sistema. Por esto, queda habilitado un selector del rango de bandas a emplear durante la fusión, limitando el proceso a únicamente dichas bandas.

![Ventana de fusión hiperespectral, resaltando el selector de rango de bandas a utilizar](../Assets/Images/fusion_hiper_bandsrange.png)

Después de asignar un rango de bandas, solo resta seleccionar la nube de puntos objetivo (automáticamente se asigna la primera nube de la escena, revise que es la nube correcta antes de iniciar la fusión). Como ya se ha mencionado, este proceso requiere un alto coste en tiempo de ejecución y puede tomar varios minutos.

![Ventana de fusión hiperespectral, resaltando el selector de nubes de puntos y control y estado de la fusión](../Assets/Images/fusion_hiper_fusing.png)

## Visualización

Con la información hiperespectral fusionada a la nube de puntos, es posible visualizar cada banda espectral estableciendo el modo de visualización a *<ins>Hiperespectral</ins>* desde la ventana de *detalles* con la nube seleccionada en el *inspector*. Utilice la barra deslizante para seleccionar la banda visualizada. Recuerde que únicamente contienen información aquellas bandas dentro del rango establecido durante la fusión.

![Visualización del resultado de la fusión hiperespectral sobre la nube cargada en GEU](../Assets/Images/fusion_hiper_result.png)
