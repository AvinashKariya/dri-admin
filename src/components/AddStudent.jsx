import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
const AddStudent = () => {
  //defining states for inputs
  const [email, setEmail] = useState("");
  const [prn, setPrn] = useState("");
  const [group, setGroup] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  //on submit for --api request
  const submitAddStudentForm = async (e) => {
    e.preventDefault();
    const data = {
      prn,
      group,
      first_name,
      last_name,
    };

    const response = await axios.post("backend-api-url", data);
    console.log(response);
    clearData();
  };

  const clearData = () => {
    setEmail("");
    setGroup("");
    setFirstName("");
    setLastName("");
    setPrn("");
  };
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Typography variant='h4' gutterBottom>
          Add Student
        </Typography>

        <form onSubmit={submitAddStudentForm}>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField
                label='PRN Number'
                name='prn'
                variant='outlined'
                fullWidth
                value={prn}
                required
                onChange={(e) => setPrn(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Group'
                name='group'
                variant='outlined'
                fullWidth
                value={group}
                required
                onChange={(e) => setGroup(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
                Add Student
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddStudent;
