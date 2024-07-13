import React, { useCallback, useState } from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const Front = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const handleUpload = async () => {
    if (uploadedFile) {
      try {
        setIsUploading(true);
        let bodyContent = new FormData();
        bodyContent.append("file", uploadedFile);

        let response = await fetch(
          "https://gpt-teacher-api.devasheeshmishra.com/upload",
          {
            method: "POST",
            body: bodyContent,
            headers: {},
          }
        );

        let status = await response.text();
        console.log(status);
      } catch (error) {
        console.error("Error while uploading file:", error);
      } finally {
        setIsUploading(false);
      }
    }
    navigate("/afterupload");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3%",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: { xs: "34px", md: "60px" },
          color: "#581781",
        }}
      >
         Upload File You'd Like To Study.
      </Typography>
      <Paper
        sx={{
          padding: "7.2%",
          textAlign: "center",
          color: "#581781",
          boxShadow: "1px 1px 9px rgba(128, 1, 128, 1)",
        }}
      >
        <div>
          <div>
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              style={{ display: "none" }}
              onChange={(e) => onDrop(e.target.files)}
              id="file-input"
            />
            <label htmlFor="file-input">
              <Button
                component="span"
                variant="contained"
                sx={{ bgcolor: "#581781" }}
              >
                Choose File
              </Button>
            </label>
          </div>
          <p>Drag and drop a file here, or click to select a file</p>
          <div>
            <Button
              variant="contained"
              sx={{ bgcolor: "#581781" }}
              onClick={handleUpload}
            >
              Upload
            </Button>
          </div>
          {isUploading && (
            <div style={{ marginTop: "20px" }}>
              <CircularProgress />
              <p>Uploading...</p>
            </div>
          )}
        </div>
        {uploadedFile && <p>Selected File: {uploadedFile.name}</p>}
      </Paper>
    </Container>
  );
};

export default Front;
