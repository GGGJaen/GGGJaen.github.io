---
title: Conexiones remotas
layout: default
parent: Manual de usuario
nav_order: 4
---
# Conexiones remotas

Además de poder trabajar con ficheros ubicados en el sistema, GEU permite establecer conexión con un servidor NAS y la base de datos asociados al grupo. De esta manera, podrá descargar los datos necesarios para aplicar cualquier operación sobre ellos y, posteriormente, subir los resultados para que sean accesibles por el resto de usuarios.

![Iconos de estado de las conexiones remotas en GEU (desconectado)](../Assets/Images/remote_disconected.png)

![Iconos de estado de las conexiones remotas en GEU (conectado)](../Assets/Images/remote_connected.png)


El estado de ambas conexiones queda siempre visible desde la barra de menú superior, donde un círculo rojo indicará que no se ha iniciado sesión y un círculo con un punto en su interior verde representa una conexión establecida correctamente. Cualquier operación que requiera la subida o descarga de datos requiere la conexión a ambos servidores.

## Base de datos

Una vez se ha iniciado sesión, el tratamiento con la base de datos se reduce a dos acciones específicas:

* **Descargar datos**: Tras consultar los datos disponibles en el sistema remoto, podrá descargar a su máquina una copia de los ficheros asociados; quedarán almacenados en una carpeta temporal.
* **Subir datos**: Al finalizar cualquier operación sobre los ficheros, podrá subir el resultado a los servidores remotos para que sea almacenado. Deberá indicar diversos parámetros en un formulario según el tipo de dato a subir.
