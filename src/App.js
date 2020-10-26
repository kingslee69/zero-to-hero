import React, { Component } from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Section from "./components/section";
import BrandSection from "./components/brandSection";
import AboutSection from "./components/aboutSection";
import PaymentTile from "./components/paymentTile";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  state = {
    title: "SOCIAL MEDIA ADS, DESIGN AND COPYWRITING",
    subTitle:
      "From Marketing Design Zero to Hero - Everything you need to maximize the potential of Social Media",
    benefits: [
      "BEGINNER TO INTERMEDIATE",
      "6DAYS INTENSIVE TRAINING",
      "NO FLUFF",
      "INTERACTIVE CLASSES",
      "DOWNLOADABLES",
      "ACCESS ON MOBILE/PC",
      "REAL WORLD PROJECT",
    ],

    audience: [
      "Anyone who wants to learn graphics design enough to create attractive ads.",
      "Startup entrepreneurs who wants to be productive in their online marketing campaigns.",
      "Anyone who wants to brush up his/her skill as a social media marketer.",
    ],
    target: [
      "Create productive marketing contents using canva.",
      "You’ll know how to capture the attention of your audience with copy writing.",
      "You’ll learn to market your skill on online platforms and start making money.",
    ],
    warrantee: [
      "2-Day Money-Back Guarantee",
      "You can ask for a refund any time during the first 2 days if you decide the course isn’t for you.",
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <HeroBanner title={this.state.title} subTitle={this.state.subTitle} />
        <AboutSection benefits={this.state.benefits} />
        <Section
          title="Who is this course for?"
          audience={this.state.audience}
        />
        <BrandSection title="No Prior Knowledge needed!" />
        <Section
          title="By the end of this course, you'll be able to…"
          audience={this.state.target}
          btn="Enroll"
        />
        <BrandSection
          title={this.state.warrantee[0]}
          message={this.state.warrantee[1]}
        />
        <PaymentTile />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
