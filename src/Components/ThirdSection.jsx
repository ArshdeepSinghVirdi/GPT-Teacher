import React from "react";
import Image from "./Image";
import {  Stack } from "@mui/material";
import logo from "../assets/Circle1.png";
import logo1 from "../assets/Circle6.png";
import logo2 from "../assets/Circle2.png";
import logo3 from "../assets/Circle3.png";
import logo4 from "../assets/Circle4.png";


const ThirdSection = () => {
  return (
    <Stack
      sx={{ paddingX: "5%", paddingY: "2%", position: "relative", mt: "5rem",overflow:"hidden" }}
    >
      <Stack direction={{ xs: "column", md: "row" }} rowGap={3}>
        <div className="marquee-container">
          <Image src={logo} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo1} alt="companyLogo" sx={{ width: "100px" }} />
          <Image src={logo2} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo3} alt="companyLogo"sx={{ width: "100px" }} />
          <Image src={logo4} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo1} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo} alt="companyLogo" sx={{ width: "100px" }} />
          <Image src={logo2} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo4} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo3} alt="companyLogo" sx={{ width: "100px" }} />
          <Image src={logo} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo4} alt="companyLogo" sx={{ width: "100px" }} />
          <Image src={logo2} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo1} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo2} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo3} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo4} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo1} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo4} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo3} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo2} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo1} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo2} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo4} alt="companyLogo" sx={{ width: "100px" }}/>
          <Image src={logo1} alt="companyLogo" sx={{ width: "100px" }}/>
        </div>
    </Stack>
     </Stack>
  );
};

export default ThirdSection;
