---
title: Descarga y visualización de datos
layout: default
parent: Casos de uso y ejemplos
nav_order: 1
---

# Descarga y visualización de datos

Este ejemplo muestra el proceso de búsqueda y descarga de los datos relativos a una parcela concreta desde GEU, accediendo a la base de datos y servidor de almacenamiento NAS remotos. Tras la descarga, se procede a la visualización con los datos seleccionados.

## Conexión a los servidores

Para empezar, debe establecerse la conexión a los servidores remotos. Por defecto, GEU tratará de conectarse automáticamente al servidor NAS nada más ejecutarse. Ambos servidores solo son accesibles desde la red interna de la Universidad de Jaén; cualquier intento de conexión fuera de ella no dará resultados.

![Menús para inicio de sesión en servidores remotos](../Assets/Images/remotes_login.png)

Después de iniciar sesión con sus credenciales de usuario o las credenciales por defecto de GEU, puede acceder a la funcionalidad sobre la base de datos para consultar la información.

![Menú de acceso a funcionalidad de la base de datos](../Assets/Images/remotes_loggedin.png)

## Consulta y descarga de datos

En este ejemplo, utilizaremos los datos de la finca **J1**. Concretamente, buscaremos la nube de puntos RGB generada mediante SfM para cargarla y visualizarla en GEU. Seleccionando la opción *Descargar* del menú de la base de datos, aparecerá la ventana de consulta con los distintos filtros posibles:

![Ventana de consulta sobre la base de datos](../Assets/Images/downloaddata_query.png)

El dato que buscamos es de tipo SfM, y cuenta con el distintivo "Olivar". Simplemente con estos dos filtros, la consulta encuentra 4 datos compatibles. Marcando aquel correspondiente a la zona J1 se habilitará el botón de confirmación para iniciar la descarga.

![Descarga en progreso desde el servidor NAS](../Assets/Images/downloaddata_download.png)

## Visualización

Una vez finalizada la descarga, el fichero o carpeta queda almacenado junto al directorio de GEU en una carpeta temporal *Cache*. Esta carpeta sigue el mismo esquema presente en el servidor NAS:
```
/GEU/Cache/Datos de campo/Distintivo/Provincia/Municipio/Ubicacion/Fecha/Tipo/
```

En este ejemplo, el fichero descargado queda en el siguiente directorio:
```
/GEU/Cache/Datos de campo/Olivar/Jaen/Marmolejo/J1/2023-03-25/SfM
```

Al descargar nubes de puntos, GEU abrirá el fichero automáticamente una vez finaliza la descarga, añadiendo la nube a la escena activa.

![Visualización de la nube de puntos una vez importada](../Assets/Images/downloaddata_view.png)