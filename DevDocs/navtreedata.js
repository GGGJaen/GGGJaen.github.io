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
"d0/d07/class_g_e_u_1_1_rendering_shader.html#ac8b73c9f8f74badaf486cc21310cdb76",
"d1/d03/class_g_e_u_1_1_thermal_g_u_i_adapter.html#ad7fbc6f88e320c9e6f92d51c9f07015b",
"d2/d00/struct_g_e_u_1_1_application_state.html#a278f14fd1bad6792d04a730634bf7935",
"d2/d03/classunibn_1_1_octree.html#a6265e75a3dc17f4d78b688547726d6f8",
"d2/d07/classjson_1_1reader.html#aa2e6a1ef3b69477b766614659094b723",
"d3/d05/class_g_e_u_1_1_hypercube.html#a38b55f32165b55e30360fc220b809c01",
"d4/d01/class_g_e_u_1_1_light_properties.html#a233ba566be1077ed9689d65aa7ac8dd0",
"d4/d05/json_8h.html#a39a3ac5b26ad6618ae567eb0c8d67305abeac83cbc1ef0d5d6dfcf5a57302c8e3",
"d4/d07/class_g_e_u_1_1_point_cloud.html#a5f007678aeec0b4741e343e5aae1e389",
"d5/d00/struct_database_1_1_finca.html#a708a58220c4cbed76f39a785f5884925",
"d5/d01/_icons_font_awesome6_8h.html#a2ac6d12ec62057382af01daedda028fc",
"d5/d01/_icons_font_awesome6_8h.html#a586df1667284e381e43134669694364c",
"d5/d01/_icons_font_awesome6_8h.html#a864b234f0a0fa0b4372f3eb74a6ea736",
"d5/d01/_icons_font_awesome6_8h.html#ab452c3f5fbba2ceceab31da80eb0965b",
"d5/d01/_icons_font_awesome6_8h.html#ae2cd97671a272a97122351d8b27f25b2",
"d5/d03/class_g_e_u_1_1_reconstruccion_g_u_i_adapter.html#aadb9f5ba17f6bdbc437cd3ac93c21724",
"d6/d03/md__d_1_2_g_e_u_2_docs_2_buenas_01practicas.html#blockquote",
"d7/d05/struct_database_1_1_objeto.html",
"d7/d06/class_g_e_u_1_1_database_query_popup.html#ac99c561e4f9992845d08a61cab6809bbae80c54b1773908262b14a15bd032347e",
"d8/d04/class_im_gui_toast.html#afc6e18786a35bccfd12afb2050e68f05",
"d9/d02/struct_g_e_u_1_1_gui_utilities_1_1_image_tooltip_draw_area.html#a009c6b5c2f190530337c84863084f1b6",
"d9/d07/classjson_1_1jobject_1_1entry.html#a596a41a1d43a69dee270b8b52de56809",
"da/d03/classunibn_1_1_octree_1_1_octant.html#a4b07f2beeba5b1f35477fc789c4e256a",
"db/d03/class_g_e_u_1_1_light.html#a8e65bfbca6bfff59a59c36939c0920c9",
"dc/d00/class_g_e_u_1_1_database_query_dato_popup.html#a2c74df399523c720a26ef703e7519178",
"dc/d02/struct_g_e_u_1_1_thermal_augment_1_1_thermal_image_params.html#ab16dfb2b83f39d5e871d22beaed781b6",
"dd/d01/class_g_e_u_1_1_file_manager.html#a96a82ce9f7c481d435956a8b78aded66",
"dd/d04/class_g_e_u_1_1_camera.html#ada3d9724a690c2d4e7bc5fb253a5edf6",
"de/d02/class_g_e_u_1_1_multiespectral_g_u_i_adapter.html#ab9959faf57e35db64d5eb4505ee345c0",
"de/d04/class_g_e_u_1_1_application.html#a10d21037d95eafd637c57dd21490f37f",
"de/d07/_i___g_u_i_window_8h_source.html",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573a75536663fd3678115b607a1b103c16cf",
"de/d07/locale__strings_8h.html#a601a7b55b6c3e8ec0bf8451cb7995573aee18fd142b59e2e10280e302b34ea4bd",
"dir_2c3e0fc6ccb9542d1168e0a66d936d59.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';