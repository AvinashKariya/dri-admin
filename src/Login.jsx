import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant='h4' gutterBottom marginTop={"40px"}>
        Admin Login
      </Typography>

      <form onSubmit={() => navigate("/add-student")}>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label='Username/Email'
              name='email'
              variant='outlined'
              fullWidth
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              name='password'
              variant='outlined'
              fullWidth
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type='submit'
              variant='contained'
              style={{
                width: "200px",
                padding: "10px",
                backgroundColor: "#B99470",
                color: "white",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
