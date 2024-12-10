import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paycheckService from "../services/paycheck.service";
import CalculateIcon from "@mui/icons-material/Calculate";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import imagenPrestamos from '../assets/images/TiposPrestamos.png';



const PaycheckCalculate = () => {
  const [montoP, setmontoP] = useState("");
  const [plazoN, setplazoN] = useState("");
  const [interesR, setInteresR] = useState("");

  const navigate = useNavigate();

  const calculateCredit = (e) => {
    e.preventDefault();
    console.log("Solicitar calcular planilla.", year, "-", month);
    paycheckService
      .calculate(year, month)
      .then((response) => {
        console.log("Planilla ha sido actualizada.", response.data);
        navigate("/paycheck/list");
      })
      .catch((error) => {
        console.log(
          "Ha ocurrido un error al intentar calcular liquidaciones de sueldos.",
          error
        );
      });
    console.log("Fin calculo planilla.");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      component="form"
    >
      <h3 style={{fontSize:"40px"}}> Simulación de crédito Hipotecario </h3>
      <hr />
      <form >
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Monto del préstamo</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={montoP}
            variant="standard"
            onChange={(e) => setmontoP(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Monto del préstamo"
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="plazo¨P"
            label="Plazo (en años)"
            value={plazoN}
            variant="standard"
            onChange={(e) => setplazoN(e.target.value)}
          />
          
        </FormControl>

        

        <FormControl fullWidth>
          <TextField
            id="montoP"
            label="Tasa de interés anual"
            value={interesR}
            variant="standard"
            onChange={(e) => setInteresR(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <br />
          <Button
            variant="contained"
            color="info"
            onClick={(e) => calculateCredit(e)}
            style={{ marginLeft: "0.5rem" }}
            startIcon={<CalculateIcon />}
          >
            Calcular Liquidaciones
          </Button>
          <Button>
            <button type="submit" className="btn btn-primary">
              <a href="/">Volver al inicio</a>
            </button>
          </Button>
        </FormControl>
      </form>
      <img src={imagenPrestamos} class="img-fluid" alt="..." style={{ width: '600px', height: '300px' }}  />
    </Box>
  );
};

export default PaycheckCalculate;
