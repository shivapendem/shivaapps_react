import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
//import { toast } from "react-toastify";
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}



const ContactSplit = ({
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

  const [name, setName] = useState("test name");
  const [email, setEmail] = useState("suppor@gmail.com");
  const [message, setMessage] = useState("sample name ");

const  handleSubmit= async (event) => {
    event.preventDefault();
    console.log(name);
    fetch('https://intelligence.shivaapps.in/submitrequest/', {
        method: "POST",
        body: JSON.stringify({"name":name,"email":email,"message":message}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(

      (response) => (response.json())
        ).then((response)=> {
          console.log(response);
          console.log(response.message);
      if (response.message == 'success') {
        alert("Message Sent.");
         setName("");
         setEmail("");
         setMessage("");
         //toast.success("please unlock your TronLink wallet");
      } else if(response.message == 'fail') {
        alert("Message failed to send.");
        setName("");
        setEmail("");
        setMessage("");
        //toast.warn("please install TronLink wallet");
      }
    })
};

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
    title: 'Contact Us',
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


          

    



            <div className="split-item" >
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                <form id="contact-form" method="POST" onSubmit={handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name" className='text-xxs'>Name</label>
                        <input type="text" className="form-control" placeholder='Your Name' onKeyUp={(event) => {setName(event.target.value);}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className='text-xxs'>Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Your Email' onKeyUp={(event) => {setEmail(event.target.value);}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className='text-xxs'>Message</label>
                        <textarea className="form-control" rows="5" placeholder='Your Message / Query' onKeyUp={(event) => {setMessage(event.target.value);}}   ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
                </div>



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


ContactSplit.propTypes = propTypes;
ContactSplit.defaultProps = defaultProps;

export default ContactSplit;
