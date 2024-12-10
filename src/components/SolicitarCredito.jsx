import React, { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel, Box, Button } from "@mui/material";

const FormularioPrestamo = () => {
  const [tipoPrestamo, setTipoPrestamo] = useState("");
  const [archivos, setArchivos] = useState(null);

  const requisitos = {
    "Primera Vivienda": ["Comprobante de ingresos", "Certificado de avalúo", "Historial crediticio"],
    "Segunda Vivienda": [
      "Comprobante de ingresos",
      "Certificado de avalúo",
      "Escritura de la primera vivienda",
      "Historial crediticio",
    ],
    "Propiedades Comerciales": [
      "Estado financiero del negocio",
      "Comprobante de ingresos",
      "Certificado de avalúo",
      "Plan de negocios",
    ],
    Remodelación: ["Comprobante de ingresos", "Presupuesto de la remodelación", "Certificado de avalú actualizado"],
  };

  const handleChangeTipoPrestamo = (event) => {
    setTipoPrestamo(event.target.value);
    setArchivos(null); // Reinicia los archivos al cambiar el tipo
  };

  const handleFileChange = (event) => {
    setArchivos(event.target.files); // Guarda múltiples archivos
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500, margin: "0 auto", padding: 3 }}>
      <h3 style={{fontSize:"40px"}}>Solicitud de Crédito</h3>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="tipo-prestamo-label">Tipo de Préstamo</InputLabel>
        <Select
          labelId="tipo-prestamo-label"
          value={tipoPrestamo}
          onChange={handleChangeTipoPrestamo}
          label="Tipo de Préstamo"
        >
          {Object.keys(requisitos).map((tipo) => (
            <MenuItem key={tipo} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {tipoPrestamo && (
        <Box sx={{ marginBottom: 2 }}>
          <h3>Requisitos Documentales</h3>
          <ul>
            {requisitos[tipoPrestamo].map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </Box>
      )}

      {tipoPrestamo && (
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <input
            type="file"
            multiple={requisitos[tipoPrestamo].length > 1} // Habilita múltiples archivos si hay más de 1 requisito
            onChange={handleFileChange}
          />
        </FormControl>
      )}

      {archivos && (
        <ul>
          {Array.from(archivos).map((archivo, index) => (
            <li key={index}>{archivo.name}</li>
          ))}
        </ul>
      )}

      <Button variant="contained" color="primary" disabled={!archivos}>
        Subir Archivos
      </Button>
    </Box>
  );
};

export default FormularioPrestamo;
