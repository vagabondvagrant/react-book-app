import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="bg-gray-800 py-4 text-white text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-3xl hover:text-blue-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl hover:text-blue-600"
          />
        </a>
        <a
          href="https://api.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-3xl hover:text-green-500"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl hover:text-pink-500"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-3xl hover:text-blue-400"
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-3xl hover:text-gray-600"
          />
        </a>
      </div>
      <p className="mt-2">&copy; 2023 Kabeer. All rights reserved.</p>
    </div>
  );
};
