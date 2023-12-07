import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const AddTeacher = () => {
  //defining states for inputs
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  //on submit for --api request

  const submitAddTeacherForm = async (e) => {
    e.preventDefault();
    const data = {
      id,
      email,
      first_name,
      last_name,
    };

    const response = await axios.post("backend-api-url", data);
    console.log(response);
    clearData();
  };

  const clearData = () => {
    setEmail("");
    setId("");
    setFirstName("");
    setLastName("");
  };
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Typography variant='h4' gutterBottom>
          Add Teacher
        </Typography>

        <form onSubmit={submitAddTeacherForm}>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField
                label='ID'
                name='id'
                variant='outlined'
                fullWidth
                value={id}
                required
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='E-mail'
                name='email'
                variant='outlined'
                fullWidth
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField
                label='First Name'
                name='f_name'
                variant='outlined'
                fullWidth
                value={first_name}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Last Name'
                name='l_name'
                variant='outlined'
                fullWidth
                value={last_name}
                required
                onChange={(e) => setLastName(e.target.value)}
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
                  width: "150px",
                  padding: "10px",
                  backgroundColor: "#B99470",
                  color: "white",
                }}
              >
                Add Teacher
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddTeacher;
