---
title: Subida de datos a los servidores
layout: default
parent: Casos de uso y ejemplos
nav_order: 2
---

# Subida de datos a los servidores

Este ejemplo muestra el proceso de subida de datos a los servidores remotos desde GEU, estableciendo sus metadatos para facilitar el acceso posterior a los mismos. Con esta subida, los ficheros quedan almacenados en el servidor NAS y son vinculados a sus metadatos desde la base de datos.

## Conexión a los servidores

Para empezar, debe establecerse la conexión a los servidores remotos. Por defecto, GEU tratará de conectarse automáticamente al servidor NAS nada más ejecutarse. Ambos servidores solo son accesibles desde la red interna de la Universidad de Jaén; cualquier intento de conexión fuera de ella no dará resultados.

![Menús para inicio de sesión en servidores remotos](../Assets/Images/remotes_login.png)

Después de iniciar sesión con sus credenciales de usuario o las credenciales por defecto de GEU, puede acceder a la funcionalidad sobre la base de datos para consultar la información.

![Menú de acceso a funcionalidad de la base de datos](../Assets/Images/remotes_loggedin.png)

## Formulario de subida

En este ejemplo, se realizará la subida de imágenes RGB, pero el mismo método puede extrapolarse al resto de tipos de dato. En la siguiente imagen se etiqueta cada paso a seguir al rellenar el formulario con los metadatos necesarios para la subida, detallando a continuación cada una de estas secciones:

1. **Tipo y distintivo** de los datos: Cada dato se categoriza según su tipo (*LiDAR*, *SfM*, *RGB*, *Multiespectral*, *Termica*, *Hiperespectral*, *Fusion* y *Adicional*), además de un distintivo que representa el contenido de los mismos (por ejemplo, *Olivar* o *Bosque*). Mediante el botón **Seleccionar** podrá, mediante un explorador de ficheros del sistema, seleccionar aquellos ficheros que desee subir; según el tipo de dato, la selección se limitará a unos formatos concretos.
2. **Zona y Vuelo**: Todo dato presente en la base de datos debe quedar enlazado al **Vuelo** en que se tomó el dato o los datos que lo originan, al igual que la **Zona** correspondiente al lugar concreto. Ambos valores pueden asignarse mediante una consulta a la base de datos, seleccionando aquellas entradas correspondientes a los datos a subir.
3. **Metadatos opcionales**: Campos opcionales con información adicional sobre el dato. *Procesado* indica si el dato ya ha sido tratado previamente; *Software* lista la herramienta utilizada para procesar el dato; *Descripción* muestra información añadida relevante al dato (por ejemplo, número de puntos en nubes de puntos).

![](../Assets/Images/upload_form.png)

El resto de campos necesarios, los de Zona y Vuelo, deben rellenarse mediante una consulta a la base de datos, mediante la cual puede buscarse con precisión la información deseada. La consulta para Vuelo tomará la Zona seleccionada como filtro, limitando los resultados a aquellos correspondientes a dicha zona. Finalmente, se exponen los datos opcionales adicionales:

- **Procesado**: ¿El dato se ha procesado o es un dato crudo?
- **Software**: Herramienta empleada en el procesado del dato para su obtención.
- **Descripción**: Información adicional sobre el dato.

Con esto, utilizando el botón de confirmación dará comienzo la subida del dato o datos a ambos servidores, mostrando una serie de notificaciones indicativas del estado de la subida en la esquina inferior derecha de la ventana.

![](../Assets/Images/upload_progress.png)
![](../Assets/Images/upload_success.png)

Al finalizar, si no se encontró ningún problema, los datos quedan almacenados en el servidor NAS y su entrada organizada en la base de datos (la información de la siguiente imagen representan datos de prueba dedicado específicamente a este ejemplo, pueden diferir del contenido actual de los servidores).

![](../Assets/Images/upload_nassuccess.png)