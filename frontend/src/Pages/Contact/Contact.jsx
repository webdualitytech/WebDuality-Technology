import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";
import { Button, Container, Grid, TextField, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
// Phone Icon
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

import BoxDiv from "../../Components/BoxDiv/BoxDiv";

const Contact = () => {
  const heading = "Contact";
  const para =
    "We specialize in helping you build a team of expert developers.";

  return (
    <>
      <BoxDiv heading={heading} para={para} />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <div style={{ maxWidth: "100%", margin: "auto" }}>
          <Grid container spacing={2}>
            {/* First Grid */}
            <Grid item xs={12} md={6} lg={6}>
              <Card
                key="india-office-1"
                sx={{
                  flexDirection: "row",
                  margin: "0",
                  backgroundColor: "#f0f0f5",
                }}
              >
                <CardContent>
                  <Typography variant="h6">India Office</Typography>
                  <Typography>Delta, ithum Tower,</Typography>
                  <Typography> Industrial Area,</Typography>
                  <Typography>Greater Noida - 121308</Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                  >
                    <EmailIcon sx={{ color: "green" }} aria-label="Email" />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      hr@webduality.com
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <PhoneEnabledIcon
                      sx={{ color: "blue" }}
                      aria-label="Email"
                    />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      +91 93581 74038
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <PhoneEnabledIcon
                      sx={{ color: "darkviolet" }}
                      aria-label="Email"
                    />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      +91 85450 93162
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Second Grid */}
            <Grid item xs={12} md={6} lg={6}>
              <Card
                key="india-office-2"
                sx={{
                  flexDirection: "row",
                  margin: "0",
                  backgroundColor: "#f0f0f5",
                }}
              >
                <CardContent>
                  <Typography variant="h6">India Office</Typography>
                  <Typography>Sco 63, Sector 12-A,</Typography>
                  <Typography> Panchkula, </Typography>
                  <Typography>Haryana 134112</Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                  >
                    <EmailIcon sx={{ color: "green" }} aria-label="Email" />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      contact.india@webduality.com
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <PhoneEnabledIcon
                      sx={{ color: "blue" }}
                      aria-label="Email"
                    />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      +91 8910624634
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <PhoneEnabledIcon
                      sx={{ color: "darkviolet" }}
                      aria-label="Email"
                    />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      +91 7044975154
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Contact;
