import React, { Component } from "react";

import Avatar from "@mui/material/Avatar";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import reactimg from "./Assets/react-icon-in-a-hexagon-vector-36587857.jpg";
import nodeimg from "./Assets/node19.avif";
import javascriptimg from "./Assets/javascript-1.svg";
import Csharp from "./Assets/c#.png";
import Dotnet from "./Assets/net.png";
import blazer from "./Assets/blazor.png";
import mui from "./Assets/mui.png";
import database from "./Assets/database.webp";
import cloud from "./Assets/cloud.jpeg";
import prototype from "./Assets/prototype.webp";
import manual from "./Assets/manual.jpeg";
import angular from "./Assets/angular.png";

import BoxDiv from "../../Components/BoxDiv/BoxDiv";

const heading = "Technologies";
const para = "We specialize in helping you build a team of expert developers.";

class Technology extends Component {
  render() {
    return (
      <Grid container>
        <BoxDiv heading={heading} para={para} />
        <Container maxWidth="lg" sx={{ mt: "3rem" }}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: { xs: "2rem", sm: "2.5rem" },
              minHeight: "10vh", // Set a minimum height to center vertically
            }}
          >
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "black" }}
            >
              Hire our top-notch team of <strong>.NET Developers</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: { xs: "2rem", sm: "2.5rem" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "var(--Black, #16205f)",
              }}
            >
              ASP.NET Development Company for Proactive Solution and Reliable
              Support
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: { xs: "2rem", sm: "2.5rem" },
              ml: { xs: "1rem", sm: "7rem" },
              mr: { xs: "1rem", sm: "7rem" },
              mt: { xs: "2rem", sm: "2.5rem" },
              mb: { xs: "2rem", sm: "2.5rem" },
              color: "var(--Black, #16205f)",
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              WebDuality is an established IT company that aims to deliver
              robust solutions by harnessing the latest web technologies. Our
              innovative and skilled team is efficient in fulfilling the unique
              requirements of clients by complying with the recent industry
              standards. We work in some major areas of technical application to
              let business develop in the digital world.
            </Typography>
          </Box>
          {/* first row card */}
          <Box
            container
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginInline: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
              ml: { sm: "2rem" },
              mr: { sm: "2rem" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* First Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                    boxShadow: "0px .5px .1px .3px",
                    color: "var(--Black, #16205f)",
                  }}
                >
                  {/* Card Content */}
                  <CardContent sx={{ color: "var(--Black, #16205f)" }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={reactimg}
                        variant="square"
                        sx={{
                          width: 66,
                          height: 60,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      React
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      React is a front-end JavaScript library that is free and
                      open-source that is used to create user interfaces using
                      components. Meta and a group of independent developers and
                      businesses manage it. Using frameworks like Next.js, React
                      may be used to create server-rendered, mobile, and
                      single-page applications.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="Node.js"
                        src={nodeimg}
                        variant="square"
                        sx={{
                          width: 66,
                          height: 60,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Node.js
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      An open-source, cross-platform server environment called
                      Node.js works with a variety of operating systems,
                      including Windows, Linux, Unix, and macOS. JavaScript code
                      can be executed outside of a web browser with Node.js, a
                      back-end JavaScript runtime environment that is powered by
                      the V8 JavaScript engine.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Third Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="javascriptimg"
                        src={javascriptimg}
                        variant="square"
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      JavaScript
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      One of the main technologies of the World Wide Web, along
                      with HTML and CSS, is the programming language JavaScript,
                      sometimes shortened to JS. JavaScript is used on the
                      client side by 98.7% of websites as of 2023 to control
                      webpage behavior, frequently integrating third-party
                      libraries
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Second row card */}
          <Box
            container
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginInline: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* First Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="C#"
                        src={Csharp}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      C#
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      C# is a contemporary general-purpose programming language
                      that may be used to accomplish a broad range of goals and
                      activities across numerous industries. Despite being
                      applicable to open source platforms, C# is mainly utilized
                      with the Windows.NET framework
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt=".net"
                        src={Dotnet}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      .NET
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      .NET is a software development framework developed by
                      Microsoft that provides a comprehensive and consistent
                      programming model for building various types of
                      applications. It supports multiple programming languages,
                      including C#, Visual Basic, and F#, allowing developers to
                      choose the language that best suits their needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Third Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="blazor"
                        src={blazer}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Blazor
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      Blazor is a web framework developed by Microsoft that
                      allows developers to build interactive web applications
                      using C# and .NET instead of relying on traditional web
                      development technologies like JavaScript, HTML, and CSS.
                      Blazor enables developers to use C# on the client-side to
                      build web applications, which was traditionally the domain
                      of JavaScript.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          {/* Third row card */}
          <Box
            container
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginInline: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* First Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="mui"
                        src={mui}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      React MUI
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      React MUI typically refers to Material-UI, which is a
                      popular React UI framework that implements Google's
                      Material Design principles. Material-UI provides a set of
                      React components that follow the Material Design
                      guidelines, offering a consistent and visually appealing
                      design language for web applications.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="database"
                        src={database}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Database
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      A database is a structured collection of data organized in
                      a way that a computer program can quickly select and
                      retrieve specific pieces of data. Databases can be used to
                      store, manage, and retrieve information
                      efficiently.Different types of databases exist, including
                      relational databases, NoSQL databases
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Third Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="cloud"
                        src={cloud}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Cloud
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      Cloud computing has become a fundamental part of the IT
                      landscape, enabling organizations to innovate, scale, and
                      collaborate more efficiently. It has transformed the way
                      businesses manage their IT resources and deliver services
                      to users.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          {/* Fourth row card */}
          <Box
            container
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginInline: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* First Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="prototype"
                        src={prototype}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Prototype Tools
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      Prototype tools are software applications or platforms
                      that facilitate the creation of interactive prototypes for
                      user interfaces and experiences. Prototyping is a crucial
                      step in the design and development process, allowing
                      designers and developers to visualize, test, and refine
                      their ideas before moving into full-scale development.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="angular"
                        src={angular}
                        sx={{
                          width: 66,
                          height: 66,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Angular
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      Angular is a popular open-source web application framework
                      developed and maintained by Google. It is a comprehensive
                      platform for building client-side applications,
                      particularly single-page applications (SPAs).Angular is
                      part of the MEAN and MERN stacks, which are popular for
                      building modern, scalable web applications.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Third Box */}
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    height: 350,
                    minWidth: 280,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "32px",
                  }}
                >
                  {/* Card Content */}
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar
                        alt="manual"
                        src={manual}
                        variant="square"
                        sx={{
                          width: 100,
                          height: 60,
                          display: "flex",
                          textAlign: "center",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Manual/Automation Testing
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "var(--Black, #16205f)",
                      }}
                    >
                      Manual API testing involves manually sending requests to
                      an application's interface and verifying the responses,
                      while automated API testing utilizes specialized software
                      tools to send requests and validate responses.Manual
                      Testing needs time when testing is needed at a large
                      scale.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    );
  }
}
export default Technology;
