import "./SmallArticleDisplay.css";
import { useState } from "react";
import React from "react";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";

export class SmallArticleDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
// this is the component that renders the articles on the main page
  render() {
    return (
      <div className="smallarticledisplaycontainer">
        <Image src={this.props.photoUrl} style={{ height: "160px" }} />
        <span id="title">{this.props.article.title}</span>
        <br />
        <span id="subtitle">{this.props.article.subtitle}</span>
        <span onClick={() => console.log(this.props.article)}>
          {this.props.test}
        </span>
      </div>
    );
  }
}
// this function renders the image for the article
function Image({ src }) {
  const [loading, setLoading] = useState(true);

  function onload() {
    setLoading(false);
  }

  return (
    <div className="imagecontainer">
      <div
        className="center-content"
        style={{ display: loading || !src ? "" : "none" }}
      >
        <LoadingAnimation />
      </div>
      <img
        src={src}
        onLoad={onload}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          display: loading || !src ? "none" : "",
        }}
      ></img>
    </div>
  );
}
