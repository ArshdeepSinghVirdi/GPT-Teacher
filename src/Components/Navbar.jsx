import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import Image from "./Image";
import Logo from "../assets/Logo12.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const location = useLocation();

  const linkStyle = {
    textDecoration: "none", // Remove underline
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "1.2vw",
    color: "black", // Default color for all links
    "&:hover": {
      color: "white",
      backgroundColor: "#581781", // Background color on hover
    },
    backgroundColor: "transparent",
  };

  return (
    <div>
      <Stack
        sx={{
          paddingX: "3%",
          marginTop:"-2%",
          marginBottom:"-3%",
          display: { xs: "none", md: "block" },
          zIndex: 1,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Link to="/">
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2vw",
                  "&:hover": { color: "#DAA0FF" },
                }}
              >
                Explore
              </Button>
            </Link>
            <Link to="/aboutus">
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2vw",
                  "&:hover": { color: "#DAA0FF" },
                }}
              >
                About Us
              </Button>
            </Link>
            <Link to="#">
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.2vw",
                  "&:hover": { color: "#DAA0FF" },
                }}
              >
               Contact
              </Button>
            </Link>
            <Link to="/trynow">
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "1.2vw",
                borderRadius: "50px",
                bgcolor: "#581781",
                color: "white",
                "&:hover": { bgcolor: "#DAA0FF" },
              }}
            >
              Try Now
            </Button>
            </Link>
          </Box>
          <Image src={Logo} alt="logo" sx={{ width: "auto", height: "150px" }} />
        </Stack>
      </Stack>
      
      {/* MOBILE */}

      <Stack
        sx={{
          paddingX: "5%",
          paddingY: "4%",
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: 0,
          bgcolor: "white",
          width: "100%",
          zIndex: 4,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              src={Logo}
              alt="logo"
              sx={{ width: "auto", height: "60px" }}
            />
            <IconButton onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
          {open === true ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: "600",
                  fontSize: { xs: "14px", md: "1.2vw" },
                  "&:hover": { color: "#DAA0FF" },
                }}
              >
                Explore
              </Button>
              <Link to="/aboutus">
                <Button
                  variant="text"
                  sx={{
                    textTransform: "capitalize",
                    color: "black",
                    fontWeight: "600",
                    fontSize: { xs: "14px", md: "1.2vw" },
                    "&:hover": { color: "#DAA0FF" },
                  }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="/trynow">
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: { xs: "14px", md: "1.2vw" },
                  borderRadius: "50px",
                  bgcolor: "#581781",
                  color: "white",
                  "&:hover": { bgcolor: "#DAA0FF" },
                }}
              >
                Try Now
              </Button>
              </Link>
            </Box>
          ) : null}
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;





















// {/* <Link to="/ribinforbusiness">
// <Button
//   variant="text"
//   sx={{
//     textTransform: "capitalize",
//     color: "black",
//     fontWeight: "600",
//     fontSize: "1.2vw",
//     "&:hover": { color: "#DAA0FF" },
//   }}
// >
//  Contact
// </Button>
// </Link> */}