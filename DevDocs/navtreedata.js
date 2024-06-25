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
    [ "Índices de vegetación y análisis hiperespectral", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html", [
      [ "Un poco de teoría", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#un-poco-de-teoría", [
        [ "Región visible", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#región-visible", null ],
        [ "Región NIR", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#región-nir", null ],
        [ "Red Edge", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#red-edge", null ]
      ] ],
      [ "Analisis_HyperGUIAdapter", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#analisis_hyperguiadapter", [
        [ "NDVI + NDRE", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#ndvi--ndre", null ],
        [ "TVI", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#tvi", [
          [ "Cargar el hipercubo", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#cargar-el-hipercubo", null ],
          [ "Leer metadatos", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#leer-metadatos", null ],
          [ "Leer bandas", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#leer-bandas", null ],
          [ "Recorrer la imagen pixel a pixel.", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#autotoc_md1-recorrer-la-imagen-pixel-a-pixel", null ],
          [ "Calcular TVI", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#autotoc_md2-calcular-tvi", null ],
          [ "Normalizar valores", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#autotoc_md3-normalizar-valores", null ]
        ] ],
        [ "MSAVI", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#msavi", null ],
        [ "Output", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#output", [
          [ "CSV", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#csv", null ],
          [ "JPEG", "d9/d02/md__d_1_2_g_e_u_2_docs_2_indices_01_vegetacion_01_hiper.html#jpeg", null ]
        ] ]
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
"d1/d01/class_database_connector.html#a1bc000ca5bfe0d511a32341d2cb6269e",
"d1/d06/class_progress_bar.html#a12cbb67dfe8386cabd42db988bf8c60c",
"d2/d01/struct_g_e_u_1_1_g_p_u_resources.html#a1589b3fea56264c818c48d8cac81ec5a",
"d2/d04/class_g_e_u_1_1_vegetation_index.html#a395588fdf220ddb6681111f76da0ac2d",
"d3/d00/_camera_axis_window_8cpp.html",
"d3/d07/namespace_g_e_u_1_1_gui_utilities.html#a4dc25bbb3f52a3eee9dda90f4e695195",
"d4/d01/class_g_e_u_1_1_light_properties.html#ad6b2cde8a5d2212ab488f572a37b7c2e",
"d4/d07/_gui_utilities_8h.html#a52cb29f50d78b4fefd0f7f5e84483046",
"d4/d07/class_g_e_u_1_1_point_cloud.html#add958587322ada7fe41aa36de8f327f4",
"d5/d01/_icons_font_awesome6_8h.html#a0ec1230f8e7be741fe27164b447ce236",
"d5/d01/_icons_font_awesome6_8h.html#a3db352079b01a0e770afd89502ef285e",
"d5/d01/_icons_font_awesome6_8h.html#a6aa93f82cc80428c63dcd676d09abaa9",
"d5/d01/_icons_font_awesome6_8h.html#a998a6af039c0131c8dc7935086dfbdd7",
"d5/d01/_icons_font_awesome6_8h.html#ac5e304c726399f571b935d2db4850ed1",
"d5/d01/_icons_font_awesome6_8h.html#af50712aa81869aabed6add9c4b49880b",
"d5/d07/class_g_e_u_1_1_material.html#a7786e2e385d628b59b4b05c76bc2bf3e",
"d7/d00/class_g_e_u_1_1_calculator_m_s_a_v_i.html#a0a5dd1c5256b5e660803b05659d35691",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#a4e52d1642cc1929b98b35fc802e60bfa",
"d7/d07/namespace_c_u_r_l_wrapper.html#a3585b90ea77ef1dac9d94a88de43a9c2",
"d8/d07/classjson_1_1jobject.html#ab785f1c8b2636212e0d49b711fa4fba3",
"d9/d05/class_g_e_u_1_1_input_manager.html#a7639203734a2042d404524d1b6cd8714",
"da/d01/_thermal_augment_8cpp.html#a7c807c8245f65ea985a6bf15cb8ce3e9",
"da/d06/class_g_e_u_1_1_framebuffer.html#a6e150e847b3fde32487d8ab4213299eb",
"db/d03/struct_g_e_u_1_1_v_a_o_1_1_v_b_o_slot__definition.html",
"dc/d01/class_g_e_u_1_1_image_cloud_proj.html#a02559507d7f291afc43075aa49bbdbfe",
"dc/d06/class_g_e_u_1_1_texture.html",
"dd/d02/struct_g_e_u_1_1_hyperspectral_data.html#a13d391c036eb162b83c4babf225f028f",
"dd/d07/struct_database_1_1_vuelo.html#a821c9c3660702e20fb00d1b698683558",
"de/d03/_im_gui_file_dialog_8h.html#ae28249270048d8083dbd4e41600e9541",
"de/d04/class_g_e_u_1_1_renderer.html#a7d3cf546fafbed1fe2977e007fc15f84",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a274f18091607c97944b5d5ea13bc1044",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573aa868143af831231e0c6b925f852ac20f",
"df/d02/class_g_e_u_1_1_windows_comm_call.html",
"functions_n.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';