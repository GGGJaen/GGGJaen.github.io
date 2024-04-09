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
    [ "Cómo desplegar una nueva versión", "dd/d07/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html", [
      [ "En GitHub", "dd/d07/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html#en-github", null ],
      [ "En el instalador", "dd/d07/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html#en-el-instalador", null ],
      [ "En el AutoUpdater", "dd/d07/md__d_1_2_g_e_u_2_docs_2_como_01desplegar_01una_01nueva_01versióusuario.html#en-el-autoupdater", null ]
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
"d4/d01/class_g_e_u_1_1_light_properties.html#ac5a4b15c4c5b78b00552373ffdbc1924",
"d4/d07/_gui_utilities_8h.html#a55126fb89c2cd5e8675c2632a94fd92e",
"d4/d07/class_g_e_u_1_1_point_cloud.html#ae65fbad42ab669f2fb7dcdf01548339a",
"d5/d01/_icons_font_awesome6_8h.html#a14537b0b287e1749f38feed26b7eb4c1",
"d5/d01/_icons_font_awesome6_8h.html#a416b19c2a1b591cd1fc1bff28126d68f",
"d5/d01/_icons_font_awesome6_8h.html#a6f415300cbb0e4088e1dce4b9d60eb01",
"d5/d01/_icons_font_awesome6_8h.html#a9c5c42855b6bd47397b47ee6ad50a200",
"d5/d01/_icons_font_awesome6_8h.html#ac9ea3f563e311902923208f021b889c7",
"d5/d01/_icons_font_awesome6_8h.html#af8642ece75f758460dc28df0631bac41",
"d5/d07/class_g_e_u_1_1_material.html#ac48a52a8b314e3973abc72328f381214",
"d7/d01/_module_manager_8h.html#a715dddbf521259f6007a0206ad3582d9ad82bb89e1191e51c17267653f95526b2",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#aa446d1f3189cad2301b03f1afe08d012",
"d8/d01/class_g_e_u_1_1_image.html#a382c634b44f2871503f3e46d6e622010",
"d9/d01/class_g_e_u_1_1_picking_window.html#ae36fe8df3dac7b35f086614b2fdf33fa",
"d9/d07/class_g_e_u_1_1_camera_projection_1_1_camera_properties.html#acb80ed1eb81152b02edb2443b31cc125",
"da/d02/class_g_e_u_1_1_shader_program.html#ac1f3848e24c6f8a45439c907adf4f78d",
"db/d03/class_g_e_u_1_1_light.html#a2dc5ef1db0e480423a59599d5604ea3d",
"db/d06/struct_g_e_u_1_1_thermal_augment_1_1_global_camera_params.html#a74c7ea3e02c35d0f405e0ea57fc6436c",
"dc/d02/struct_g_e_u_1_1_thermal_augment_1_1_thermal_image_params.html#a4937835435b803c2af226ad6d1d8762d",
"dd/d01/class_g_e_u_1_1_file_manager.html#aebeb11b59981efb0536a7e57fe284120",
"dd/d07/struct_database_1_1_vuelo.html#a1983b517248af8a6c48b851b779c1b90",
"de/d03/_im_gui_file_dialog_8h.html#aab813b6f531d6523f386da79bbb5d2cd",
"de/d04/class_g_e_u_1_1_renderer.html#a8bae5f04f9f547fa63897d83090a3098",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a336d44971818e3444889a3f931d2d035",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573ab54f6330879ef88dc61fcb689c12668c",
"df/d05/class_g_e_u_1_1_i___g_u_i_popup.html",
"globals_eval_m.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';