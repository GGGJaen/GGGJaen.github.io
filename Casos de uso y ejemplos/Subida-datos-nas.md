---
title: Subida de datos a los servidores
layout: default
parent: Casos de uso y ejemplos
nav_order: 2
---

- [Subida de datos a los servidores](#subida-de-datos-a-los-servidores)
  - [Conexión a los servidores](#conexión-a-los-servidores)
  - [Formulario de subida](#formulario-de-subida)
  - [Dato existente](#dato-existente)
  - [Dato no existente](#dato-no-existente)
- [Resultados](#resultados)


# Subida de datos a los servidores

Este ejemplo muestra el proceso de subida de datos a los servidores remotos desde GEU, estableciendo sus metadatos para facilitar el acceso posterior a los mismos. Con esta subida, los ficheros quedan almacenados en el servidor NAS y son vinculados a sus metadatos desde la base de datos.

## Conexión a los servidores

Para empezar, debe establecerse la conexión a los servidores remotos. Por defecto, GEU tratará de conectarse automáticamente al servidor NAS nada más ejecutarse. Ambos servidores solo son accesibles desde la red interna de la Universidad de Jaén; cualquier intento de conexión fuera de ella no dará resultados. Si tiene alguna duda sobre el estado y control de las conexiones, vea la página [Conexiones remotas](/Manual%20de%20usuario/Conexiones-remotas).

![Menús para inicio de sesión en servidores remotos](../Assets/Images/remotes_login.png)

Después de iniciar sesión con sus credenciales de usuario o las credenciales por defecto de GEU, puede acceder a la funcionalidad sobre la base de datos para subir la información.

![Menú de acceso a funcionalidad de la base de datos](../Assets/Images/remotes_upload.png)

## Formulario de subida

En este ejemplo, se realizará la subida de imágenes RGB descargadas del tutorial [Descarga y visualización de datos](/Casos%20de%20uso%20y%20ejemplos/Descarga-y-visualizacion-datos) (correspondientes a la finca **J3**), pero el mismo método puede extrapolarse al resto de tipos de datos.

{: .highlight }
> En el caso de los ficheros **hiperespectrales**, debe agrupar los ficheros en una carpeta y seleccionarla para subir todo su contenido; no es posible seleccionar estos ficheros individualmente.

En la siguiente imagen se etiqueta cada paso a seguir al rellenar el formulario con los metadatos necesarios para la subida, detallando a continuación cada una de estas secciones:

1. **Distintivo y tipo**: Cada dato incluye los campos de *distintivo* y *tipo* que permiten diferenciar rápidamente el contenido del mismo (por ejemplo, *Olivar* o *Bosque* y *LiDAR* o *Multiespectral*, respectivamente). Dependiendo del tipo de dato elegido, podrá seleccionar únicamente los ficheros con formatos compatibles.

<ins>Para este ejemplo</ins>, establecemos el *distintivo* en ***Olivar*** y el *tipo* en ***RGB***. A continuación, seleccionamos los ficheros deseados tras hacer clic en el botón **Seleccionar datos**. Este botón abrirá una ventana emergente con un navegador de ficheros del sistema, permitiendo la selección de cuantos ficheros sea necesario.

2. **Zona y Vuelo**: Todo dato presente en la base de datos debe quedar enlazado al **Vuelo** en que se tomó el dato o los datos que lo originan, al igual que la **Zona** correspondiente al lugar concreto.

<ins>Para este ejemplo</ins>, hacemos clic en el botón de consulta, apareciendo una ventana emergente con los filtros al hacer la búsqueda. Para la *Zona*, buscamos y seleccionamos **J3**, mientras que en *Vuelo* asignamos aquel cuya fecha equivale al día 2 de marzo de 2023 (*2023-MAR-02*).

3. **Metadatos opcionales**: Campos opcionales con información adicional y de interés general sobre el dato. *Procesado* indica si el dato ya ha sido tratado previamente; *Software* lista la herramienta utilizada para procesar el dato; *Descripción* muestra información añadida relevante al dato (por ejemplo, número de puntos en nubes de puntos).

<ins>Para este ejemplo</ins>, no se asignan valores a estos campos.

![Formulario de subida de un nuevo dato](../Assets/Images/upload_form.png)

Por último, utilice el botón **Confirmar** para iniciar el proceso de subida de los datos a los servidores remotos.

## Dato existente

Antes de realizar la subida, GEU comprobará previamente la existencia del nuevo dato en los servidores, tratando de evitar duplicidad de la información. En caso positivo, se le informará en pantalla de esta situación y los datos no serán subidos.

![Mensaje informativo sobre la duplicidad de datos](../Assets/Images/upload_duplicated.png)

<ins>En este ejemplo</ins>, será esta la situación que experimente; si ha alcanzado sin problemas este punto del tutorial, GEU está funcionando correctamente y puede realizar la subida de otros datos distintos al aquí propuesto.

## Dato no existente

Cuando se realice la subida de un dato no presente en la base de datos, aparecerá una notificación con una barra de progreso sobre el estado de la subida. Al finalizar, se incorpora el nuevo dato y aparecerá otra notificación indicando el estado de la operación.

![Progreso de subida de un nuevo dato](../Assets/Images/upload_progress.png)

![Confirmación de subida de un nuevo dato](../Assets/Images/upload_success.png)

# Resultados

Al finalizar, si no se encontró ningún problema, los datos quedan almacenados en el servidor NAS y su entrada organizada en la base de datos. 

{: .highlight }
>La información de la siguiente imagen representan datos de prueba dedicado específicamente a este ejemplo, visualizados desde el sistema de ficheros del servidor NAS, pueden diferir del contenido actual de los servidores.

![Ficheros subidos en el directorio del servidor NAS](../Assets/Images/upload_nassuccess.png)