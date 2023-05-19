import React from "react";
import Button from "../../components/shared/Button/Button";
import Features from "../../components/shared/Features/Features";
import "./Landing.css";
// import Feature1 from "../shared/Features/Features";
// import Feature2 from "../shared/Features/Features";
const Landing = () => {
  return (
    <>
      <div
        className="landing-container max-w-l cols"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "20px",
        }}
      >
        <div className="col left column-50">
          <div className="landing-para">
            <h1 className="style-h1">
              Chitzy - your personal social chat platform
            </h1>
            <p>
              <span>
                Meet friends, talk with your loved ones. Enjoy the smooth real
                time messaging experience with Chitzy
              </span>
              <br />
            </p>
          </div>
          <div className="btns">
            <Button text="Get Started" />
          </div>
        </div>
        <div className="col right column-50">
          <div className="vv-visual image vv-video">
            {/* <div className="vv-wrapper">
          <video playsInline preload="auto" autoPlay loop muted className="vv-asset vv-video" >
            <source src="//sendbird.sfo3.digitaloceanspaces.com/cms/sendbird-vs-sms.mov" />
          </video>
        </div> */}
            <picture className="vv-picture style-vIhjt" id="style-vIhjt">
              <img
                src="/images/front.png "
                alt="Section Image"
                className="vv-asset vv-image style-RCXyf"
                id="style-RCXyf"
                style={{ width: "100%" }}
              />
            </picture>
          </div>
        </div>
      </div>

      <Features
        imageLeft={false}
        imageSrc="https://sendbird.imgix.net/cms/1_2022-12-14-020147_airw.jpg?auto=format,compress&crop=faces&w=1920"
        title="In-app chat experiences that users will love"
        description="An easy-to-use suite of SDKs and UI kits that help you build trust and safety with customers: Launch conversational capabilities that include moderation, rich media, translation, analytics, and more Scale to millions of users on a proven, secure, and global platform Get started quickly with elegant pre-built components and ship in days, not months"
        buttonText="Get started"
      />

      <Features
        imageLeft={true}
        imageSrc="https://sendbird.imgix.net/cms/1_2022-12-14-020147_airw.jpg?auto=format,compress&crop=faces&w=1920"
        title="In-app chat experiences that users will love"
        description="An easy-to-use suite of SDKs and UI kits that help you build trust and safety with customers: Launch conversational capabilities that include moderation, rich media, translation, analytics, and more Scale to millions of users on a proven, secure, and global platform Get started quickly with elegant pre-built components and ship in days, not months"
        buttonText="Get started"
      />
    </>
  );
};

export default Landing;
