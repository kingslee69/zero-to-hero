import React, { useEffect } from "react";

const TweetContainer = ({msg}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-tweet")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer  col-6 tweet-well">
     
     <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/nworiekingslee?ref_src=twsrc%5Etfw">@Nworiekingslee</a> Kingsley a wonderful graphics designer and a great teacher</p>&mdash; Sirvikh (@sirvikh) <a href="https://twitter.com/sirvikh/status/1318225637170176000?ref_src=twsrc%5Etfw">October 19, 2020</a></blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </section>
  );
};

export default TweetContainer;
