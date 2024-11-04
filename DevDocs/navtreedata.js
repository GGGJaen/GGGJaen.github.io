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
    [ "Cómo desplegar una nueva versión", "d4/d02/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html", [
      [ "En GitHub", "d4/d02/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html#en-github", null ],
      [ "En el instalador", "d4/d02/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html#en-el-instalador", null ],
      [ "En el AutoUpdater", "d4/d02/md__c_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html#en-el-autoupdater", null ]
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
    [ "Glosario de herramientas", "d3/d06/md__c_1_2_g_e_u_2_docs_2_glosario.html", null ],
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
    [ "Localización", "d1/d03/md__c_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html", [
      [ "Incorporación de un nuevo idioma", "d1/d03/md__c_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html#incorporación-de-un-nuevo-idioma", null ],
      [ "Uso de cadenas localizadas", "d1/d03/md__c_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html#uso-de-cadenas-localizadas", null ]
    ] ],
    [ "Nubes de puntos", "db/d00/nubes-de-puntos.html", null ],
    [ "Shaders", "d8/d00/shaders.html", null ],
    [ "Unit tests", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html", [
      [ "📘 Instrucciones", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html#autotoc_md-instrucciones-1", [
        [ "Cómo crear un unit test", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html#cómo-crear-un-_unit-test_", null ],
        [ "Cómo lanzar los Unit test", "d3/d07/md__c_1_2_g_e_u_2_docs_2_unit_01tests.html#cómo-lanzar-los-unit-test", null ]
      ] ]
    ] ],
    [ "Uso del Logger", "dc/d05/md__c_1_2_g_e_u_2_docs_2_uso_01del_01_logger.html", null ],
    [ "Lista de tareas pendientes", "dd/d00/todo.html", null ],
    [ "Espacios de nombres", "namespaces.html", [
      [ "Lista de espacios de nombres", "namespaces.html", "namespaces_dup" ],
      [ "Miembros del espacio de nombres ", "namespacemembers.html", [
        [ "Todos", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Funciones", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "typedefs", "namespacemembers_type.html", null ],
        [ "Enumeraciones", "namespacemembers_enum.html", null ],
        [ "Valores de enumeraciones", "namespacemembers_eval.html", null ]
      ] ]
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
    [ "Archivos", "files.html", [
      [ "Lista de archivos", "files.html", "files_dup" ],
      [ "Miembros de los archivos", "globals.html", [
        [ "Todos", "globals.html", "globals_dup" ],
        [ "Funciones", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "typedefs", "globals_type.html", null ],
        [ "Enumeraciones", "globals_enum.html", null ],
        [ "Valores de enumeraciones", "globals_eval.html", "globals_eval" ],
        [ "defines", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Ejemplos", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d0/d07/class_env_point_cloud.html#aaffe506925e4e620af70288e5c12d569",
"d1/d03/class_g_e_u_1_1_f_b_o_render.html#a2ed5bce289f68b4634e0e76162017f49",
"d2/d00/class_g_e_u_1_1_lines_model.html#ad87ec93a3e72d9eee2f1d41f97e8f346",
"d2/d03/class_g_e_u_1_1_n_a_s_session.html#a865fbe49cfb77213703237ce479c33f6",
"d2/d05/struct_database_1_1_sensor.html#a8fabb0f1b961b881ab66bc8a2d178d42",
"d3/d03/_typedefs_8h.html#a43182e59794291f6ab00e51b160706c2",
"d3/d07/class_g_e_u_1_1_tree_detection_g_u_i_adapter.html#afba9c16e20bb1b5a4e39f27e3d4c3607",
"d4/d01/class_g_e_u_1_1_light_properties.html#a46d1840cb3a203d4f406a7a15e780578",
"d4/d05/json_8h_source.html",
"d4/d07/class_g_e_u_1_1_point_cloud.html#a4848e9c773e19b0f0d9b7e4c2799c993",
"d5/d00/struct_database_1_1_dron.html#a160b60fc766477fbbd79e4b5a8f757c8",
"d5/d01/_icons_font_awesome6_8h.html#a2516bad0a5e5d1daec1a2202b89bdc8a",
"d5/d01/_icons_font_awesome6_8h.html#a547a1869188384ef4c307b0fb6d7b1ec",
"d5/d01/_icons_font_awesome6_8h.html#a80e3d8e1db6cf5dfe12f686f3f64f67e",
"d5/d01/_icons_font_awesome6_8h.html#aafad2d9cb492d324ec5810eadcbc89c3",
"d5/d01/_icons_font_awesome6_8h.html#addad9c6808c2eefbc9c26bd71aa37818",
"d5/d02/class_g_e_u_1_1_scene.html#ad079a178c5029519e352fd3efc91071f",
"d6/d02/struct_g_e_u_1_1_gui_utilities_1_1_colors.html#a8ea0e01cf8601c81d00b5ae6c5f1e4e0",
"d7/d04/struct_g_e_u_1_1_triangle_mesh_1_1_component.html#ae6d76872ddb35ab857d5216ee8d3fbcb",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#ac99c561e4f9992845d08a61cab6809bbadb9d388f5ee27203c978984808873057",
"d8/d04/class_im_gui_toast.html#ac803efd1f988cbe4054b941e3daa6618",
"d9/d03/class_g_e_u_1_1_popup_system.html#ac5a3536de371167fdf200e8943f8c2b0",
"d9/d07/classjson_1_1jobject_1_1entry.html#a9c574de47f66e388e2bac8f69d01bb8f",
"da/d03/namespace_random_utilities.html#af397f39fe9bbef75b3df74e22e3259c2",
"db/d03/class_projection.html#a4b7d2eafc5a632b50a1afe882ec77931",
"dc/d00/class_g_e_u_1_1_database_query_dato_popup.html#a6b45f3f4957a46091ab0d75b9600a56d",
"dc/d03/class_g_e_u_1_1_i___g_u_i_window.html#a1eecb6ffeef9fe5d82f3913da2b112dd",
"dd/d01/class_g_e_u_1_1_file_manager.html#acb231926a3ab3d27c1ece018f614143b",
"dd/d04/class_g_e_u_1_1_camera.html#afa004d12d68aa244e03ac65c1e3f1cd2",
"de/d02/class_g_e_u_1_1_multiespectral_g_u_i_adapter.html#af60c068588d1808f0fb3f8dc9e03ba0f",
"de/d04/class_g_e_u_1_1_renderer.html#a0260debe7d5d906f74820113f14ed1cd",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a06a2067ce56b46919add02b13033011a",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a780ba353745c035eecf46b077f3cb8be",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573ae8916083eab48f45641b3db654fb50c6",
"df/d07/structjson_1_1parsing_1_1parse__results.html#a4d6ae81fc41392813f64202785ff3a20"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';