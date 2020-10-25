import React, { Component } from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Section from "./components/section";
import BrandSection from "./components/brandSection";
import AboutSection from "./components/aboutSection";
import "./App.css";

class App extends Component {
  state = {
    title: "SOCIAL MEDIA ADS, DESIGN AND COPYWRITE",
    subTitle:
      "From Marketing Design Zero to Hero - Everything you need to maximize the potential of Social Media",
    benefits: [
      "BEGINNER TO INTERMEDIATE",
      "6DAYS INTENSIVE TRAINING",
      "NO FLUFF",
      "DOWNLOADABLE",
      "ACCESS ON MOBILE/PC",
      "REAL WORLD PROJECT",
    ],
    audience: [
      "Anyone who wants to learn graphics for the first time.",
      "Startup entrepreneurs who wants to be productive in their marketing campaigns",
      "Anyone who wants to brush up his/her skill as a social media marketer.",
    ],
    target: [
      "Create productive marketing contents using canva",
      "You’ll know how to capture the attention of your audience with copy writing",
      "You’ll learn to market your skill on online platforms and start making money",
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
      </React.Fragment>
    );
  }
}

export default App;
