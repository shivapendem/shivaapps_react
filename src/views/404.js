import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ContactSplit from '../components/sections/ContactSplit';
import PageNotFound from '../components/sections/PageNotFound';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Page404 = () => {

  return (
    <>
      <PageNotFound invertMobile topDivider imageFill className="illustration-section-02" />
{/*      <Testimonial topDivider /> */ }
      <Cta split />
    </>
  );
}

export default Page404;