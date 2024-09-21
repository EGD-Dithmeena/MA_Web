import { Container, Typography } from "@mui/material";
import "./LandingPage.css";

import { LandingPageHeader } from "../../Components";
import { Footer } from "../../Components/Footer";

export const LandingPage = () => {
  return (
    <Container>
        <LandingPageHeader />
        <Typography variant="h1"> Landing Page </Typography>
        <Footer />
    </Container>
  );
};