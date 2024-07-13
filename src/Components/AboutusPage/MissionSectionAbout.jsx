import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "../Image";
import FilledCircle from "../../assets/FullCircle.png";
import VideoEditingImg from "../../assets/VideoEditing.png";
import PotteryImg from "../../assets/PotteryBulbImg.png";
import SecondCircle from "../../assets/secondCircle.png";
import ThirdCircle from "../../assets/thirdCircle.png";
import FourthCircle from "../../assets/fourthCircle.png";
import "./AnimationAboutus.css";

const FirstCircleStyles = {
  width: { xs: "100%", md: "84%" },
  animation: "spin 2s linear infinite",
};
const SecondCircleStyles = {
  width: { xs: "100%", md: "84%" },
  animation: "spin 2s linear infinite",
};
const ThirdCircleStyles = {
  width: { xs: "100%", md: "84%" },
  animation: "spin 2s linear infinite",
};
const FourthCircleStyles = {
  width: { xs: "100%", md: "84%" },
  animation: "spin 2s linear infinite",
};

const MissionSectionAbout = () => {
  const [box, setBox] = useState(1);
  const [img, setImg] = useState(1);
  const [circle, setCircle] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setBox((val) => (val % 2) + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setImg((val) => (val % 2) + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCircle((val) => (val % 4) + 1);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Stack
      sx={{ paddingX: "5%", paddingY: "2%", mt: { xs: "8rem", md: "1rem" } }}
    >
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Box
          class="image-container"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {circle === 1 && (
            <Image src={FilledCircle} alt="circle" sx={FirstCircleStyles} />
          )}
          {circle === 2 && (
            <Image src={SecondCircle} alt="circle" sx={SecondCircleStyles} />
          )}
          {circle === 3 && (
            <Image src={ThirdCircle} alt="circle" sx={ThirdCircleStyles} />
          )}
          {circle === 4 && (
            <Image src={FourthCircle} alt="circle" sx={FourthCircleStyles} />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            position: "absolute",
            rowGap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              px: "3%",
              py: "8%",
              bgcolor: "#581781",
              width: { xs: "70%", sm: "46%", md: "500px" },
              height: { xs: "300px", md: "520px" },
              gap: "1vh",
              borderRadius: "24px",
            }}
          >
            {box === 1 ? (
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "100%", md: "200%" },
                    textAlign: "center",
                  }}
                >
                  Mission
                </Typography>
                <Typography
                  sx={{
                    color: "#DAA0FF",
                    textAlign: "justify",
                    fontSize: { xs: "85%", md: "21px" },
                    mt: { xs: 0, md: 4 },
                  }}
                >
                  Our mission is to harness the potential of advanced
                  technologies, including Gen AI, LLM, Vector Datasets, and
                  text-to-speech capabilities, to create an AI-driven
                  educational platform that offers Personalization,
                  Accessibility, Innovation and Empowerment.
                </Typography>
              </Box>
            ) : box === 2 ? (
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "100%", md: "200%" },
                    textAlign: "center",
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  sx={{
                    color: "#DAA0FF",
                    textAlign: "justify",
                    fontSize: { xs: "85%", md: "21px" },
                    mt: { xs: 0, md: 4 },
                  }}
                >
                  To revolutionize education through cutting-edge technology,
                  our GPT Teacher website powered by Gen AI aspires to provide
                  personalized, accessible, and transformative learning
                  experiences. We envision a world where every learner can
                  access high-quality education tailored to their unique needs
                  and preferences, fostering lifelong learning and empowerment.
                </Typography>
              </Box>
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: "3%",
              py: "10%",
              bgcolor: "#B2279C",
              width: { xs: "70%", sm: "46%", md: "500px" },
              height: { xs: "300px", md: "520px" },
              borderRadius: "24px",
              overflowY: "hidden",
            }}
          >
            {img === 1 ? (
              <Image src={VideoEditingImg} alt="image" sx={{ width: "80%" }} />
            ) : img === 2 ? (
              <Image src={PotteryImg} alt="image" sx={{ width: "80%" }} />
            ) : null}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MissionSectionAbout;
