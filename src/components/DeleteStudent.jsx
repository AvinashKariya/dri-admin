import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const DeleteStudent = () => {
  //defining states for inputs
  const [prn, setPrn] = useState("");

  //on submit for --api request
  const submitDeleteStudentForm = async (e) => {
    e.preventDefault();

    const response = await axios.delete(`apiurl/${prn}`);
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
          Delete Student
        </Typography>

        <form onSubmit={submitDeleteStudentForm}>
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
                Delete Student
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default DeleteStudent;
