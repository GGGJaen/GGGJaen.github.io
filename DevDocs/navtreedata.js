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
    [ "Unit tests", "d6/d00/unit-tests.html", null ],
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
"d2/d03/_multiespectral_pch_8h.html#a456be013bdf687ab454bdf8bb211474e",
"d2/d05/structstr__irradiance_list.html#aef9482a0dd011f554646bb4a7f49df92",
"d3/d05/class_g_e_u_1_1_hypercube.html",
"d4/d01/class_g_e_u_1_1_light_properties.html#abee5ed56c19cd93556a239a878ad9a31",
"d4/d07/_gui_utilities_8h.html#a51f7b03162a92f79594e82e1aca62133",
"d4/d07/class_g_e_u_1_1_point_cloud.html#adc4e5eb43dd50c84496951d0b7c1524b",
"d5/d01/_icons_font_awesome6_8h.html#a11f5ac0421ae328bc80b5dd3d9a71970",
"d5/d01/_icons_font_awesome6_8h.html#a4092367ad6078c72f55b2e27c0a05b5f",
"d5/d01/_icons_font_awesome6_8h.html#a6c8c61f728a3f0e416fed5ebc47f2c7e",
"d5/d01/_icons_font_awesome6_8h.html#a9b4f4c79c250daeadadcd8b6e9cb890c",
"d5/d01/_icons_font_awesome6_8h.html#ac80bd40fb3bdaa8532396a1df394e773",
"d5/d01/_icons_font_awesome6_8h.html#af7153729d5931fafc6fe1e7add6178b2",
"d5/d07/class_g_e_u_1_1_material.html#aa382c01615f7b585175d96dc659b2ed2",
"d7/d01/_file_dialog_regex_8hpp_source.html",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#a8ca45876847fd91f9a58ee3e97874891",
"d8/d01/class_g_e_u_1_1_image.html#a11d5e92ff1b87f268284ba8dde4d35e6",
"d9/d01/class_g_e_u_1_1_picking_window.html#ab5187b59ba1e186a23dc921ee59f6085",
"d9/d07/class_g_e_u_1_1_camera_projection_1_1_camera_properties.html#abd13e941492f8f220117eac01ceceecc",
"da/d02/class_g_e_u_1_1_shader_program.html#ab4dc64c9981a002be548469abc08ef8f",
"db/d03/class_g_e_u_1_1_light.html#a125cfd37104000908ce46e0f01aac1c8",
"db/d06/class_g_e_u_1_1_database_new_vuelo_popup.html#ad0e991a7687d13c66ba69b82b9f40743",
"dc/d02/class_register.html#ae7b2cea7548d2f60d86da755554fcd42",
"dd/d01/class_g_e_u_1_1_file_manager.html#aa597d3662ebac342cff0d7050997b8cc",
"dd/d05/struct_g_e_u_1_1_image_tree_segmentation_1_1_segment_a_a_b_b.html#aca743b445fed845629a2807bac217a67",
"de/d03/_im_gui_file_dialog_8h.html#aa9de5efefa95a90cbf0cfaad5e0e69fda10cba5813fdb873fe813ceba043043ef",
"de/d04/class_g_e_u_1_1_renderer.html#a63f9614392813ee90191fd6b4985e3bb",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a2ed0a6abfeb891d20e5efe37d61e910b",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573aaf9fd27b2a3c8caa7dd533c876f90a2c",
"df/d04/struct_g_e_u_1_1_hyper_g_u_i_adapter_1_1_hyper_stats.html#a52f8a5400aead78b77ac2379dfd83224",
"globals_defs_o.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';