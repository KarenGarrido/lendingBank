import { Button } from '@mui/material';
import imagenHome from '../assets/images/creditohipotecario.png';
const Home = () => {
  return (
    <div>
      <h1>LendingBank: Sistema de Créditos Hipotecarios</h1>
      <Button>
      <button type="submit" className="btn btn-primary">
            <a href="/register">Registrarse</a>
          </button>
      </Button>
      <Button>
      <button type="submit" className="btn btn-primary">
            <a href="/login">Iniciar Sesión</a>
          </button>
      </Button>
      <Button>
      <button type="submit" className="btn btn-primary">
            <a href="/loginAdmin">Ingresar como Ejecutivo</a>
          </button>
      </Button>
      

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
      <Button>
      <button type="submit" className="btn btn-secondary" style={{ width: '200px', backgroundColor: '#6c757d', borderColor: '#6c757d' }}>
            <a href="/loginSimulator" style={{ color: 'white', textDecoration: 'none' }}>Simulador de Créditos</a>
          </button>
      </Button>


      </div>
      
      <p>
        LendingBank es una aplicación web para gestionar créditos hipotecarios como ejecutivo. Esta aplicación ha sido desarrollada usando tecnologías como{" "}
        <a href="https://spring.io/projects/spring-boot">Spring Boot</a> (para
        el backend), <a href="https://reactjs.org/">React</a> (para el Frontend)
        y <a href="https://www.mysql.com/products/community/">MySQL</a> (para la
        base de datos).
      </p>
      
      <img src={imagenHome} class="img-fluid" alt="..."/>
    </div>
    
  );
};

export default Home;
