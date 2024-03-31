// React
import React from "react";

/* ------------- React Router Dom ------------- */
// Router,Route,Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* ------------- Components ------------- */
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollUp from "../Components/ScrollUp/ScrollUp";

/* ------------- Pages ------------- */
import Home from "../Pages/Home/Home";
import Start from "../Pages/Start/Start";
import Services from "../Pages/Services/Services";
import Technology from "../Pages/Technology/Technology";
import Careers from "../Pages/Careers/Careers";
import Contact from "../Pages/Contact/Contact";

/* ---------------- Services Pages ---------------- */
import WebDevelopment from "../Pages/ServicesDropPages/WebDevelopment/WebDevelopment";
import UIUXDesign from "../Pages/ServicesDropPages/UIUXDesign/UIUXDesign";
import CloudServices from "../Pages/ServicesDropPages/CloudServices/CloudServices";
import PWADevelopment from "../Pages/ServicesDropPages/PWADevelopment/PWADevelopment";
import MobileAppDevelopment from "../Pages/ServicesDropPages/MobileAppDevelopment/MobileAppDevelopment";
import ProductDevelopment from "../Pages/ServicesDropPages/ProductDevelopment/ProductDevelopment";
import SoftwareTesting from "../Pages/ServicesDropPages/SoftwareTesting/SoftwareTesting";
import WebAPI from "../Pages/ServicesDropPages/WebAPI/WebAPI";
import Databases from "../Pages/ServicesDropPages/Databases/Databases";
import Reporting from "../Pages/ServicesDropPages/Reporting/Reporting";

/* ---------------- Technology Pages ---------------- */
import Angular from "../Pages/TechnologyDropPages/Angular/Angular";
import Blazor from "../Pages/TechnologyDropPages/Blazor/Blazor";
import CSharp from "../Pages/TechnologyDropPages/CSharp/CSharp";
import DotNet from "../Pages/TechnologyDropPages/DotNet/DotNet";
import MERN_MEAN from "../Pages/TechnologyDropPages/MEAN_MERN/MEAN_MERN";
import Node from "../Pages/TechnologyDropPages/Node/Node";
import ReactJS from "../Pages/TechnologyDropPages/ReactJS/ReactJS";
import Typescript from "../Pages/TechnologyDropPages/Typescript/Typescript";
import Vue from "../Pages/TechnologyDropPages/Vue/Vue";
import NotFound from "../Pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollUp />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start" element={<Start />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/technologies" element={<Technology />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contact" element={<Contact />} />

          {/* Services Pages */}
          <Route exact path="/web-development" element={<WebDevelopment />} />
          <Route exact path="/uiux-design" element={<UIUXDesign />} />
          <Route exact path="/cloud-services" element={<CloudServices />} />
          <Route exact path="/pwa-development" element={<PWADevelopment />} />
          <Route
            exact
            path="/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            exact
            path="/product-development"
            element={<ProductDevelopment />}
          />
          <Route exact path="/software-testing" element={<SoftwareTesting />} />
          <Route exact path="/web-api" element={<WebAPI />} />
          <Route exact path="/databases" element={<Databases />} />
          <Route exact path="/reporting" element={<Reporting />} />

          {/* Technology Pages */}
          <Route exact path="/dot-net" element={<DotNet />} />
          <Route exact path="/react" element={<ReactJS />} />
          <Route exact path="/angular" element={<Angular />} />
          <Route exact path="/vue" element={<Vue />} />
          <Route exact path="/c-sharp" element={<CSharp />} />
          <Route exact path="/blazor" element={<Blazor />} />
          <Route exact path="/mern" element={<MERN_MEAN />} />
          <Route exact path="/node" element={<Node />} />
          <Route exact path="/typescript" element={<Typescript />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
