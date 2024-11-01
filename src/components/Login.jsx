import React from "react";
import refinorLogo from "../assets/icons/loginForm/refinorLogo.svg";
import lock from "../assets/icons/loginForm/lock.svg";
import mail from "../assets/icons/loginForm/mail.svg";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <img src={refinorLogo} alt="Refinor Logo" className="h-20" />
        <h1 className="font-bold text-gray-900 text-4xl pt-10">Login</h1>
        <p className="text-gray-600 font-extralight text-xl">¡Bienvenido!</p>
      </div>

      <div className="w-full max-w-md p-8 rounded-lg">
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="flex items-center p-3 py-4 rounded-full border h">
              <span className="mr-3">
                <img src={mail} alt="e-mail icon" />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-transparent outline-none text-gray-700 w-full"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="sr-only">
              Contraseña
            </label>
            <div className="flex items-center p-3 py-4 rounded-full border">
              <span className="mr-3">
                <img src={lock} alt="lock icon" className="icoOpacity" />
              </span>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                className="bg-transparent outline-none text-gray-700 w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-green-800 text-white font-semibold py-3 transition duration-200 rounded-lg mt-4 text-xs"
          >
            Ingresar
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/forgot-password"
            className="text-primary hover:underline font-bold"
          >
            Olvidé mi contraseña
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
