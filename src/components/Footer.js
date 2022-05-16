import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer className='text-lg text-center font-bold'>
      <div>
        <span>Created By Thant Ko Zaw </span>
        <a
          href='https://github.com/thantko20/memory-card'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='text-xl ml-2 hover:text-rose-400 animate-bounce'
          />
        </a>
      </div>

      <div className='italic font-normal'>
        <a
          target='_blank'
          href='https://icons8.com/icon/aUZxT3Erwill/valorant'
          rel='noreferrer'
        >
          Valorant
        </a>{' '}
        icon by{' '}
        <a target='_blank' href='https://icons8.com' rel='noreferrer'>
          Icons8
        </a>
      </div>
    </footer>
  );
};

export default Footer;
