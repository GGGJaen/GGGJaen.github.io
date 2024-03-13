---
title: Gestor de escenas
layout: default
parent: Manual de usuario
nav_order: 3
---

- [Gestor de escenas](#gestor-de-escenas)
  - [Manejo de escenas](#manejo-de-escenas)
  - [Contenidos de escenas](#contenidos-de-escenas)
    - [Funciones básicas](#funciones-básicas)


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

* **Cámaras**: Cámaras de renderizado disponibles (siempre debe existir una cámara activa).
* **Luces**: Luces de la escena para los cálculos de iluminación y sombreado.
* **Modelos**: Modelos 3D importados desde ficheros OBJ.
* **Nubes de puntos**: Nubes de puntos importadas desde ficheros PLY o LAS/LAZ.
* **Imágenes**: Imágenes raster importadas desde ficheros PNG.

|![Inspector y detalles de la escena](../Assets/Images/scenes_inspector.png)|
|:-:|
|Ventanas **Inspector** y **Detalles** de una escena|

### Funciones básicas

* Seleccionando cualquier elemento del listado (botón principal del ratón) en el <ins>inspector</ins>, se actualizará la ventana de <ins>detalles</ins> sobre el elemento en cuestión. Para modelos 3D y nubes de puntos, puede hacer doble clic con el botón principal sobre el objeto en el <ins>inspector</ins>, la cámara activa se posicionará próxima al objeto en el espacio para su visualización.
* Para añadir un nuevo elemento, existen dos alternativas: desde el menú <ins>**Contenido**</ins> de la barra superior, o bien con el botón secundario del ratón sobre el interior de la ventana <ins>inspector</ins>.

|![Menú contextual para añadir objetos a la escena](../Assets/Images/scenes_newinspector.png)|
|:-:|
|Menú contextual para añadir objetos a la escena|

* Para eliminar un elemento, basta con seleccionarlo usando el botón secundario del ratón sobre éste en el <ins>inspector</ins>, con lo que aparecerá un menú contextual que incluye la opción de borrado. En casos concretos, esta opción puede estar deshabilitada según el tipo y estado del objeto: por ejemplo, no es posible borrar la última cámara virtual de la escena, pues se requiere para la visualización.

|![Menú contextual para el borrado de objetos de la escena](../Assets/Images/scenes_deleteinspector.png)|
|:-:|
|Menú contextual para el borrado de objetos de la escena|

