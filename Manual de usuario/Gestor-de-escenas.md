---
title: Gestor de escenas
layout: default
parent: Manual de usuario
nav_order: 3
---

# Gestor de escenas

La interfaz gráfica de usuario principal de la aplicación se basa en un gestor/inspector de escenas, similar al que proponen motores gráficos como *Unity* ([Jerarquía](https://docs.unity3d.com/Manual/Hierarchy.html); [Inspector](https://docs.unity3d.com/Manual/UsingTheInspector.html)) o herramientas como *Blender* ([Outliner](https://docs.blender.org/manual/en/2.80/editors/outliner.html)). Cada ventana es ajustable dentro de la ventana principal, pudiendo también acoplar varias vistas en una única ventana con pestañas ([docking](https://github.com/ocornut/imgui/issues/2109)).

Las ventanas principales del inspector y detalles muestran una jerarquía o listado de los elementos de la escena y los detalles del elemento seleccionado de la lista, respectivamente (se equiparan a la jerarquía y el inspector de Unity). En todo momento se visualiza otra ventana con un cubo orientado sobre los ejes de origen de la escena, facilitando la orientación al desplazar la cámara en el entorno.

![image](../Assets/Images/scenes_overview.png)

## Manejo de escenas

En la barra de menú superior, se incluyen accesos a funcionalidad básica para gestión de escenas, contenidos de escena, y ventanas. En cuanto a la gestión de escenas, se permite la creación, carga y guardado desde fichero de escenas; este tratamiento se realiza con ficheros binarios generados por la propia aplicación.

![image](../Assets/Images/scenes_manage.png)

Si, por cualquier circunstancia, se intenta cerrar una escena con cambios sin guardar, aparecerá una ventana emergente notificando la posible pérdida de los cambios.

En todo momento, la aplicación mantiene un listado con las escenas activas, habilitando el cambio de una a otra sin necesidad de volver a importarla desde fichero. A la hora de cerrar la aplicación, se comprueba si alguna de las escenas ha sufrido cambios respecto a su estado original, y se mostrará la misma ventana emergente. Tras confirmar o rechazar los cambios, la aplicación quedará terminada.

## Contenidos de escenas

Para la gestión y manejo del contenido de la escena activa, se recurre principalmente a la ventana de inspector, desde la que se podrán añadir, eliminar y ajustar los elementos cargados. El listado de elementos se presenta categorizado en varias secciones:

* **Cámaras**: Cámaras de renderizado disponibles (solo 1 es la cámara activa).
* **Luces**: Luces de la escena para los cálculos de *shader*.
* **Modelos**: Modelos 3D importados desde ficheros “.obj”.
* **Nubes de puntos**: Nubes de puntos importadas desde ficheros “.ply”.
* **Imágenes**: Imágenes raster importadas desde ficheros “.png”.

Seleccionando cualquier elemento del listado (mediante el botón principal del ratón), se activará la ventana *detalles* con la información y parámetros de tal elemento. Para añadir un nuevo elemento, existen dos alternativas: desde el menú *contenido* de la barra superior, o bien con el botón secundario del ratón sobre el interior de la ventana *inspector*. Para eliminar un elemento, basta con seleccionarlo usando el botón secundario en el listado, y aparecerá un menú contextual con la opción de eliminar (en casos concretos, esta opción estará deshabilitada: por ejemplo, al tratar de eliminar la última cámara de la escena; siempre debe haber al menos una cámara activa).
