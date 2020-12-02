import React from "react";
import css from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faQuestion } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faGoogle,
  faPatreon,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
const footer = () => (
  <React.Fragment>
    <div className={css.Footer}>
      <div className={css.cont}>
        <label>Contact:</label>
        <ul>
          <li>
            <a href="https://www.facebook.com/WebFlix-107699117663304">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/webflix?lang=en">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/web.flix/?hl=en">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.google.com/search?q=webflix&oq=webflix&aqs=chrome..69i57j0l3j0i395j69i60l3.1064j1j7&sourceid=chrome&ie=UTF-8">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
        </ul>
      </div>
      <div className={css.cont}>
        <label>Support:</label>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faPatreon} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faPaypal} />
            </a>
          </li>
        </ul>
      </div>
      <div className={css.cont}>
        <label>Help:</label>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHandsHelping} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faQuestion} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);
export default footer;
