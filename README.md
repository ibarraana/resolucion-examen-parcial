PROGRAMACION WEB 2 
Profesor: Pablo Aronna 
INSTITUTO SUPERIOR SANTA ROSA DE CALAMUCHITA 
Mesa de Examen - 20 Jul 2026 
Enunciado 
La Dirección de Deportes de Santa Rosa de Calamuchita necesita una SPA (Single Page  Application - Aplicación de una sola página) para la inscripción a las Escuelas Deportivas  Municipales. Tu objetivo como desarrollador es implementar el backend (API) utilizando  Node + Express + Sequelize que soporte la entidad de deportes, y el frontend (interfaz de  usuario) en React que permita listar, filtrar y calcular los costos de inscripción con sus  adicionales. 
PARTE 1: BACKEND (Express + Sequelize) 
Deberás estructurar una API REST utilizando una carpeta llamada api/ como raíz del  proyecto. El servidor deberá conectarse a una base de datos MySQL llamada  centro_deportivo. 
1. Modelo de Datos Único: Deporte (tabla deportes) 
Crea el siguiente modelo independiente con sus respectivos campos (define los tipos de  datos y configuraciones que consideres más adecuados): 
• id 
• nombre 
• profesor 
• precioMensual 
• categoria (donde se guardarán los valores: "Niños", "Jóvenes" o "Adultos") 

2. Funcionalidades y Endpoints a Programar (GET) 
Debes implementar el controlador y la ruta necesarios para exponer la lógica que  resuelva: 
• GET /api/deportes: Obtener la colección completa de escuelas deportivas  registradas en la base de datos.  


PARTE 2: FRONTEND (React + Vite + Axios) 
Deberás estructurar la aplicación cliente dentro de una carpeta llamada app/ utilizando  Vite como empaquetador y Axios para la comunicación HTTP.
1. Datos de la Aplicación 
• Desde el Backend (Consumo de API): Al cargar la aplicación por primera vez, el  sistema debe solicitar automáticamente al backend la colección completa de  deportes para rellenar la lista inicial.  
• Desde el Frontend (Dato Local): Define directamente en el código de tu interfaz el  siguiente array de objetos estáticos para las opciones de cobertura de seguro: 
JavaScript 
const opcionesSeguro = [ 
 { id: "s1", tipo: "Cobertura Base (Municipal)", incremento: 0 }, 
 { id: "s2", tipo: "Cobertura Intermedia (Provincial)", incremento: 15 },  { id: "s3", tipo: "Cobertura Alta Competencia (Nacional)", incremento: 30 } ]; 
2. Interacción y Lógica de Negocio 
• Filtro por Categoría: Disponer tres botones en la parte superior ("Niños",  "Jóvenes", "Adultos"). Al hacer clic en uno, la lista inferior debe filtrarse en tiempo  real utilizando JavaScript para mostrar únicamente los deportes que correspondan  a esa categoría de edad. 
• Selección de Deporte: Al hacer clic sobre la tarjeta o elemento de la lista de un  deporte, este debe quedar guardado en el estado como el deporte seleccionado.  
• Selección Única de Seguro: Al seleccionarse un deporte, se debe desplegar un  menú de opciones (por ejemplo, un elemento <select> o tarjetas de selección  única) que recorra el array local de opcionesSeguro. Por defecto, la opción  seleccionada al inicio debe ser la primera ("Cobertura Base" con 0% de  incremento). 
• Lógica Matemática (Punto Crítico): El sistema debe calcular el precio final en  tiempo real aplicando el porcentaje de incremento del seguro seleccionado sobre el  precio mensual del deporte elegido.  
Precio Final = Precio Mensual + (Precio Mensual x Incremento / 100) 
3. Renderizado Condicional 
El panel inferior con el "Resumen de Inscripción" y el botón simulado de "Confirmar"  solo debe aparecer en pantalla si el usuario ya seleccionó un deporte. Si aún no se  seleccionó ninguno, debe mostrar un texto indicativo al usuario.  


ENTREGAR en formato ZIP (sin carpeta node_modules) o en GitHub (si el  repositorio tiene fecha y hora de actualización mas alla de las 22hs del dia 20 de jul  2026, no se aceptará el examen.
