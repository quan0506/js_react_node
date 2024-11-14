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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsum
          quasi iure nemo voluptatibus, aliquam excepturi eum dolores beatae
          incidunt nihil numquam voluptates! Ex, placeat unde aperiam vel velit
          dolores?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          nesciunt reiciendis amet praesentium soluta mollitia eius, in labore
          nisi adipisci illum. Vitae corrupti possimus numquam iusto culpa eos
          ab cum?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
