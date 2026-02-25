🧮 Contador com React

Este é um projeto simples de contador feito com React.  
O objetivo é praticar o uso de estado, hooks e localStorage.

📌 O que este projeto faz?

- Mostra um número na tela  
- Permite incrementar o contador  
- Permite resetar o valor  
- Salva o valor no localStorage para que não se perca ao recarregar a página  

🛠️ Tecnologias usadas

- ⚛️ React  
- 🪝 Hooks (useState, useEffect)  
- 💾 localStorage  
- 🎨 CSS básico  

🧠 O que eu pratiquei

- Criar e usar estado com useState  
- Atualizar o estado usando a forma funcional  
- Usar useEffect para salvar dados  
- Ler e escrever no localStorage  
- Separar componentes  

🔍 Exemplo de código importante

```javascript
// const [count, setCount] = useState(() => {
//   const saved = localStorage.getItem("count");
//   return saved !== null ? Number(saved) : 0;
// });

// useEffect(() => {
//   localStorage.setItem("count", count);
// }, [count]);

// ▶️ Como executar o projeto

// Instale as dependências:

// npm install

// Inicie o projeto:

// npm run dev

// Abra no navegador:

// http://localhost:5173

// 👤 Autor

// Tomas Antonio Cartaya Lyon