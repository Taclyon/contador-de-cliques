🧮 Contador con React

Este es un proyecto sencillo de contador hecho con React.
El objetivo es practicar el uso de estado, hooks y localStorage.

📌 ¿Qué hace este proyecto?

Muestra un número en pantalla

Permite incrementar el contador

Permite resetear el valor

Guarda el valor en localStorage para que no se pierda al recargar la página

🛠️ Tecnologías usadas

⚛️ React

🪝 Hooks (useState, useEffect)

💾 localStorage

🎨 CSS básico


🧠 Lo que practiqué

Crear y usar estado con useState

Actualizar el estado usando la forma funcional

Usar useEffect para guardar datos

Leer y escribir en localStorage

Separar componentes

🔍 Ejemplo de código importante
const [count, setCount] = useState(() => {
  const saved = localStorage.getItem("count");
  return saved !== null ? Number(saved) : 0;
});

useEffect(() => {
  localStorage.setItem("count", count);
}, [count]);
▶️ Cómo ejecutar el proyecto

Instala las dependencias:

npm install

Inicia el proyecto:

npm run dev

Abre el navegador en:

http://localhost:5173

👤 Autor

Tomas Antonio Cartaya Lyon