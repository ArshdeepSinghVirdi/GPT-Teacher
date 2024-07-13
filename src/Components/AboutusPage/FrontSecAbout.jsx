import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MainPhoto from "../../assets/GiftBagFriends.png";
import Image from "../Image";
import PurpleDot from "../../assets/LeftPurple.png";
import PinkDot from "../../assets/LeftPink.png";
import SpeechBubble from "../../assets/SpeechBubble.png";
import Gift from "../../assets/GiftBox.png";
import "./AnimationAboutus.css";

const MainTextStyle = {
  color: "#B2279C",
  fontWeight: "600",
  fontSize: { xs: "40%", md: "80%" },
  textAlign: "center",
  animationName: "TextGrow",
  animationDuration: "1s",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",
  marginTop:"0%",
};

const SpeechBubbleStyles = {
  position: "absolute",
  top: "23%",
  width: { xs: "40px", md: "90px" },
  transform: "translateX(600%)",
  animationName: "SpeechBubbleMove",
  animationDuration: "1s",
  animationIterationCount: "1",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",
};

const GiftStyles = {
  position: "absolute",
  top: { xs: "45%", md: "42%" },
  left: { xs: "62%", md: "57.5%" },
  opacity: 0.2,
  width: { xs: "40px", md: "85px" },
  transform: "translateX(10%)",
  animation: "GiftMove 1s linear 1",
  animationFillMode: "forwards",
  animationTimingFunction: "ease-out",
};

const FrontSecAbout = () => {
  return (
    <Stack
      sx={{ paddingX: "5%", paddingY: "2%", pt: { xs: "8rem", md: "5rem" } }}
    >
      <Stack
        direction="column"
        alignItems="center"
        position="relative"
        overflowX="hidden"
        gap={8}
      >
        <Typography sx={MainTextStyle}>
        Elevate your learning experience with an AI-powered tutor for 
          <br /> tutor for more efficient and effective education.
        </Typography>
        <Image
          src={PurpleDot}
          alt="purpledot"
          sx={{
            position: "absolute",
            left: 0,
            top: "12%",
            zIndex: -1,
            width: "35%",
          }}
        />
        <Image
          src={PinkDot}
          alt="pinkdot"
          sx={{
            position: "absolute",
            left: "10%",
            bottom: 0,
            zIndex: -1,
            width: "35%",
          }}
        />
        <Image src={SpeechBubble} alt="heart" sx={SpeechBubbleStyles} />
        <Image src={Gift} alt="gift" sx={GiftStyles} />
        <Box sx={{ width: { xs: "90%", md: "60%" } }}>
          <Image src={MainPhoto} alt="mainphoto" sx={{ width: "100%" }} />
        </Box>
        <Image
          src={PinkDot}
          alt="pinkdot"
          sx={{
            position: "absolute",
            right: "10%",
            bottom: 0,
            zIndex: -1,
            width: "35%",
          }}
        />
        <Image
          src={PurpleDot}
          alt="purpledot"
          sx={{
            position: "absolute",
            right: 0,
            top: "12%",
            zIndex: -1,
            width: "35%",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default FrontSecAbout;
