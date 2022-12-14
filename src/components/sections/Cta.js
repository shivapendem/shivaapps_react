import React, { useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

const [subscribeEmail, setSubscribeEmail] = useState("");


const  handleSubscribe= async (event) => {
    event.preventDefault();
    //console.log(name);
    fetch('https://intelligence.shivaapps.in/subscribeusers/', {
        method: "POST",
        body: JSON.stringify({"email":subscribeEmail}),
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
         setSubscribeEmail("");
      } else if(response.message == 'fail') {
        alert("Message failed to send.");
        setSubscribeEmail("");
      }
    })
};

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Intrested in updates and publications, subscribe to the email
              </h3>
          </div>
          <div className="cta-action">
          <form id="contact-form" method="POST" onSubmit={handleSubscribe.bind(this)}>
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email"  value={subscribeEmail} onChange={(event) => {setSubscribeEmail(event.target.value);}}>
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" onSubmit={handleSubscribe.bind(this)}>
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            </form> 
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;