---
title: Segmentación 2D
parent: Módulos de la aplicación
grand_parent: Documentación de GEU
layout: default
nav_order: 5
not_ready: true
---

Aunque GEU destaca por su soporte para nubes de puntos 3D, también permite operar con imágenes ráster. Una de las aplicaciones del manejo de imágenes es la segmentación de individuos, por la cual distinguir una serie de regiones de interés del resto de píxeles. Esto es especialmente útil al trabajar con imágenes satelitales sobre zonas de cultivo, pues cada individuo estará considerablemente separado del resto (especialmente, para el caso de plantaciones de olivar).

|![Imagen 2D recortada sobre una zona de cultivo](./EjemploRaster_J2RGB.png){:width="400px"}|
|:-:|
|Imagen 2D recortada sobre una zona de cultivo|

El proceso de segmentación queda implementado mediante la abstracción de varios métodos de *OpenCV*, añadiendo una serie de pasos previos que facilitan la detección de las regiones de interés:

![Esquema del flujo de la información para la segmentación 2D](EsquemaGEU_Segmentacion2D.png)

## Preprocesamiento en GEU


## Detección de las regiones

