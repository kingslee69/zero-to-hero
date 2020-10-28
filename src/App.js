import React, { Component } from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Section from "./components/section";
import BrandSection from "./components/brandSection";
import AboutSection from "./components/aboutSection";
import TweetSection from "./components/tweetSection";
import PaymentTile from "./components/paymentTile";
import Gap from "./components/gap";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  state = {
    title: "SOCIAL MEDIA ADS, DESIGN AND COPYWRITING",
    subTitle:
      "From Zero to Hero, A 6-Day interactive copywriting and graphics design webinar",
    benefits: [
      "BEGINNER TO INTERMEDIATE",
      "6-DAYS INTERACTIVE TRAINING",
      "NO FLUFF",
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
      "Create productive marketing contents using Canva.",
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
        <TweetSection />
        <BrandSection
          title="When will this Webinar Start and End?"
          message="It starts on Monday 9th of November, 2020 and ends in a week time. The venue for the webinar will be in a whatsApp group and you will be taken straight to it on payment completion."
        />
        <Gap />
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
