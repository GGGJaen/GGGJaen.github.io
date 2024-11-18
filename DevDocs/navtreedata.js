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
    [ "Arquitectura de transferencia de datos en GEU", "da/d05/md__c_1_2_g_e_u_2_docs_2_arquitectura_01de_01datos_01en_01_g_e_u.html", null ],
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
"d2/d01/struct_g_e_u_1_1_g_p_u_resources.html#af292c70b27838641ff231dc60eaa9433af2bbdf9f72c085adc4d0404e370f0f4c",
"d3/d00/class_g_e_u_1_1_thermal_augment.html#a5a0a096d8ce55e1db6c270487c48c4c9",
"d4/d04/struct_g_e_u_1_1_n_a_s_session_1_1_n_a_s_file.html",
"d5/d03/class_histogram.html#ae8b4704e4f2747ff23354adfa5ff879c",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#ac99c561e4f9992845d08a61cab6809bba3479e5073c2aa5d8a6fc7f5f83382b76",
"d9/d02/class_g_e_u_1_1_triangle_mesh.html#a1e834a362cc76979f92f1d38efd824e8",
"da/d02/struct_g_e_u_1_1_texture_1_1_render_texture_requirements.html",
"db/d06/class_g_e_u_1_1_database_new_vuelo_popup.html#ac1b98a11d860c6c9fe497bdcaa689d79",
"dc/d07/class_g_e_u_1_1_debug_window.html#a1f2cfac0bb36d54ae3d08d24576f745b",
"de/d01/struct_g_e_u_1_1_point_cloud_1_1_meanlet_1_1_stat_data.html#a925620dedcb2d9603f17b1473e4bcb6c",
"df/d01/class_g_e_u_1_1_database_new_zona_popup.html#aadf042c260b0ec1acde0014e5828ac6b"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';