import MenuItem from "@mui/material/MenuItem";

<FormControl fullWidth>
          <TextField
            id="month"
            label="Tipo de Préstamo"
            value={month}
            select
            variant="standard"
            defaultValue="1"
            onChange={(e) => setMonth(e.target.value)}
            style={{ width: "25%" }}
          >
            <MenuItem value={1}>Primera</MenuItem>
            <MenuItem value={2}>Febrero</MenuItem>
            <MenuItem value={3}>Marzo</MenuItem>
            <MenuItem value={4}>Abril</MenuItem>
          </TextField>
        </FormControl>