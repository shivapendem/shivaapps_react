import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://shivapendem.medium.com/" target="_blank"  rel="noopener noreferrer">Medium</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~shivapendem"  rel="noopener noreferrer">Npm Js</a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/developer?id=Shiva+Apps&hl=en&gl=US"  rel="noopener noreferrer">Play Store</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;