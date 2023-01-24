import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <div
          className="nav-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6" color="inherit" component="div">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Typography>

          <div style={{ display: "flex", gap: 30 }}>
            <Typography variant="h6" color="inherit" component="div">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Typography>

            <Typography variant="h6" color="inherit" component="div">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </Typography>

            <Typography variant="h6" color="inherit" component="div">
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </Typography>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
