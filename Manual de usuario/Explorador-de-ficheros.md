---
title: Explorador de ficheros
layout: default
parent: Manual de usuario
nav_order: 5
---

# Explorador de ficheros

GEU incorpora un explorador de los ficheros del sistema propio, que le permitirá seleccionar archivos o carpetas cuando sea necesario. Según la necesidad concreto, se limitará la selección a formatos de fichero específico y/o cantidad de elementos seleccionados concreta.

Por ejemplo, al seleccionar una nube de puntos para importarla y visualizarla en GEU, solo podrá seleccionar un resultado. Mientras tanto, al subir datos a los servidores remotos podrá seleccionar varios ficheros.

|![Explorador de ficheros seleccionando una nube de puntos](../Assets/Images/filedialog_overview.png)|
|:-:|
|*Explorador de ficheros seleccionando una nube de puntos*|


|![Explorador de ficheros seleccionando varias imágenes](../Assets/Images/filedialog_overviewmulti.png)|
|:-:|
|*Explorador de ficheros seleccionando varias imágenes*|


## Controles

Este explorador de archivos incluye la funcionalidad básica común al explorador que emplea cualquier sistema operativo actual, permitiendo la navegación entre directorios, creación de nuevas carpetas y búsquedas mediante nombre o filtros. Su uso es también similar otos exploradores; a continuación se listan las acciones más comunes y útiles:

|Acción|Función|
|:-:|:-:|
|Clic principal|Seleccionar el elemento marcado|
|Clic principal + Mayús|Seleccionar todos los elementos entre el seleccionado y el marcado actualmente|
|Clic principal + Ctrl|Añadir o quitar el elemento marcado de la selección|
|Doble clic principal|Seleccionar y confirmar elemento marcado|

Adicionalmente, la ventana presenta diversos botones que facilitarán la navegación por los directorios del sistema.

1. **Directorio y búsqueda**

    Los botones situados en la parte superior permiten, siguiendo el orden de izquierda a derecha: crear una carpeta en el directorio actual; ir al directorio raíz de GEU (donde se ejecuta la aplicación); ver las unidades de almacenamiento conectadas al equipo; y cambiar el formato del directorio actual entre botones (como aparece en la imagen siguiente) y texto.

    Bajo estos primeros botones, se encuentra la barra de búsqueda sobre el directorio actual. Introduciendo una expresión en el campo de texto, el listado reflejerá únicamente aquellos ficheros y directorios coincidentes. Presione el botón situado a la izquierda de este campo para restablecer la búsqueda.

2. **Listado de archivos**

    Todos los ficheros y carpetas encontradas en el directorio actual aparecen en un listado, mostrando diversas propiedades individuales como la fecha de edición, tamaño y formato. Mediante este listado podrá seleccionar los archivos deseados.

3. **Selección y formato**

    Por último, el desplegable situado en la parte inferior derecha de la ventana permite establecer un filtro para el formato de los ficheros. El explorador solo mostrará ficheros con un formato compatible al seleccionado y carpetas.

    Junto al desplegable se encuentra un campo informativo con el nombre del fichero seleccionado o la cantidad de ficheros seleccionados.

![Ventana de explorador de ficheros](../Assets/Images/filedialog_controls.png)