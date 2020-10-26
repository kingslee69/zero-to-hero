import React, { useEffect } from "react";

const Tweet1 = ({msg}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-tweet")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer  col-6 tweet-well mb-4">
     
     <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Very precise and accurate in his online tutorials,{" "}
          <a href="https://twitter.com/nworiekingslee?ref_src=twsrc%5Etfw">
            @nworiekingslee
          </a>{" "}
          I learnt most basics on Corel draw designs from you,
          <br />
          Looking forward to your next YouTube class✨
        </p>
        &mdash; paulo (@CAPELTOTHEWORLD){" "}
        <a href="https://twitter.com/CAPELTOTHEWORLD/status/1318173956491386882?ref_src=twsrc%5Etfw">
          October 19, 2020
        </a>
      </blockquote>{" "}
    
    </section>
  );
};

export default Tweet1;
