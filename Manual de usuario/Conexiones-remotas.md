---
title: Conexiones remotas
layout: default
parent: Manual de usuario
nav_order: 6
---
# Conexiones remotas

Además de poder trabajar con ficheros ubicados en el sistema, GEU permite establecer conexión con un servidor NAS y la base de datos asociados al grupo. De esta manera, podrá descargar los datos necesarios para aplicar cualquier operación sobre ellos y, posteriormente, subir los resultados para que sean accesibles por el resto de usuarios.

![Iconos de estado de las conexiones remotas en GEU (desconectado)](../Assets/Images/remote_disconected.png)

![Iconos de estado de las conexiones remotas en GEU (conectado)](../Assets/Images/remote_connected.png)


El estado de ambas conexiones queda siempre visible desde la barra de menú superior, donde un círculo rojo indicará que no se ha iniciado sesión y un círculo con un punto en su interior verde representa una conexión establecida correctamente. Es recomendable iniciar sesión en ambos servidores para evitar problemas al intentar descargar o subir información remota.

## Base de datos

Una vez se ha iniciado sesión, el tratamiento con la base de datos se reduce a dos acciones específicas:

* Descargar datos: Tras consultar los datos disponibles en el sistema remoto, podrá descargar a su máquina una copia de los ficheros asociados; quedarán almacenados en una carpeta temporal.
* Subir datos: Al finalizar cualquier operación sobre los ficheros, podrá subir el resultado a los servidores remotos para que sea almacenado. Deberá indicar diversos parámetros en un formulario según el tipo de dato a subir.

## Ejemplo 1: Descarga de datos

Después de iniciar sesión en ambos servidores, el proceso de consulta y descarga de datos se realiza a través de un formulario; estableciendo los filtros deseados puede, además, encontrar de una manera rápida dar con el dato en cuestión. Una vez encontrado, basta con seleccionar la entrada correspondiente y presionar el botón de confirmación.

![Formulario de consulta para la descarga de datos](../Assets/Images/remote_query.png)

Si no surgen problemas, aparecerá una notificación confirmando el resultado y los datos correspondientes serán descargados y almacenados en una carpeta temporal, 'Cache' junto al directorio de la aplicación. Para aquellos tipos de dato que puedan importarse directamente al visor (nubes de puntos en formato PLY principalmente), serán importados en una nueva escena de manera automática.

## Ejemplo 2: Subida de datos

Por otro lado, también puede realizar la subida de un nuevo dato a los servidores remotos. Esto será interesante para nuevos datos recién tomados o generados, de forma que sean indexados y puedan ser accesibles en cualquier momento. El caso de este ejemplo se centra en la subida de ficheros en general; el siguiente ejemplo, [[Ejemplo 3: Subida de resultados | Conexiones remotas#Ejemplo 3 Subida de resultados]], mostrará la subida directa de los resultados generados por GEU.

Seleccionando la opción de subida desde la barra de menú, aparecerá una nueva ventana presentando el formulario con la información adicional requerida. Antes de rellenar esos metadatos, debe escoger el tipo de dato y su distintivo (opcional), lo cual habilita la selección de ficheros en su equipo. Según el tipo de dato, se le pedirá seleccionar uno o varios ficheros de formatos concretos, o un directorio para tipos que requieran multitud de ficheros o de diversos tipos.

![Selección de datos para la subida](../Assets/Images/remote_upload.png)

Al asignar los metadatos, tiene la opción de consultar y asociar datos ya existentes en la base de datos (mediante una consulta), o insertar nuevas entradas para ciertos valores (principalmente para los datos de la Zona y el Vuelo de los cuales se han extraído los datos). Con todos los campos asignados, se habilitará el botón de confirmación con el cual dará comienzo la subida.

![Finalización del formulario de subida de datos](../Assets/Images/remote_upload_done.png)

Si no surgen problemas durante el proceso de subida, aparecerán notificaciones de confirmación y los nuevos datos quedarán almacenados en su ruta respectiva en el servidor NAS e indexados en la base de datos para su posterior consulta.

## Ejemplo 3: Subida de resultados

Por último, otra alternativa para la subida de datos consiste en la publicación de los resultados generados en GEU. Aunque esto requiere el uso de datos previamente descargados desde los servidores remotos también con GEU, permite el rellenado automático de los metadatos necesarios. Así, el proceso de subida se reduce únicamente a un clic.

De nuevo, el resultado de la operación de subida se presentará mediante una notificación. En caso de éxito, el dato quedará almacenado en la base de datos y el servidor NAS en su ruta correspondiente.