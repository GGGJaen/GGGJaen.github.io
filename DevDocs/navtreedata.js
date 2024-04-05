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
    [ "Manual de buenas prácticas", "d2/d07/a04347.html", [
      [ "Para mantener la cordura", "d2/d07/a04347.html#para-mantener-la-cordura", [
        [ "Evita modificar GEU Core", "d2/d07/a04347.html#evita-modificar-geu-core", null ],
        [ "Los módulos deben de ser autocontenidos", "d2/d07/a04347.html#los-módulos-deben-de-ser-autocontenidos", null ],
        [ "Los unit tests son tus amigos", "d2/d07/a04347.html#los-unit-tests-son-tus-amigos", null ],
        [ "Evita el uso de std::cout a favor del logger", "d2/d07/a04347.html#evita-el-uso-de-stdcout-a-favor-del-logger", null ]
      ] ],
      [ "Para mejorar el rendimiento", "d2/d07/a04347.html#para-mejorar-el-rendimiento", [
        [ "El Profiler es tu mejor arma", "d2/d07/a04347.html#el-profiler-es-tu-mejor-arma", null ],
        [ "Piensa en una arquitectura que no sea un obstaculo", "d2/d07/a04347.html#piensa-en-una-arquitectura-que-no-sea-un-obstaculo", null ],
        [ "Usa OpenMP", "d2/d07/a04347.html#usa-openmp", null ],
        [ "Si nada más funciona", "d2/d07/a04347.html#si-nada-más-funciona", null ]
      ] ],
      [ "Para mantener los tiempos de compilación controlados", "d2/d07/a04347.html#para-mantener-los-tiempos-de-compilación-controlados", [
        [ "Usa forward declaration cuando sea posible", "d2/d07/a04347.html#usa-forward-declaration-cuando-sea-posible", null ],
        [ "Evita incluir librerías de STL en los headers", "d2/d07/a04347.html#evita-incluir-librerías-de-stl-en-los-headers", null ],
        [ "Usa los Precompiled Headers", "d2/d07/a04347.html#usa-los-precompiled-headershttpsenwikipediaorgwikiprecompiled_header", null ],
        [ "Evita el uso de Header only e Inlining", "d2/d07/a04347.html#evita-el-uso-de-header-only-e-inlining", null ],
        [ "C++ Build Insights también es tu amigo", "d2/d07/a04347.html#c-build-insights-también-es-tu-amigo", null ]
      ] ],
      [ "", "d2/d07/a04347.html#blockquote", null ],
      [ "Lectura recomendada", "d2/d07/a04347.html#lectura-recomendada", null ]
    ] ],
    [ "Generación del proyecto", "d2/d06/a04348.html", null ],
    [ "Localización", "d6/d07/a04349.html", [
      [ "Incorporación de un nuevo idioma", "d6/d07/a04349.html#incorporación-de-un-nuevo-idioma", null ],
      [ "Uso de cadenas localizadas", "d6/d07/a04349.html#uso-de-cadenas-localizadas", null ]
    ] ],
    [ "Nubes de puntos", "dd/d06/a04350.html", null ],
    [ "Shaders", "dd/d00/a04351.html", null ],
    [ "Unit tests", "d3/d02/a04352.html", null ],
    [ "Uso del Logger", "d5/d00/a04353.html", null ],
    [ "Lista de tareas pendientes", "df/d07/a00623.html", null ],
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
"d0/d06/a01916.html#a558ff0da4c00e34d7273084a7cb9aca4",
"d1/d06/a01496.html#ac0fd02060c51c9279c00d97d7b508ee9",
"d2/d03/a01672.html#a8e65bfbca6bfff59a59c36939c0920c9",
"d3/d03/a02004.html#ab1b1c4c1a01f534d6818312abd4dec8c",
"d3/d04/a01540.html#ac99c561e4f9992845d08a61cab6809bbae80c54b1773908262b14a15bd032347e",
"d4/d04/a01952.html",
"d5/d01/a01988.html#a9e57978d003f7ac36a62fb90522cb9e1",
"d5/d05/a00374.html#a5713f99e46bebd8d2a1c0659d11877bc",
"d6/d05/a00161.html",
"d7/d04/a00634.html#a4ca438ae0623d75ff22b4b17dfd3a820",
"d7/d07/a01668.html#a45dbb5e3a520ec98dbaffc0ad9212205",
"d8/d02/a02044.html#aef6ebeee8816dddccbd1e81421522c6f",
"d9/d05/a00633.html#a3add9205f87d8efffa815d6e8db4864c",
"da/d04/a00413.html#a2427071b5c9ef2e486cb02ad0166546e",
"da/d07/a01568.html#ae2b9daf5d916756660d73e22c771820b",
"dc/d00/a00332.html#a601a7b55b6c3e8ec0bf8451cb7995573a04b543e1573c43ff20b44869fe5f3696",
"dc/d00/a00332.html#a601a7b55b6c3e8ec0bf8451cb7995573a83fd7485cfa7bc9fcb123c3a65f67480",
"dc/d00/a00332_source.html",
"dc/d03/a01812.html#ac8e7db20898f49e6f839d503f98e1ba2",
"dd/d00/a01596.html#a6616f54a13f37f3279eb7ccae4aa3e9e",
"dd/d07/a02096.html#aff59b0158ec7cca56259f22eed2c5b7d",
"de/d03/a00185.html#a0153725424eb502e7751e0f49e07a794",
"de/d03/a00185.html#a2f6ec7607827e8b8cf8d14061ec4aab7",
"de/d03/a00185.html#a5d71746128893c1b2691f676b958abdb",
"de/d03/a00185.html#a8a7ad7f0f3ccff0e11b5fd65957e35e5",
"de/d03/a00185.html#ab8928a2b3840dd1dcb5a6b40316b26b0",
"de/d03/a00185.html#ae5ecb7cc90ce92c665c8089db79e8442",
"de/d04/a01640.html#a5eb95b0ee2395c017433a76dbfc4a469",
"de/d05/a01732.html#a652bad317b876187ed792218269770dc",
"de/d07/a00362.html#aaf03b7f43efe5c51b1b1d07ff99efe03",
"df/d05/a00416_source.html",
"globals_r.html"
];

var SYNCONMSG = 'pulsar para deshabilitar sincronización';
var SYNCOFFMSG = 'pulsar para habilitar sincronización';