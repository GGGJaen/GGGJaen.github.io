/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "GEU", "index.html", [
    [ "¡Bienvenido a GEU Docs!", "index.html", null ],
    [ "Manual de buenas prácticas", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html", [
      [ "Porque somos buenos compañeros", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#porque-somos-buenos-compañeros", [
        [ "Cada persona es responsable de su propio módulo", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#cada-persona-es-responsable-de-su-propio-módulo", null ],
        [ "Se debe documentar el código", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#se-debe-documentar-el-código", null ],
        [ "Manten actualizado el manual de usuario", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#manten-actualizado-el-manual-de-usuariogeudocscomo-actualizar-el-manual-de-usuariomd", null ],
        [ "Manten actualizado el manual de desarrollador", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#manten-actualizado-el-manual-de-desarrolladorgeudocscomo-actualizar-el-manual-de-desarrolladormd", null ],
        [ "Utiliza el tablero Kanban", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#utiliza-el-tablero-kanban", null ],
        [ "Pregunta", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#pregunta", null ]
      ] ],
      [ "Para mantener la cordura", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#para-mantener-la-cordura", [
        [ "Evita modificar GEU Core", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-modificar-geu-core", null ],
        [ "Los módulos deben de ser autocontenidos", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#los-módulos-deben-de-ser-autocontenidos", null ],
        [ "Los unit tests son tus amigos", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#los-unit-tests-son-tus-amigos", null ],
        [ "Evita el uso de std::cout a favor del logger", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-el-uso-de-stdcout-a-favor-del-logger", null ],
        [ "Manten los cambios experimentales aislados hasta que sean estables", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#manten-los-cambios-experimentales-aislados-hasta-que-sean-estables", null ],
        [ "Reporta los bugs que encuentres", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#reporta-los-bugs-que-encuentres", null ]
      ] ],
      [ "Para mejorar el rendimiento", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#para-mejorar-el-rendimiento", [
        [ "El Profiler es tu mejor arma", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#el-profiler-es-tu-mejor-arma", null ],
        [ "Piensa en una arquitectura que no sea un obstaculo", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#piensa-en-una-arquitectura-que-no-sea-un-obstaculo", null ],
        [ "Usa OpenMP", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#usa-openmp", null ],
        [ "Si nada más funciona", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#si-nada-más-funciona", null ]
      ] ],
      [ "Para mantener los tiempos de compilación controlados", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#para-mantener-los-tiempos-de-compilación-controlados", [
        [ "Usa forward declaration cuando sea posible", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#usa-forward-declaration-cuando-sea-posible", null ],
        [ "Evita incluir librerías de STL en los headers", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-incluir-librerías-de-stl-en-los-headers", null ],
        [ "Usa los Precompiled Headers", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#usa-los-precompiled-headershttpsenwikipediaorgwikiprecompiled_header", null ],
        [ "Evita el uso de Header only e Inlining", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-el-uso-de-header-only-e-inlining", null ],
        [ "C++ Build Insights también es tu amigo", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#c-build-insights-también-es-tu-amigo", null ]
      ] ],
      [ "", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#blockquote", null ],
      [ "Lectura recomendada", "d2/d03/md__c_1_2_g_e_u_2_docs_2_buenas_01practicas.html#lectura-recomendada", null ]
    ] ],
    [ "Cómo actualizar el manual de desarrollador", "d2/d03/md__c_1_2_g_e_u_2_docs_2_como_01actualizar_01el_01manual_01de_01desarrollador.html", null ],
    [ "Cómo actualizar el manual de usuario", "d2/d00/md__c_1_2_g_e_u_2_docs_2_como_01actualizar_01el_01manual_01de_01usuario.html", null ],
    [ "Cómo desplegar una nueva versión", "d3/d00/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html", [
      [ "En GitHub", "d3/d00/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html#en-github", null ],
      [ "En el instalador", "d3/d00/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html#en-el-instalador", null ],
      [ "En el AutoUpdater", "d3/d00/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html#en-el-autoupdater", null ]
    ] ],
    [ "Generación del proyecto", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html", [
      [ "⏮️Previos", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#️previos", null ],
      [ "📘Instrucciones", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#instrucciones", [
        [ "Cómo generar el proyecto para Visual Studio", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-generar-el-proyecto-para-visual-studio", null ],
        [ "Cómo añadir un nuevo módulo", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-añadir-un-nuevo-módulo", null ],
        [ "Cómo eliminar/desactivar un módulo", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-eliminardesactivar-un-módulo", null ],
        [ "Cómo activar un módulo desactivado", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-activar-un-módulo-desactivado", null ]
      ] ]
    ] ],
    [ "Glosario de herramientas", "d1/d05/md__c_1_2_g_e_u_2_docs_2_glosario_01de_01herramientas.html", null ],
    [ "Glosario de términos", "dd/d05/md__c_1_2_g_e_u_2_docs_2_glosario_01de_01téinos.html", null ],
    [ "Instalación de GEU para desarrolladores", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html", [
      [ "📘Instrucciones", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html#instrucciones-1", [
        [ "Herramientas iniciales a instalar", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html#herramientas-iniciales-a-instalar", null ],
        [ "Primeros pasos", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html#primeros-pasos", null ],
        [ "Aspectos adicionales a considerar", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html#aspectos-adicionales-a-considerar", null ]
      ] ]
    ] ],
    [ "Índices de vegetación y análisis hiperespectral", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html", [
      [ "Un poco de teoría", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#un-poco-de-teoría", [
        [ "Región visible", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#región-visible", null ],
        [ "Región NIR", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#región-nir", null ],
        [ "Red Edge", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#red-edge", null ]
      ] ],
      [ "Analisis_HyperGUIAdapter", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#analisis_hyperguiadapter", [
        [ "NDVI + NDRE", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#ndvi--ndre", null ],
        [ "TVI", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#tvi", [
          [ "Cargar el hipercubo", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#cargar-el-hipercubo", null ],
          [ "Leer metadatos", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#leer-metadatos", null ],
          [ "Leer bandas", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#leer-bandas", null ],
          [ "Recorrer la imagen pixel a pixel.", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#autotoc_md1-recorrer-la-imagen-pixel-a-pixel", null ],
          [ "Calcular TVI", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#autotoc_md2-calcular-tvi", null ],
          [ "Normalizar valores", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#autotoc_md3-normalizar-valores", null ]
        ] ],
        [ "MSAVI", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#msavi", null ],
        [ "Output", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#output", [
          [ "CSV", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#csv", null ],
          [ "JPEG", "d3/d07/md__c_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#jpeg", null ]
        ] ]
      ] ]
    ] ],
    [ "Localización e idiomas", "d1/d03/md__c_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html", [
      [ "Incorporación de un nuevo idioma o término", "d1/d03/md__c_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html#incorporación-de-un-nuevo-idioma-o-término", null ],
      [ "Uso de cadenas localizadas en Visual Studio", "d1/d03/md__c_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html#uso-de-cadenas-localizadas-en-visual-studio", null ]
    ] ],
    [ "Nubes de puntos", "db/d00/nubes-de-puntos.html", null ],
    [ "Unit tests", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html", [
      [ "📘 Instrucciones", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html#autotoc_md-instrucciones", [
        [ "Cómo crear un unit test", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html#cómo-crear-un-_unit-test_", null ],
        [ "Cómo lanzar los Unit test", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html#cómo-lanzar-los-unit-test", null ]
      ] ]
    ] ],
    [ "Uso del Logger", "dc/d05/md__c_1_2_g_e_u_2_docs_2_uso_01del_01_logger.html", null ],
    [ "Miembros del espacio de nombres ", "namespacemembers.html", [
      [ "Todos", "namespacemembers.html", "namespacemembers_dup" ],
      [ "Funciones", "namespacemembers_func.html", null ],
      [ "Variables", "namespacemembers_vars.html", null ],
      [ "typedefs", "namespacemembers_type.html", null ],
      [ "Enumeraciones", "namespacemembers_enum.html", null ],
      [ "Valores de enumeraciones", "namespacemembers_eval.html", null ]
    ] ],
    [ "Clases", "annotated.html", [
      [ "Lista de clases", "annotated.html", "annotated_dup" ],
      [ "Índice de clases", "classes.html", null ],
      [ "Jerarquía de clases", "hierarchy.html", "hierarchy" ],
      [ "Miembros de clases", "functions.html", [
        [ "Todos", "functions.html", "functions_dup" ],
        [ "Funciones", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "typedefs", "functions_type.html", null ],
        [ "Enumeraciones", "functions_enum.html", null ],
        [ "Valores de enumeraciones", "functions_eval.html", null ],
        [ "Símbolos relacionados", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Ejemplos", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d1/d02/class_g_e_u_1_1_image_tree_segmentation.html#ac9046ae1ab6003e5f1351348fddd8b81",
"d2/d01/struct_g_e_u_1_1_g_p_u_resources.html#af292c70b27838641ff231dc60eaa9433a912830f28808f71a373d26d5fe6369db",
"d3/d00/class_g_e_u_1_1_thermal_augment.html#a5744648f0d918b565c8c479809d0c676",
"d4/d01/class_g_e_u_1_1_light_properties.html#a9f4f35ca2b1cdeda15519da2f1d7cd89",
"d5/d00/struct_database_1_1_dron.html",
"d7/d06/class_g_e_u_1_1_cloud_export_dialog_popup.html#a092d04abdbff3af00eecdbd5d748c8ba",
"d8/d04/class_im_gui_toast.html#afc6e18786a35bccfd12afb2050e68f05",
"da/d01/class_g_e_u_1_1_inspector_window.html#a3a09148efb45473e0df187a85a8d0c8f",
"db/d04/class_g_e_u_1_1_model3_d.html#a6d54d98f7abd69ac5060ab27538d92a4",
"dc/d06/class_g_e_u_1_1_texture.html#a5cdc54384bf8224134a6e119d85ad69d",
"dd/d07/struct_database_1_1_vuelo.html#a5f5335ba4bfb78b91c7e37528b45e7fc",
"de/d05/structunibn_1_1_l2_distance.html#abbf9c8554977155f00f22e125dd02ab3"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';