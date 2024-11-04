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
      [ "📘Instrucciones", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#instrucciones-1", [
        [ "Cómo generar el proyecto para Visual Studio", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-generar-el-proyecto-para-visual-studio", null ],
        [ "Cómo añadir un nuevo módulo", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-añadir-un-nuevo-módulo", null ],
        [ "Cómo eliminar/desactivar un módulo", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-eliminardesactivar-un-módulo", null ],
        [ "Cómo activar un módulo desactivado", "d1/d07/md__c_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-activar-un-módulo-desactivado", null ]
      ] ]
    ] ],
    [ "Glosario de herramientas", "d1/d05/md__c_1_2_g_e_u_2_docs_2_glosario_01de_01herramientas.html", null ],
    [ "Glosario de términos", "dd/d05/md__c_1_2_g_e_u_2_docs_2_glosario_01de_01téinos.html", null ],
    [ "Instalación de GEU para desarrolladores", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html", [
      [ "📘Instrucciones", "d2/d01/md__c_1_2_g_e_u_2_docs_2_guia_01de_01instalació01_g_e_u.html#instrucciones", [
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
"d2/d00/class_g_e_u_1_1_lines_model.html#ab544aceb57667a13e1d42c3bc35d62e2",
"d2/d03/class_g_e_u_1_1_n_a_s_session.html#a79f607f7d16a04104341f8d1c0488689",
"d2/d05/struct_database_1_1_sensor.html#a4d7149a20a4a39c0d224aabf5d6ee7a9",
"d3/d03/_file_manager_8cpp.html",
"d3/d07/class_g_e_u_1_1_tree_detection_g_u_i_adapter.html#af597155c8fedb691b53903b53df12409",
"d4/d01/class_g_e_u_1_1_light_properties.html#a36e8d91c9583c42cd32a356f6c9f0cfb",
"d4/d05/json_8h.html#a811faf05268df9a0f83453fe9a003937",
"d4/d07/class_g_e_u_1_1_point_cloud.html#a46f161f64b41a18d8a262ab90f3e6c65",
"d5/d00/struct_database_1_1_dron.html",
"d5/d01/_icons_font_awesome6_8h.html#a24319fb353fa2bfc5f1aae25ddbfecb3",
"d5/d01/_icons_font_awesome6_8h.html#a540865c415ce6d401327a580ced4f70e",
"d5/d01/_icons_font_awesome6_8h.html#a7fe459dc80ab096e9ab94e03dd3305d9",
"d5/d01/_icons_font_awesome6_8h.html#aaf24469b9ff6ac14acd96da7337a4964",
"d5/d01/_icons_font_awesome6_8h.html#add01cc7c1aa69ef51e94219983252c3c",
"d5/d02/class_g_e_u_1_1_scene.html#ab5b0955ceb4a5bd97f415c3803ccea05",
"d6/d02/struct_g_e_u_1_1_gui_utilities_1_1_colors.html#a091a64b410fe30cc1920d4d726aab67c",
"d7/d04/struct_g_e_u_1_1_triangle_mesh_1_1_component.html#ac6bed4f15fb306bd776c0a72605dddd4",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#ac99c561e4f9992845d08a61cab6809bbac383d195b457c82abdaae2e9f7de4bcf",
"d8/d04/class_im_gui_toast.html#aa8fac09338154542811c1f2c2040c554",
"d9/d03/class_g_e_u_1_1_popup_system.html",
"d9/d07/classjson_1_1jobject_1_1entry.html#a8cbcd041225df788b6558d36f59763f4",
"da/d03/namespace_random_utilities.html#a8a4d647eb2304a77c589ccc1638a8556",
"db/d03/class_projection.html#a367e6bc3a1ffefad827f781d3b34fcce",
"dc/d00/class_g_e_u_1_1_database_query_dato_popup.html#a64cdb006a3fc9207111433cd5c6290e2",
"dc/d03/class_g_e_u_1_1_i___g_u_i_window.html#a060a2dadbaa13b87a57358cf9bd351b3",
"dd/d01/class_g_e_u_1_1_file_manager.html#ab51716fc5bd2ada33d27805c53647e34",
"dd/d04/class_g_e_u_1_1_camera.html#aeb635da2341a0665bcc77e3a6a18dfa3",
"de/d02/class_g_e_u_1_1_multiespectral_g_u_i_adapter.html#ae010685fca60eb1f93cc82367fd3a2c5",
"de/d04/class_g_e_u_1_1_application.html#add51df07594acfc284004bc0f26de930",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a04a4353a9f1903e4262ec5eb93c3c3f8",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a73b9880c90b2533f004e78ac55a3c300",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573ae714d4c604e6a4d60d9cad7df3aabb64",
"df/d07/structjson_1_1parsing_1_1parse__results.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';