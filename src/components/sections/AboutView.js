import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}



const AboutView = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'About Me',
    paragraph: 'i am ready to help you out in all the areas available.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>


          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Steady flow in Crypto Application
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven work flow is my focus
                  </h3>
                <p className="m-0">
                  I believe only in development process running on a blockchain or peer-to-peer network of computers with key focus on user demands with the user needs, this make the end product more reliable and user friendly.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/shivaapps_about_1.jpeg')}
                  alt="Shiva Pendem"
                  width={528}
                  height={396} />
              </div>
            </div>


          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Multiple areas of work
                  </div>
                <h3 className="mt-0 mb-12">
                  Started works with Blockchain keeping market trends
                  </h3>
                <p className="m-0">
                  dApps are digital applications or programs that exist and run on a blockchain or peer-to-peer network of computers instead of a single computer. with the decentralized concepts I started to build application with the blockchain and serve as per the client requests.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Shiva Pendem"
                  width={528}
                  height={396} />
              </div>
            </div>


            



            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Consultation for your Ideas
                  </div>
                <h3 className="mt-0 mb-12">
                  Tailor your ideas
                  </h3>
                <p className="m-0">
                    We do consult you back with helping your ideas with the various modes of refinements to your business ideas to project your ideas to evolve as the best in exsiting and upcoming mearket trends.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/tailoryourideas.png')}
                  alt="Shiva Pendem"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


AboutView.propTypes = propTypes;
AboutView.defaultProps = defaultProps;

export default AboutView;
