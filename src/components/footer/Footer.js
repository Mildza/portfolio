import React from "react";

import "./Footer.scss";
const IMAGE_PATH = process.env.PUBLIC_URL + "assets/images/";

export default function Footer() {
  return (
    <div className="my-footer">
      <div>
        <a href="tel:+381605028000">
          <img src={IMAGE_PATH + "phone.png"} alt="" />
        </a>
      </div>
      <div>
        <a href="mailto:mildzan@gmail.com?Subject=From%20Milton-Soft">
          <img src={IMAGE_PATH + "gmail.png"} alt="Milan Vukovic" />
        </a>
      </div>
      <div>
        <a href="viber://chat/?number=%2B381605028000">
          <img src={IMAGE_PATH + "viber.png"} alt="Milan Vukovic" />
        </a>
      </div>
      <div>
        <a href="https://github.com/Mildza">
          <img src={IMAGE_PATH + "github2.png"} alt="Milan Vukovic" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/milan-vukovic-7ab84a70/">
          <img src={IMAGE_PATH + "linkedin.png"} alt="Milan Vukovic" />
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
    </div>
  );
}
