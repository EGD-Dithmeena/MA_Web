import { Container, Typography, Box } from "@mui/material";
import "./LandingPage.css";

import { LandingPageHeader } from "../../Components";
import { Footer } from "../../Components/Footer";

export const LandingPage = () => {
  return (
    <Container 
      className="LandingPage-Container"
      maxWidth={false}
      disableGutters={true}
    >
        <LandingPageHeader />

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: `url('../../../../Assets/LandingPage/LandingPage_HeroImage.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(
                  to right,
                  rgba(35, 86, 151, 0) 0%,
                  rgba(35, 86, 151, 0.8) 56%,
                  rgba(104, 139, 184, 0.9) 84%,
                  rgba(255, 255, 255, 0.7) 100%
                )`,
              zIndex: 1,
            }}
          />

          {/* Hero Content */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "65%",
              transform: "translate(0%, -50%)",
              zIndex: 2,
              color: "white",
              textAlign: "right",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "4rem" }, // Responsive font size
                fontStyle: "italic",
              }}
            >
              Pay Faster <br /> Than Ever
            </Typography>
          </Box>
        </Box>

        <Footer />
    </Container>
  );
};