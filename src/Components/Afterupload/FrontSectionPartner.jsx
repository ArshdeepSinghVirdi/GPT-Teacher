import React,{useState} from "react";
import {
  TextField,
  FormControl,
  Button,
  Container,
  Typography,
  Box,
  Stack,
 
} from "@mui/material";

function FrontSectionPartner() {
  const [text, setText] = React.useState("");
  const [userInput, setUserInput] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFetching(true);
  };
  

  const apiURL = "https://gpt-teacher-api.devasheeshmishra.com/search";

  const headers = {
    // "Authorization": "Bearer YourToken",
    // "Content-Type": "application/json",
  };
  const queryParams = new URLSearchParams({ userInput });

  const fullURL = `${apiURL}?${queryParams.toString()}`;

  fetch(fullURL, {
    method: "GET",
    headers: headers,
    
  })
    .then((response) => response.status)
    .then((data) => {
      setText(data);
      setIsFetching(false);
    })
    .catch((error) => {
      console.error("Error fetching text:", error);
      setIsFetching(false);
    });

  return (
    <Stack paddingX={2} marginTop={8}>
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "#581781",
          padding: "5%",
          borderRadius: "20px",
          marginTop: "1px",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography
            sx={{ color: "#DAA0FF", fontWeight: "600", fontSize: "30px" }}
          >
            Let's Learn Effectively and Efficiently
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <Typography variant="h6" sx={{ color: "white" }}>
              Enter your text input:
            </Typography>
            <TextField
              variant="filled"
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{ background: "white", width: '100%'}}
              multiline
              rows={4}
              disabled={isFetching}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button type="submit" variant="contained" color="primary">
              {isFetching ? "Fetching..." : "Ask+ your GPT-Teacher"}
            </Button>
          </FormControl>
        </form>
        {text && (
          <FormControl fullWidth margin="normal">
            <Typography variant="h6" sx={{ color: "white" }}>
              Fetched Text:
            </Typography>
            <TextField
              variant="filled"
              value={text}
              multiline
              rows={4}
              sx={{ background: "white", width: "100%" }}
            />
          </FormControl>
        )}
      </Container>
    </Stack>
  );
}

export default FrontSectionPartner;
