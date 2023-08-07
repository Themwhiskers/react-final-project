import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Paper
            variant="outlined"
            sx={{ padding: 3 }}
          >
            Welcome!
            <br/>
            On this app you can view and audit verious business cards, sign in as a business and you too will be able to post your business' card.
            <br/>
            Edit your cards in the MY CARDS page, or mark other cards for safe-keeping in your FAVORITE CARDS page!
            <br/>
            The app was made possible by these FOSS tools:
            <br/>- Vite
            <br/>- React
            <br/>- Material UI
            <br/>
            We hope you enjoy your stay!
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
