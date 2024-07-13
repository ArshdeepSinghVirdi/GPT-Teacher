import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrontSectionImg from "../../assets/FrontSecImg.png";
import Image from "../Image";
import Company1 from "../../assets/Company1.png";
import Company2 from "../../assets/Company2.png";
import Company3 from "../../assets/Company3.png";
import Company4 from "../../assets/Company4.png";
import Company5 from "../../assets/Company5.png";
import Company6 from "../../assets/Company6.png";
import Company7 from "../../assets/Company7.png";
import Company8 from "../../assets/Company8.png";
import Company9 from "../../assets/Company9.png";
import Company10 from "../../assets/Company10.png";
import Company11 from "../../assets/Company11.png";
import Company12 from "../../assets/Company12.png";
import Company13 from "../../assets/Company13.png";
import GirlsClappingImg from "../../assets/GirlsClapping.png";
import FriendsPartyImg from "../../assets/FriendsParty.png";

const FrontSection = () => {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setImage((val) => (val % 3) + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Stack
        sx={{
          paddingX: "5%",
          paddingY: "2%",
          paddingTop: { xs: "7rem", md: "2rem" },
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          gap={3}
          paddingX={{ xs: "2%", md: "12%" }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "200%", md: "300%" },
              textAlign: "center",
              width: { xs: "100%", md: "80%" },
              color: "#581781",
              lineHeight: { xs: "40px", md: "60px" },
            }}
          >
            Increase revenue and expand your reach with Ribin
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "24px",
              color: "#B2279C",
              textAlign: "justify",
              lineHeight: "30px",
            }}
          >
            Ribin is an innovative experience gifting app that aims to transform
            the traditional way of gifting. Ribin allows users to gift their
            loved ones a memorable experience in the form of a customized gift
            card- all from one app.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {image === 1 ? (
              <Image
                src={FrontSectionImg}
                alt="frontimg"
                sx={{ width: "300px" }}
              />
            ) : image === 2 ? (
              <Image
                src={GirlsClappingImg}
                alt="frontimg"
                sx={{ width: "300px" }}
              />
            ) : image === 3 ? (
              <Image
                src={FriendsPartyImg}
                alt="frontimg"
                sx={{ width: "300px" }}
              />
            ) : null}
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontWeight: "500",
                fontSize: { xs: "14px", md: "1.2vw" },
                borderRadius: "50px",
                bgcolor: "#581781",
                color: "white",
                "&:hover": { bgcolor: "#DAA0FF" },
              }}
              onClick={() => navigate("/partnerwithus")} // Replace '/partner' with the desired path
            >
              Partner With Us
            </Button>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#581781",
          width: "100%",
          paddingY: "10px",
          marginTop: "5rem",
          overflow: "hidden",
        }}
      >
        <div className="marquee-container">
          <Image src={Company1} alt="companyLogo" />
          <Image src={Company2} alt="companyLogo" />
          <Image src={Company3} alt="companyLogo" />
          <Image src={Company4} alt="companyLogo" />
          <Image src={Company5} alt="companyLogo" />
          <Image src={Company6} alt="companyLogo" />
          <Image src={Company7} alt="companyLogo" />
          <Image src={Company8} alt="companyLogo" />
          <Image src={Company9} alt="companyLogo" />
          <Image src={Company10} alt="companyLogo" />
          <Image src={Company11} alt="companyLogo" />
          <Image src={Company12} alt="companyLogo" />
          <Image src={Company13} alt="companyLogo" />
          <Image src={Company1} alt="companyLogo" />
          <Image src={Company2} alt="companyLogo" />
          <Image src={Company3} alt="companyLogo" />
          <Image src={Company4} alt="companyLogo" />
          <Image src={Company5} alt="companyLogo" />
          <Image src={Company6} alt="companyLogo" />
          <Image src={Company7} alt="companyLogo" />
          <Image src={Company8} alt="companyLogo" />
          <Image src={Company9} alt="companyLogo" />
          <Image src={Company10} alt="companyLogo" />
          <Image src={Company11} alt="companyLogo" />
          <Image src={Company12} alt="companyLogo" />
          <Image src={Company13} alt="companyLogo" />
        </div>
      </Box>
    </div>
  );
};

export default FrontSection;
