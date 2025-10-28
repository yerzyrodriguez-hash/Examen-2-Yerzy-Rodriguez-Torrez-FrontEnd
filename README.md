# QUE APRENDI

1. ¿Cómo me fue en el examen? Considero que el examen fue desafiante pero exitoso. Logré completar todos los requisitos funcionales: creé el backend en Laravel con su API REST (GET y POST) y la base de datos en MySQL . También construí el frontend en Angular, que consume esta API para listar y registrar nuevos empleados , como se demostró en las capturas de pantalla.


2. ¿Qué complicaciones tuve? La mayor complicación fue, sin duda, la configuración del frontend en Angular. Tuve numerosos errores que me tomaron tiempo resolver. Los problemas más difíciles fueron:
Errores de Configuración (SSR/Zone.js): Me enfrenté a errores como NG0908 (Zone.js is required) y el 500 (Internal Server Error), que resultaron ser problemas con el Renderizado del Lado del Servidor (SSR) y cómo interactuaba con el ciclo de vida del componente.
Errores de Módulos e Importaciones: Tuve dificultades para entender cómo los componentes "standalone" importan otros módulos, como FormsModule o EmpleadosComponent dentro de AppComponent.
Errores de Plantilla (Duplicación): El problema más confuso fue el contenido duplicado en la página. Me costó identificar que el código estaba en el archivo app.html incorrecto, en lugar de estar solo en empleados.html.


3. ¿Qué aprendí en este módulo? Aprendí el flujo completo de una aplicación Full-Stack. En el backend, aprendí a estructurar una API en Laravel, desde la migración y el modelo hasta el controlador y las rutas. En el frontend, aprendí a crear un servicio en Angular para consumir una API externa, a manejar formularios con ngModel y a componer la interfaz de usuario. Lo más importante fue aprender a depurar los errores de Angular leyendo la consola.


4. ¿Qué haría diferente si lo vuelvo a realizar? Si lo hiciera de nuevo, deshabilitaría el Renderizado del Lado del Servidor (SSR) al crear el proyecto de Angular (ng new --ssr=false). Esto habría evitado la mayoría de los errores complejos (como los 500 Internal Server Error y los de hidratación NG0500) y me habría permitido concentrarme solo en la lógica del formulario y la tabla. También probaría el backend al 100% con Postman antes de escribir una sola línea de frontend.

