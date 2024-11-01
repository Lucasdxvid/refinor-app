import React from "react";

function Login() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-lg shadow-lg max-w-md mx-auto mt-10 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">
        ¡Bienvenido a Tailwind CSS!
      </h1>
      <p className="text-lg mb-6">
        Esto es un ejemplo de cómo aplicar diferentes estilos con Tailwind en un
        proyecto de React. Aquí usamos colores, fondos, sombras y más.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
        ¡Haz clic aquí!
      </button>
    </div>
  );
}

export default Login;
