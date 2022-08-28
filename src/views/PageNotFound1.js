import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import pageNotFound from '../components/sections/pagenotfound';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const PageNotFound = () => {

  return (
    <>
      <pageNotFound invertMobile topDivider imageFill className="illustration-section-02" />
{/*      <Testimonial topDivider /> */ }
      <Cta split />
    </>
  );
}

export default PageNotFound;