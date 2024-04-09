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
    [ "Manual de buenas prácticas", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html", [
      [ "Porque somos buenos compañeros", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#porque-somos-buenos-compañeros", [
        [ "Cada persona es responsable de su propio módulo", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#cada-persona-es-responsable-de-su-propio-módulo", null ],
        [ "Se debe documentar el código", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#se-debe-documentar-el-código", null ],
        [ "Manten actualizado el manual de usuario", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#manten-actualizado-el-manual-de-usuariogeudocscomo-actualizar-el-manual-de-usuariomd", null ],
        [ "Manten actualizado el manual de desarrollador", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#manten-actualizado-el-manual-de-desarrolladorgeudocscomo-actualizar-el-manual-de-desarrolladormd", null ],
        [ "Utiliza el tablero Kanban", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#utiliza-el-tablero-kanban", null ],
        [ "Pregunta", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#pregunta", null ]
      ] ],
      [ "Para mantener la cordura", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#para-mantener-la-cordura", [
        [ "Evita modificar GEU Core", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-modificar-geu-core", null ],
        [ "Los módulos deben de ser autocontenidos", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#los-módulos-deben-de-ser-autocontenidos", null ],
        [ "Los unit tests son tus amigos", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#los-unit-tests-son-tus-amigos", null ],
        [ "Evita el uso de std::cout a favor del logger", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-el-uso-de-stdcout-a-favor-del-logger", null ],
        [ "Manten los cambios experimentales aislados hasta que sean estables", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#manten-los-cambios-experimentales-aislados-hasta-que-sean-estables", null ],
        [ "Reporta los bugs que encuentres", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#reporta-los-bugs-que-encuentres", null ]
      ] ],
      [ "Para mejorar el rendimiento", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#para-mejorar-el-rendimiento", [
        [ "El Profiler es tu mejor arma", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#el-profiler-es-tu-mejor-arma", null ],
        [ "Piensa en una arquitectura que no sea un obstaculo", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#piensa-en-una-arquitectura-que-no-sea-un-obstaculo", null ],
        [ "Usa OpenMP", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#usa-openmp", null ],
        [ "Si nada más funciona", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#si-nada-más-funciona", null ]
      ] ],
      [ "Para mantener los tiempos de compilación controlados", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#para-mantener-los-tiempos-de-compilación-controlados", [
        [ "Usa forward declaration cuando sea posible", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#usa-forward-declaration-cuando-sea-posible", null ],
        [ "Evita incluir librerías de STL en los headers", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-incluir-librerías-de-stl-en-los-headers", null ],
        [ "Usa los Precompiled Headers", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#usa-los-precompiled-headershttpsenwikipediaorgwikiprecompiled_header", null ],
        [ "Evita el uso de Header only e Inlining", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#evita-el-uso-de-header-only-e-inlining", null ],
        [ "C++ Build Insights también es tu amigo", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#c-build-insights-también-es-tu-amigo", null ]
      ] ],
      [ "", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#blockquote", null ],
      [ "Lectura recomendada", "d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#lectura-recomendada", null ]
    ] ],
    [ "Cómo actualizar el manual de desarrollador", "dc/d05/md__d_1_2_g_e_u_2_docs_2_como_01actualizar_01el_01manual_01de_01desarrollador.html", null ],
    [ "Cómo actualizar el manual de usuario", "d6/d02/md__d_1_2_g_e_u_2_docs_2_como_01actualizar_01el_01manual_01de_01usuario.html", null ],
    [ "Cómo desplegar una nueva versión", "dd/d01/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html", [
      [ "En GitHub", "dd/d01/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html#en-github", null ],
      [ "En el instalador", "dd/d01/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html#en-el-instalador", null ],
      [ "En el AutoUpdater", "dd/d01/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versió.html#en-el-autoupdater", null ]
    ] ],
    [ "Generación del proyecto", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html", [
      [ "⏮️Previos", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#️previos", null ],
      [ "📘Instrucciones", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#instrucciones", [
        [ "Cómo generar el proyecto para Visual Studio", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-generar-el-proyecto-para-visual-studio", null ],
        [ "Cómo añadir un nuevo módulo", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-añadir-un-nuevo-módulo", null ],
        [ "Cómo eliminar/desactivar un módulo", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-eliminardesactivar-un-módulo", null ],
        [ "Cómo activar un módulo desactivado", "de/d01/md__d_1_2_g_e_u_2_docs_2_generació01del_01proyecto.html#cómo-activar-un-módulo-desactivado", null ]
      ] ]
    ] ],
    [ "Localización", "d6/d01/md__d_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html", [
      [ "Incorporación de un nuevo idioma", "d6/d01/md__d_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html#incorporación-de-un-nuevo-idioma", null ],
      [ "Uso de cadenas localizadas", "d6/d01/md__d_1_2_g_e_u_2_docs_2_localizació01e_01idiomas.html#uso-de-cadenas-localizadas", null ]
    ] ],
    [ "Nubes de puntos", "db/d00/nubes-de-puntos.html", null ],
    [ "Shaders", "d8/d00/shaders.html", null ],
    [ "Unit tests", "d4/d01/md__d_1_2_g_e_u_2_docs_2_unit_01tests.html", [
      [ "📘 Instrucciones", "d4/d01/md__d_1_2_g_e_u_2_docs_2_unit_01tests.html#autotoc_md-instrucciones-2", [
        [ "Cómo crear un unit test", "d4/d01/md__d_1_2_g_e_u_2_docs_2_unit_01tests.html#cómo-crear-un-_unit-test_", null ],
        [ "Cómo lanzar los Unit test", "d4/d01/md__d_1_2_g_e_u_2_docs_2_unit_01tests.html#cómo-lanzar-los-unit-test", null ]
      ] ]
    ] ],
    [ "Uso del Logger", "d3/d00/md__d_1_2_g_e_u_2_docs_2_uso_01del_01_logger.html", null ],
    [ "Lista de tareas pendientes", "dd/d00/todo.html", null ],
    [ "Espacios de nombres", "namespaces.html", [
      [ "Lista de espacios de nombres", "namespaces.html", "namespaces_dup" ],
      [ "Miembros del espacio de nombres ", "namespacemembers.html", [
        [ "Todos", "namespacemembers.html", null ],
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
"d1/d01/class_database_connector.html#abe629f9878750399489d6c42a92303fc",
"d2/d00/class_g_e_u_1_1_database_new_raw_popup.html#a058743aa989ed945783ec4277592c114",
"d2/d03/class_g_e_u_1_1_n_a_s_session.html",
"d2/d07/classjson_1_1reader.html#a304413feee974df0795b87b3d8b8a5a3",
"d3/d05/class_g_e_u_1_1_hypercube.html#a37499138ea9a2aae26d8438d54486358",
"d4/d01/class_g_e_u_1_1_light_properties.html#ad4b674b446160aee4562468f521811a5",
"d4/d07/_gui_utilities_8h.html#a61e13de22fcd4360ee940efb13a4e96f",
"d4/d07/class_g_e_u_1_1_point_cloud.html#ae93bdbd3e8d172ecea5dd9abbc3668cb",
"d5/d01/_icons_font_awesome6_8h.html#a14a4f15010b9e2431dd2c6b3efca45dc",
"d5/d01/_icons_font_awesome6_8h.html#a421e936611cb7faaec5dfdae4654bba4",
"d5/d01/_icons_font_awesome6_8h.html#a700d5cab21b23ffd687bea6cfad210fc",
"d5/d01/_icons_font_awesome6_8h.html#a9c854e9475b76dae4cc972406c518586",
"d5/d01/_icons_font_awesome6_8h.html#aca1c692abd07905b29f16cdeff9709dd",
"d5/d01/_icons_font_awesome6_8h.html#af875a10d803f5d8f13694c402aa488f7",
"d5/d07/class_g_e_u_1_1_material.html#ad156e095dc135650803b91605c3c051e",
"d7/d02/_database_connector_8h_source.html",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#ab112c1bdac2e67f6b58bea1a0c17c2b8",
"d8/d01/class_g_e_u_1_1_image.html#a63715706340028bbb6ba3d304aa4331d",
"d9/d01/class_g_e_u_1_1_picking_window.html#ae43b5746c4ebd7a599c6dd9ec18f86ff",
"d9/d07/class_g_e_u_1_1_camera_projection_1_1_camera_properties.html#acc9ef4337a133d2df49a9ce69f4c4e3d",
"da/d02/class_g_e_u_1_1_shader_program.html#af679698c65ddcb5403495031ef6b6dbc",
"db/d03/class_g_e_u_1_1_light.html#a8e65bfbca6bfff59a59c36939c0920c9",
"dc/d00/_shader_manager_8h.html",
"dc/d02/struct_g_e_u_1_1_thermal_augment_1_1_thermal_image_params.html#ab16dfb2b83f39d5e871d22beaed781b6",
"dd/d01/class_g_e_u_1_1_memory_manager.html#a3d28d6fa8fbfb20db613d22394ee19a8",
"dd/d07/struct_database_1_1_vuelo.html#a51e778b9e9455e49ef6a4c7281d52f51",
"de/d03/_im_gui_file_dialog_8h.html#ae28249270048d8083dbd4e41600e9541",
"de/d04/class_g_e_u_1_1_renderer.html#ac96b562eda756b0f331f82a098fdf60d",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a413468c612b3bd1e759ba67316fdeb00",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573abeb80f5fe2d6fb8cf96bb90b23f6c11a",
"df/d05/class_g_e_u_1_1_i___g_u_i_popup.html#ae9b49e17e92fd6871c053ac99ab05f2a",
"globals_type.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';