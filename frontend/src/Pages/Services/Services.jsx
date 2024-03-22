import React, { Component } from "react";
import "./Services.css";

import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import outsourcing from "./Assets/outsourcing.png";
import link from "./Assets/link.png";
import management from "./Assets/management.png";
import shield from "./Assets/shield.png";
import BoxDiv from "../../Components/BoxDiv/BoxDiv";

const heading = "Our Services";
const para = "We specialize in helping you build a team of expert developers.";

class Services extends Component {
  render() {
    return (
      <Grid>
        <BoxDiv heading={heading} para={para} />
        {/* <Container maxWidth="sm" sx={{mt:'3rem'}}>
                      
              </Container> */}
        <Container maxWidth="lg" sx={{ mt: "3rem" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4" fontWeight={"bold"} color={"#16205F"}>
              Hire Permanent and Remote<br></br> Developers
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color={"#16205F"}>
              From full-time remote engineering teams to hourly contractors,
              <br></br> work with remote devs as needed
            </Typography>
          </Box>
          <Box sx={{ mt: "2rem" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { sm: "column", md: "row" },
                }}
              >
                <Avatar
                  src={link}
                  alt="dsj"
                  variant="rounded"
                  sx={{
                    backgroundImage:
                      "linear-gradient(90deg, #30BCC9 0%, #313968 100%)",
                    boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.06)",
                    width: "66px",
                    height: "66px",
                  }}
                />
                <Box
                  sx={{
                    marginLeft: { sm: ".5rem", md: "1rem" },
                    marginTop: { sm: "1rem", md: 0 },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    color={"#16205F"}
                  >
                    Dedicated Teams
                  </Typography>
                  <Typography variant="body1" color={"#16205F"}>
                    Building an extended team with Courtney is just like opening
                    your own remote development center, but without the hassle.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { sm: "column", md: "row" },
                }}
              >
                <Avatar
                  src={management}
                  alt="dsj"
                  variant="rounded"
                  sx={{
                    backgroundImage:
                      "linear-gradient(90deg, #30BCC9 0%, #313968 100%)",
                    boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.06)",
                    width: "66px",
                    height: "66px",
                  }}
                />
                <Box
                  sx={{
                    marginLeft: { sm: ".5rem", md: "1rem" },
                    marginTop: { sm: "1rem", md: 0 },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    color={"#16205F"}
                  >
                    Staff Augmentation
                  </Typography>
                  <Typography variant="body1" color={"#16205F"}>
                    IT Staff Augmentation is a service designed to add extra
                    talent to your team on an on-demand basis. This allows
                    businesses to immediately find the right fit for
                    hard-to-fill or temporary positions, which boosts the
                    scalability and efficiency of project development.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: "2rem", mb: "2rem" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { sm: "column", md: "row" },
                }}
              >
                <Avatar
                  src={outsourcing}
                  alt="dsj"
                  variant="rounded"
                  sx={{
                    backgroundImage:
                      "linear-gradient(90deg, #30BCC9 0%, #313968 100%)",
                    boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.06)",
                    width: "66px",
                    height: "66px",
                  }}
                />
                <Box
                  sx={{
                    marginLeft: { sm: ".5rem", md: "1rem" },
                    marginTop: { sm: "1rem", md: 0 },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    color={"#16205F"}
                  >
                    Software Outsourcing
                  </Typography>
                  <Typography variant="body1" color={"#16205F"}>
                    Today, organizations all over the world deal with software
                    outsourcing companies to have access to experienced software
                    engineers with a variety of tech expertise ranging from user
                    experience design to blockchain consulting.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { sm: "column", md: "row" },
                }}
              >
                <Avatar
                  src={shield}
                  alt="dsj"
                  variant="rounded"
                  sx={{
                    backgroundImage:
                      "linear-gradient(90deg, #30BCC9 0%, #313968 100%)",
                    boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.06)",
                    width: "66px",
                    height: "66px",
                  }}
                />
                <Box
                  sx={{
                    marginLeft: { sm: ".5rem", md: "1rem" },
                    marginTop: { sm: "1rem", md: 0 },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    color={"#16205F"}
                  >
                    Remote Office
                  </Typography>
                  <Typography variant="body1" color={"#16205F"}>
                    Courtney is a trustworthy partner that can help you open
                    your own remote development center and grow your business
                    from Sri Lanka and the United Kingdom.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    );
  }
}

export default Services;
