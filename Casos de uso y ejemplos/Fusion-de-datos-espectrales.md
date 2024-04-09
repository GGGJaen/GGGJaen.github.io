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

En proceso
{: .label .label-yellow }

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
