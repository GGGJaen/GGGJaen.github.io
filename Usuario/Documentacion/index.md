---
title: Documentación de GEU
layout: default
has_children: true
nav_order: 4
---

# ¿Qué es GEU?

El software *GEU* forma parte de un Gemelo Digital enfocado a entornos rurales y la producción e investigación del cultivo, desarrollado por el Grupo de Gráficos y Geomática de Jaén (GGGJ). GEU es una aplicación gráfica e interactiva de escritorio para Windows dedicada al manejo de nubes de puntos e información multisensorial, captadas por drones o satélites.

## Objetivo y alcance

Mediante GEU, los usuarios con suficiente conocimiento sobre el procesamiento de este tipo de información pueden visualizar e interactuar con la escena 3D generada por la nube de puntos, así como explotar la información adicional captada en procesos anteriores. Además, GEU se enfoca con un desarrollo continuo mediante la inclusión de nueva funcionalidad con cada versión, dando soporte a nuevos tipos de sensores, fuentes de información o métodos novedosos al procesar los datos espectrales.

## Funcionalidades

Actualmente, GEU cuenta con la siguiente funcionalidad:

 - Visualización e interacción con nubes de puntos 3D.
 - Fusión de datos multisensoriales: térmica, multiespectral e hiperespectral.
 - Visualización y consulta de información multisensorial sobre la nube de puntos.
 - Detección de individuos sobre cultivo mediante imagen (2D) y nube de puntos (3D).
 - Cálculo de índices de vegetación a partir de la información multisensorial.

# GEU y el Gemelo Digital

El Gemelo Digital que engloba a GEU incluye, a su vez, otros módulos con objetivos específicos que se alejan de la intención principal de GEU:

 1. **Núcleo de GEU**: funcionalidad básica para el manejo de nubes de puntos 3D e información multisensorial.
 2. **Base de Batos relacional**: sistema de almacenamiento dedicado a la gestión de los datos masivos.
 3. **Servidor NAS**: sistema de almacenamiento masivo, estructurado a partir de la Base de Datos relacional.
 4. **Instalación IoT**: empleada como fuente de datos dedicada a tareas de predicción de cosechas.
 5. **Conexión a servicios de satélite**: empleada como fuente de datos general.
 6. **Aplicación de usuario para escritorio**: Interfaz de usuario para el uso de la funcionalidad de GEU, destinada a sistemas Windows.
 7. **Aplicación de usuario para móviles**: Interfaz de usuario para el uso de un subconjunto de funcionalidades de GEU.

![Diagrama de módulos del Gemelo Digital](./EsquemaDT.png)

Siguiendo el esquema anterior, estas páginas se centran en documentar el funcionamiento del núcleo de GEU (*1*) y la aplicación para escritorio (*6*), donde queda más enfocado el desarrollo con mejoras continuas y nuevas funcionalidades específicas.