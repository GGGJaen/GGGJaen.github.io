---
title: Elementos  de la interfaz
layout: default
parent: Manual de usuario
nav_order: 2

---

# Elementos básicos

Nada más ejecutar GEU, la aplicación presenta la vista principal con una escena vacía, así como una distribución genérica de las distintas ventanas y la barra superior de menú.

![image](../Assets/Images/geu_overview.png)

## Ventanas

Cada una de las ventanas lleva asociado un propósito específico dentro de la aplicación:

* **Inspector**: Listado con los contenidos de la escena activa.
* **Detalles**: Detalles del elemento del inspector seleccionado.
* **Materiales**: Listado de materiales generados en la aplicación.
* **Estadísticas**: Información general sobre el rendimiento de la aplicación.
* **Ajustes**: Propiedades generales de la aplicación.

Para más información sobre el uso del inspector y la ventana de detalles, ver [[Gestor de escenas | Gestor de escenas]].

## Barra superior de menú

La mayor parte de la funcionalidad de GEU queda accesible desde los múltiples botones y menús de esta barra superior, disponible en casi todo momento:

* **Fichero**: Opciones generales para la gestión de escenas.
* **Contenido**: Opciones de carga o creación de elementos para la escena activa.
* **Ventanas**: Desplegable para la visualización de las ventanas disponibles.
* **Conexiones remotas**: Submenú para la gestión y tratamiento de conexiones con BBDD y NAS.
* **Módulos**: Colección de desplegables para el acceso a funcionalidad específica.

# Módulos

El objetivo de GEU es agregar distintas técnicas centradas en el uso de nubes de puntos y el uso de información de entornos rurales en una misma aplicación, simplificando diversas tareas y habilitando la conexión con otras herramientas u entornos. Dada esta necesidad de soportar múltiples aspectos en cuanto a funcionalidad, GEU sigue un esquema basado en módulos, donde cada aspecto concreto queda especializado en una categoría.

Como ejemplo, la sección de *Fusión* incluye utilidades para la fusión de datos térmicos, multiespectrales e hiperespectrales sobre una nube de puntos. Esta sección y las demás que estén disponibles desde GEU serán ejemplificadas en otras páginas de esta misma wiki, mostrando un caso de uso concreto (tratará de ser sobre un entorno real):

* [[Ejemplos de fusión]]
  * [[Térmica | Ejemplos de fusión#Térmica]]
  * [[Multiespectral | Ejemplos de fusión#Multiespectral]]
  * [[Hiperespectral | Ejemplos de fusión#Hiperespectral]]