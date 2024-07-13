import { Box, Stack, Typography, Link, Button } from "@mui/material";
import React from "react";
import Image from "./Image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../assets/Logo12.png";
import { Icon } from "@iconify/react";
import "./Animations.css";

const Footer = () => {
  return (
    <Stack direction="column" alignItems="center" position="relative" mt="5rem">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "5%",
          paddingY: { xs: "10px", md: "1%" },
          bgcolor: "#581781",
          width: { xs: "90%", md: "75%" },
          borderRadius: "40px",
          position: "absolute",
          top: { xs: "-9%", md: "-16%" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "15px", md: "2vw" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
           GPT-Teacher
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "21px", md: "100%" },
              textAlign: { xs: "center", md: "left" },
              letterSpacing: "1px",
            }}
          >
            India ka Learning Platform
          </Typography>
        </Box>
        <Box
          gap={{ xs: 1, md: 4 }}
          sx={{ display: "flex", justifyContent: { xs: "center", md: "end" } }}
        >
          <Button
            sx={{
              bgcolor: "black",
              border: "2px solid grey",
              borderRadius: "10px",
              width: { xs: "150px", sm: "180px" },
              py: { xs: "0px", sm: "4px" },
            }}
            startIcon={
              <Icon
                icon="ic:twotone-apple"
                color="whitesmoke"
                style={{ fontSize: "48px" }}
              />
            }
          >
            <Box sx={{ color: "white" }}>
              <Typography
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "75%", sm: "85%" },
                  textAlign: "left",
                }}
              >
                Available on the
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: "110%", sm: "120%" },
                  fontWeight: "600",
                  textAlign: "left",
                  lineHeight: "15px",
                }}
              >
                App Store
              </Typography>
            </Box>
          </Button>
          <Button
            sx={{
              bgcolor: "black",
              border: "2px solid grey",
              borderRadius: "10px",
              width: { xs: "150px", sm: "180px" },
              py: { xs: "0px", sm: "4px" },
            }}
            startIcon={
              <Icon
                icon="logos:google-play-icon"
                style={{ fontSize: "35px" }}
              />
            }
          >
            <Box sx={{ color: "white" }}>
              <Typography
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "76%", sm: "85%" },
                  textAlign: "left",
                }}
              >
                GET IT ON
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: "110%", sm: "120%" },
                  fontWeight: "600",
                  textAlign: "left",
                  lineHeight: "15px",
                }}
              >
                Google Play
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="end"
        bgcolor="#0E0E2C" 
        color="#fff" 
        sx={{
          padding: { xs: "10%", md: "5%" },
          paddingX: "8%",
          paddingY: { xs: "20%", md: "5%" },
          textAlign: "left",
          width: "100%",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" gap={6}>
          <Stack sx={{ marginRight: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Accessibility
            </Typography>
            <Stack gap={1}>
              <Link
                href="/aboutus"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                About Us
              </Link>
              <Link
                href="/"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                Explore
              </Link>
              <Link href="#" color="inherit" variant="body2" underline="hover">
                FAQs
              </Link>
              <Link href="#" color="inherit" variant="body2" underline="hover">
                Teams
              </Link>
              {/* <Link
                href="/ribinforbusiness"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                Benefits
              </Link> */}
              <Link
                href="/employbenefits"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                Benefits
              </Link>
            </Stack>
          </Stack>

   
          <Stack
            sx={{
              marginRight: "20px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Stack gap={1}>
              <Link
                href="#"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                Terms & Conditions
              </Link>
              <Link href="#" color="inherit" variant="body2" underline="hover">
                Cookie Policy
              </Link>
              <Link
                href="#"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                Privacy Policy
              </Link>
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" gap="10px">
              <Link
                href="https://www.instagram.com/yourusername"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.facebook.com/yourusername"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourusername"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                <LinkedInIcon />
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Box sx={{}}>
          <Image
            src={Logo}
            alt="Ribin"
            sx={{ width: { xs: "10rem", md: "12rem" } }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Footer;

















{/* <Link
                href="/legalprivacypolicy"
                color="inherit"
                variant="body2"
                underline="hover"
              >
                Privacy Policy
              </Link> */}

            //   <Link
            //     href="/legaltermsandconditions"
            //     color="inherit"
            //     variant="body2"
            //     underline="hover"
            //   >
            //     Terms & Conditions
            //   </Link>