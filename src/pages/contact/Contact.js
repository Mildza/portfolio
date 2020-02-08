import React from "react";

import "./Contact.scss";
const IMAGE_PATH = process.env.PUBLIC_URL + "assets/images/";

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <a href="tel:+381605028000">
          <img src={IMAGE_PATH + "phone.png"} alt="" />
          +381605028000
        </a>
      </div>
      <div>
        <a href="viber://chat/?number=%2B381605028000">
          <img src={IMAGE_PATH + "viber.png"} alt="Milan Vukovic" />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/mildzan/">
          <img
            src={IMAGE_PATH + "facebook.png"}
            alt="Posetite nas na facebook-u"
          />
        </a>
      </div>
      <div>
        <a href="mailto:mildzan@gmail.com?Subject=From%20Portfolio">
          <img src={IMAGE_PATH + "gmail.png"} alt="Milan Vukovic" />
        </a>
      </div>
    </div>
  );
}
