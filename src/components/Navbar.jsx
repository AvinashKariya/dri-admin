import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#B99470", width: "18%", height: "100vh" }}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <ListItem
          onClick={() => {
            navigate("/add-student");
          }}
          sx={{ border: "1px solid black", backgroundColor: "#C69774" }}
        >
          <ListItemButton>
            <ListItemText primary='Add Student' />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/add-teacher");
          }}
          sx={{ border: "1px solid black", backgroundColor: "#C69774" }}
        >
          <ListItemButton>
            <ListItemText primary='Add Teacher' />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/delete-student");
          }}
          sx={{ border: "1px solid black", backgroundColor: "#C69774" }}
        >
          <ListItemButton>
            <ListItemText primary='Delete Student' />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/delete-teacher");
          }}
          sx={{ border: "1px solid black", backgroundColor: "#C69774" }}
        >
          <ListItemButton>
            <ListItemText primary='Delete Teacher' />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/");
          }}
          sx={{
            border: "1px solid black",

            marginTop: "50px",
          }}
        >
          <ListItemButton>
            <ListItemText primary='Log Out' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
