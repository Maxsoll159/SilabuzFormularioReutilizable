import { useState } from "react";
import useForn from "./hooks/useForm";
import React, { Suspense, lazy } from 'react';
import { InputDev } from "./components/InputDev";

const Registro = lazy( ()=> import ('./components/Register'))


function App() {
  const [state, handleChange] = useForn({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  const [flag, setFlag] = useState(true);
  const cambiar = () => {
    setFlag(true);
  };

  const cambiarRe = () => {
    setFlag(false);
  };

  return (
    <>
      <div>
        <button className="bg-red-500 p-3 rounded-md" onClick={cambiar}>Login</button>
        <button className="bg-blue-500 p-3 rounded-md" onClick={cambiarRe}>Registro</button>
      </div>
      {flag ? (
        <form action="" onSubmit={handleSubmit}>
          <img loading="lazy" src="/img/pepito.webp" alt="" />
          <InputDev
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Ejemplo: Juan"
            value={state.email}
            labelText="Correo"
          />
          <InputDev
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="*************"
            value={state.password}
            labelText="Contraseña"
          />
          <button>Crear</button>
        </form>
      ) : (
        <Registro />
      )}
    </>
  );
}

export default App;
