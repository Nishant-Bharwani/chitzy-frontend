import React from 'react';
import Button from '../Button/Button';

const LeftSection = ({imageSrc, title, description, buttonText, imageLeft}) => {
  return (
    <div className="landing">
      <div className={`landing-container max-w-l cols d-flex align-items-center justify-content-between ${!imageLeft ? 'flex-row-reverse' : ''}`} style={{
      
      }}>
        <div className={`col left column-50 mx-4`}>
          <div className="landing-para">
            <h1 className="style-h1">
              {title}
            </h1>
            <p>
              <span>
                {description}
              </span>
              <br/>
            </p>
          </div>
          <div className="btns">
            <Button text={buttonText}/>
          </div>
        </div>
        <div className="col right column-50">
          <div className="vv-visual image vv-video">
            <div className="vv-wrapper">
              <picture className="vv-picture style-vIhjt" id="style-vIhjt">
                <img src={imageSrc} alt="Section Image" className="vv-asset vv-image style-RCXyf" id="style-RCXyf" style={{width: "100%"}} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const RightSection = ({imageSrc, title, description, buttonText}) => {
  return (
    
    <div className="landing">
  <div className="landing-container max-w-l cols" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "20px",  marginTop: "0" }}>

    <div className="col right column-50">
      <div className="vv-visual image vv-video">
        <div className="vv-wrapper">
        <picture className="vv-picture style-vIhjt" id="style-vIhjt">
              <img src={imageSrc} alt="Section Image" className="vv-asset vv-image style-RCXyf" id="style-RCXyf" style={{width: "100%"}} />
            </picture>
        </div>
      </div>
    </div>

    <div className="col left column-50">
        <div className="landing-para">
          <h1 className="style-h1">
          {title}
          </h1>
          <p>
            <span>
            {description}
            </span>
            <br/>
          </p>
      </div>
      <div className="btns">
        <Button text={buttonText}/>
      </div>
    </div>
  </div>
</div>
  );
};

export { LeftSection, RightSection };
