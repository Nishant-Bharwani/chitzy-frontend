import { LeftSection, RightSection } from './Features_';

import React from 'react';

const Features = ({imageLeft, imageSrc, title, description, buttonText}) => {
  return (
    <section placement="default" className="half-block max-w-l layout-imageRight vertical-layout-centered icon-default block-layout-separateColumns snipcss-VGdnS">
      <LeftSection imageLeft={imageLeft} imageSrc={imageSrc} title={title} description={description} buttonText={buttonText}  />
    </section>
  );
};


export default Features;

{/* <section placement="default" className="half-block max-w-l layout-imageRight vertical-layout-centered icon-default block-layout-separateColumns snipcss-VGdnS">
      {isLeftSection ? (
        <LeftSection imageSrc={imageSrc} title={title} description={description} buttonText={buttonText} />
      ) : (
        <RightSection imageSrc={imageSrc} title={title} description={description} buttonText={buttonText} />
      )}
    </section> */}
