import React, { useEffect } from "react";

const TweetContainer = ({ msg }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-tweet")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer mb-4 col-6 tweet-well">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/nworiekingslee?ref_src=twsrc%5Etfw">
            @nworiekingslee
          </a>{" "}
          YouTube videos is really rewarding, his tutorials are quite easy to
          comprehend. I can say truly that I&#39;ve gone far with his YouTube
          videos. Heads up fellas, he might just be the next best thing and
          he&#39;s getting infinitely closer with each video.
          <a href="https://twitter.com/hashtag/Graphicsdesign?src=hash&amp;ref_src=twsrc%5Etfw">
            #Graphicsdesign
          </a>
          .
        </p>
        &mdash; Fredrickson® (@SenseiPhred){" "}
        <a href="https://twitter.com/SenseiPhred/status/1318773602012061696?ref_src=twsrc%5Etfw">
          October 21, 2020
        </a>
      </blockquote>
    </section>
  );
};

export default TweetContainer;
