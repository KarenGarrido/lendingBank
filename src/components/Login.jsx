import React, { useState } from 'react';

const LoginForm = () => {
  // Definir el estado de los campos de formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos
    if (!email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Aquí iría la lógica para enviar los datos al backend, por ejemplo usando fetch o axios
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h3 style={{fontSize:"40px"}}>Registrarse en LendingBank</h3>
      {/* Email input */}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example1">Email address</label>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="form2Example2">Password</label>
      </div>


      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="form2Example31"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
      <a href="/reports/AnualReport">Iniciar Sesión</a>
      </button>

    </form>
  );
};

export default LoginForm;
