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

const PageNotFound = ({
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
    title: 'Page Not Found',
    paragraph: 'We are sorry, the page you requested could not be found'
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
            <div>
               <Image
                  src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000"
                  alt="Features split 02"
                  width={528}
                  height={396} />
            </div>

            

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Multi platform Experience
                  </div>
                <h3 className="mt-0 mb-12">
                  every platform is known
                  </h3>
                <p className="m-0">
                  Starting from game development, i moved to a web developer followed by a Mobile Application developer, After the complete understanding and requests i started to work on the server backend technologies and changed back to web Developer, BlockChain is the upcoming and growing up with the new trends, I started to work in Block chain industry and still continuing in the same.
                  </p>
                  <a href="https://play.google.com/store/apps/developer?id=Shiva+Apps" target="_blank"> PlayStore</a> <a href="https://www.npmjs.com/~shivapendem" target="_blank"> NpmJs</a>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Dapps in Crypto
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
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
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
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

PageNotFound.propTypes = propTypes;
PageNotFound.defaultProps = defaultProps;

export default PageNotFound;
