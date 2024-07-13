import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const FAQsSection = () => {
  return (
    <Stack
      sx={{ paddingX: "5%", paddingY: "2%", position: "relative", mt: "5rem" }}
    >
      <Box
        sx={{
          paddingX: "4%",
          paddingY: { xs: "12%", md: "4%" },
          bgcolor: "#581781",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "84px",
        }}
        gap={5}
      >
        <Box>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: { xs: "30px", md: "40px" },
              textAlign: "center",
            }}
          >
            FAQs!!! Need Help?
          </Typography>
          <Typography
            sx={{
              color: "#DAA0FF",
              fontWeight: "300",
              fontSize: { xs: "28px", md: "36px" },
              textAlign: "center",
            }}
          >
            We've got you covered{" "}
          </Typography>
        </Box>
        <Stack color="white" gap={4}>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              Can I limit the value of my Gift Cards?{" "}
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              The value of the Gift Cards are decided by you and also a customer
              can buy a Gift Card of any denomination limited by the maximum and
              minimum values set.{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              How will the customer get his/her Gift card?{" "}
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              The customer will receive the Gift Card as an SMS or Email{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              {" "}
              How do I launch my Gift Card?
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              {" "}
              Simple! Our experts will take care of everything required to help
              you launch your gift cards - you just need to give us your details
              in the form below.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              How can a customer redeem the Gift Card?{" "}
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              Customers can redeem their Gift Cards at your physical store as
              mentioned with us.{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              What is the validity of the Gift Card?{" "}
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              The validity of the Gift Card is one year from the date of its
              issuing.{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              What if my customer's Gift card gets lost/stolen?{" "}
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              Your customer needs to protect the Gift card number and pin to
              avoid misuse. Neither you nor Ribin shall assume any liability in
              case the Gift Card pin gets lost/ stolen/compromised. We will not
              replace the Gift card or refund the cash.{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: { xs: "32px", md: "45px" },
              }}
            >
              {" "}
              Will I consider this as sale now or once customer redeems this?
            </Typography>
            <Typography sx={{ fontSize: "110%" }}>
              {" "}
              The moment the customer purchases an Gift Card, it is considered
              as a sale as you would have received the money for the Gift Card.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FAQsSection;
