import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ContactSplit from '../components/sections/ContactSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const PageNotFound1 = () => {

  return (
    <>
      <ContactSplit invertMobile topDivider imageFill className="illustration-section-02" />
{/*      <Testimonial topDivider /> */ }
      <Cta split />
    </>
  );
}

export default PageNotFound1;