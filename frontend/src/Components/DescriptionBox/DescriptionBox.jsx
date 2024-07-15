import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          The description box also allows creators to engage with their audience
          by providing additional context or details about the video. It can be
          used to promote social media channels, merchandise, or upcoming
          events. Furthermore, it's a place where creators can credit
          collaborators, music, or any other resources used in the video. The
          description box is a versatile tool that enhances the viewer's
          experience and supports the creator's objectives.
        </p>
        <p>
          A description box in YouTube is a section located below the video
          player where the video creator can provide more information about the
          video.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
