import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "./Image";
import Img from "../assets/Circle1.png";
import Img1 from "../assets/Circle2.png";
import Img2 from "../assets/Circle3.png";
import Img4 from "../assets/Circle4.png";
import Twodash from "../assets/TwoDash.png";
import RoundingArrow from "../assets/RoundingArrow.png";
import LeftPurpleDot from "../assets/LeftPurple.png";
import LeftPinkDot from "../assets/LeftPink.png";
import "./Animations.css";

const ContentBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  transform: "translateX(-112%)",
  width: { xs: "100%", md: "45%" },
  animationFillMode: "forwards",
  animationTimingFunction: "ease-out",
  animationName: "slide",
  animationDuration: "1s",
  animationDelay: "2s",
  backgroundImage: "url(../assets/LeftBg.png)",
  backgroundSize: "cover",
  zIndex: 2,
};
const ImageDesign  = {
  width: { xs: "11rem", md: "17rem" },
  height: { xs: "11rem", md: "17rem" },
  animationName: "MovingImage1",
  animationDelay: "2s",
  animationDuration: "3s",
  animationIterationCount: "infinite",
  zIndex: 4,
  borderRadius:"50%",
  padding:"1%",
};
const ImageDesign2 = {
  width: { xs: "10rem", md: "16rem" },
  height: { xs: "10rem", md: "16rem" },
  animationName: "MovingImage2",
  animationDelay: "1s",
  animationDuration: "3s",
  animationIterationCount: "infinite",
  borderRadius:"50%",
  zIndex: 2,
  padding:"2%",
};
const Style = {
  width: { xs: "8rem", md: "14rem" },
  height: { xs: "8rem", md: "15rem" },
  animationName: "MovingImage3",
  animationDelay: "1s",
  animationDuration: "3s",
  animationIterationCount: "infinite",
  zIndex: 2,
  borderRadius:"50%",
  padding:"2%",
};
const Style2 = {
  width: { xs: "10rem", md: "19rem" },
  height: { xs: "10rem", md: "19rem" },
  animationName: "MovingImage4",
  animationDelay: "1s",
  animationDuration: "3s",
  animationIterationCount: "infinite",
  zIndex: 2,
  borderRadius:"50%",
  padding:"3%",
};

const FirstSection = () => {
  return (
    <Stack
      sx={{
        paddingX: "4%",
        paddingTop: { xs: "7rem", md: "2rem" },
        overflow: "hidden",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        rowGap={5}
        position="relative"
      >
        <Image
          src={LeftPurpleDot}
          alt="dot"
          sx={{ position: "absolute", top: "-10%", left: "0", zIndex: 0 }}
        />
        <Box sx={ContentBoxStyles}>
          <Typography
            sx={{
              color: "#B2279C",
              fontWeight: "600",
              fontSize: { xs: "140%", md: "220%" },
            }}
          >
            Revolutionize your learning experience,
          </Typography>
          <Typography
            sx={{
              lineHeight: { xs: "36px", md: "11vh" },
              fontSize: { xs: "7vw", md: "2.5vw" },
              fontWeight: "600",
              zIndex: 1,
            }}
          >
           with AI-driven guidance, making  
            <br /> education more efficient and effective for students new experiences
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: "10px",
              width: "fit-content",
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: { xs: "14px", md: "1.2vw" },
              borderRadius: "50px",
              bgcolor: "#581781",
              color: "white",
              "&:hover": { bgcolor: "#581781" },
            }}
          >
            Lets Explore!
          </Button>
          <Image
            src={RoundingArrow}
            sx={{
              width: { xs: "70px", md: "150px" },
              position: "relative",
              left: "200px",
              bottom: { xs: "40px", md: "10%" },
              zIndex: 2,
            }}
          />
        </Box>
        <Image
          src={LeftPinkDot}
          alt="dot"
          sx={{ position: "absolute", top: "35%", left: "20px", zIndex: -1 }}
        />
        <Box>
          <Image
            src={LeftPurpleDot}
            alt="dot"
            sx={{ position: "absolute", top: "-10%", right: "26%", zIndex: 0 }}
          />
          <Image
            src={LeftPinkDot}
            alt="dot"
            sx={{ position: "absolute", top: "-20%", right: "20px", zIndex: 0 }}
          />
          <Image
            src={LeftPurpleDot}
            alt="dot"
            sx={{ position: "absolute", top: "-15%", right: "-10%", zIndex: 0 }}
          />
          <Box>
            <Box>
              <Image
                src={Img}
                alt="Image"
                sx={ImageDesign}
              />
              <Image src={Img1} alt="Image" sx={ImageDesign2} />
            </Box>
            <Box>
              <Image src={Img2} alt="Image" sx={Style} />
              <Image src={Img4} alt="Image" sx={Style2} />
            </Box>
          </Box>
          <Image
            src={LeftPinkDot}
            alt="dot"
            sx={{ position: "absolute", top: "35%", left: "20px", zIndex: 0 }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default FirstSection;
