import React, { useEffect } from "react";

const TweetContainer = ({ msg }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-tweet")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer mb-5 col-6 tweet-well">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Wow just finished checking out your content on YouTube and I would
          recommend it for anyone that wants to learn Graphics Design{" "}
          <a href="https://twitter.com/nworiekingslee?ref_src=twsrc%5Etfw">
            @nworiekingslee
          </a>{" "}
          <a href="https://twitter.com/hashtag/developers?src=hash&amp;ref_src=twsrc%5Etfw">
            #developers
          </a>
        </p>
        &mdash; Winter❄ #ENDBADGOVERANCEINNIGERIA <span role="img" arial-label="emoji">⚪</span> (@ezekwem_chris){" "}
        <a href="https://twitter.com/ezekwem_chris/status/1318222486153068546?ref_src=twsrc%5Etfw">
          October 19, 2020
        </a>
      </blockquote>
    </section>
  );
};

export default TweetContainer;
