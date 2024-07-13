import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import Image from "./Image";
import BusinessCooperateImg from "../assets/BusinessImg.png";
import EyeImg from "../assets/EyeImg.png";
import GraphImg from "../assets/GraphImg.png";
import PencilImg from "../assets/Pencil-Img.png";

const ImageBoxStyles = {
  width: { xs: "100%", md: "50%" },
  display: "flex",
  justifyContent: "center",
};
const ImageBoxStylesAnimation = {
  transform: "translateX(-112%)",
  width: { xs: "100%", md: "50%" },
  display: "flex",
  justifyContent: "center",
  animationFillMode: "forwards",
  animationTimingFunction: "linear",
  animationName: "ImgSlide",
  animationDuration: "1s",
};

const ContentBoxStyles = {
  width: { xs: "100%", md: "50%" },
};
const ContentBoxStylesAnimation = {
  width: { xs: "100%", md: "50%" },
  transform: "translateX(112%)",
  animationName: "ContentSlide",
  animationDuration: "1s",
  animationTimingFunction: "linear",
  animationFillMode: "forwards",
};
const FourthSection = () => {
  const [sectionVisible, setSectionVisible] = useState();
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      setSectionVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <Stack
      ref={myRef}
      sx={{
        paddingX: "5%",
        paddingY: "1%",
        mt: { xs: "10rem", md: "2rem" },
        overflow: "hidden",
      }}
    >
      <Stack>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: { xs: "34px", md: "62px" },
            color: "#581781",
            marginTop:{xs:"-5%",md:"1%"},
          }}
        >
          Benefits of GPT-Teacher
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mt="2rem"
          rowGap={4}
        >
          <Box sx={sectionVisible ? ImageBoxStylesAnimation : ImageBoxStyles}>
            <Image
              src={BusinessCooperateImg}
              alt="BusinessImage"
              sx={{ width: "70%" }}
            />
          </Box>
          <Box
            sx={sectionVisible ? ContentBoxStylesAnimation : ContentBoxStyles}
          >
            <Stack
              direction="column"
              justifyContent="center"
              flexWrap="wrap"
              gap={5}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <Box
                  sx={{
                    bgcolor: "#581781",
                    borderRadius: "50%",
                    width: "fit-content",
                    padding: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={EyeImg} alt="discount" sx={{ width: "26px" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                    Personalized Learning
                  </Typography>
                  <Typography>
                    GPT Teachers adapt content to individual students, enhancing
                    engagement and comprehension.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <Box
                  sx={{
                    bgcolor: "#581781",
                    borderRadius: "50%",
                    width: "fit-content",
                    padding: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={GraphImg} alt="discount" sx={{ width: "26px" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                    Accessibility and Scalability
                  </Typography>
                  <Typography>
                    GPT Teachers offer 24/7 access and can serve a large number
                    of students, making education widely accessible and
                    cost-efficient.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <Box
                  sx={{
                    bgcolor: "#581781",
                    borderRadius: "50%",
                    width: "fit-content",
                    padding: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={PencilImg}
                    alt="discount"
                    sx={{ width: "26px" }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                    Continuous Feedback and Data-Driven Insights
                  </Typography>
                  <Typography>
                    GPT Teachers provide real-time feedback and collect data,
                    facilitating student improvement and data-informed teaching
                    enhancements.
                  </Typography>
                </Box>
              </Box>
              <Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FourthSection;
