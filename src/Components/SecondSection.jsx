import React, { useState, useEffect } from "react";
import Image from "./Image";
import { Stack, Typography, Box } from "@mui/material";
import HeartArrow from "../assets/HeartArrow.png";
import Phone2 from "../assets/Circle5.png";

const SecondSection = () => {
  const [box, setBox] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setBox((val) => (val % 2) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // console.log(box)

  return (
    <Stack sx={{ paddingX: "5%", paddingY: "2%", mt: "5rem" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="stretch"
        rowGap={5}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            width: { xs: "100%", md: "45%" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: "36px", md: "48px" },
              color: "#581781",
            }}
          >
            How
            <br /> GPT-Teacher Works?
          </Typography>
          <Image
            src={HeartArrow}
            alt="Image"
            sx={{ width: {xs:"25%" , md:"36%"}, position: "absolute", top: 0, right: 0 }}
          />
          <Typography
            sx={{ fontWeight: "700", fontSize: { xs: "5vw", md: "32px" } }}
          >
            Using GPT-Teacher is simple. It's as easy as learning in orgainsed
            manner.
          </Typography>
        </Box>
        {box === 1 ? (
          <Box
            sx={{
              width: { xs: "100%", md: "52%" },
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              bgcolor: "#F24CBA59",
              px: "8%",
              paddingY: { xs: "14%", md: "2%" },
              borderRadius: { xs: "60px", md: "88px" },
              position: "relative",
              height: "400px",
              rowGap: "10px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: "555",
                  fontSize: { xs: "17.5px", md: "20px" },
                  color: "#581784",
                  whiteSpace: "nowrap",
                }}
              >
                Experience cutting-edge education with <br/> our GPT Teacher website.
                Powered by<br/> LLM (Large Language Models)<br/>, Gen AI, and Vector
                Datasets, our platform<br/> offers personalized learning experiences.<br/>
                Harnessing the power of embeddings, <br/>we provide tailored content
                for optimal <br/> understanding. Plus, enjoy text-to-speech<br/> and
                automatic-speech-recognition <br/>functionality for a comprehensive
                and<br/> immersive educational journey.
              </Typography>
            </Box>
          </Box>
        ) : box === 2 ? (
          <Box
            sx={{
              width: { xs: "100%", md: "52%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              bgcolor: "#FFFFFF",
              px: "8%",
              paddingY: { xs: "14%", md: "2%" },
              borderRadius: { xs: "60px", md: "88px" },
              position: "relative",
              height: "400px",
              rowGap: "10px",
            }}
          >
            {/*  */}
            <Image
              src={Phone2}
              alt="phone"
              sx={{
                width: { xs: "110%", md: "120%" },
                height:{xs:"105%",md:"105%"},
                objectFit: 'cover',
                borderRadius:"15%",
              }}
            />
          </Box>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default SecondSection;
