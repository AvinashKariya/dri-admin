import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const DeleteTeacher = () => {
  //defining states for inputs
  const [id, setId] = useState("");

  //on submit for --api request
  const submitDeleteTeacherForm = async (e) => {
    e.preventDefault();

    const response = await axios.delete(`apiurl/${id}`);
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
          Delete Teacher
        </Typography>

        <form onSubmit={submitDeleteTeacherForm}>
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

export default DeleteTeacher;
