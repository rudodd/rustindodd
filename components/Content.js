// Import library functionality
import React, { useEffect } from 'react';

// Import components
import Icon from '@mui/material/Icon';
import NextImage from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Content(props) {

  const { showContent, selectedContent } = props;

  // Preload artist images on first render
  useEffect(() => {
    ['/img/artists/ezra-foster.jpg', '/img/artists/dr-floydbeck.jpg', '/img/artists/crouch-and-foster.jpg'].forEach((fileName) => {
      const img = new Image();
      img.src = fileName;
    });
  }, [])

  return (
    <div className={`content${!showContent ? ' hidden' : ''}`}>
      <h2>I'm Rustin Dodd.</h2>
      {selectedContent == 'code' ? (
        <>
          <h3>I'm a front-end developer @ {<Link href="https://www.ibm.com"><NextImage src="/img/ibm.jpg" width="100" height="45" alt="IBM" priority /></Link>}.</h3>
          <p>I am a developer with 10+ years of experience.  I currently work for IBM where I build and maintain internal-facing applications using React, the IBM Carbon design system, and Next.js.</p>
          <h4>Let's connect:</h4>
          <div className="connect-buttons">
            <Link href="https://www.linkedin.com/in/rustindodd/" className="connect-link linkedin" >
              <Icon component={LinkedInIcon} fontSize="large" />
            </Link>
            <Link href="https://github.com/rudodd">
              <Icon component={GitHubIcon} fontSize="large" className="connect-link github" />
            </Link>
            <Link href="https://www.hackerrank.com/rustindodd" className="connect-link hackerrank">
              <p>H<span></span></p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h3>I'm a song-writer and recording artist.</h3>
          <p>Music is a through-line in my life.  I've had a love  music as long as I can remember and began to learn how to play instruments in the 5th grade.  I focus my energy on writing and recording.</p>
          <h4>My projects:</h4>
          <div className="music-projects">
            <div>
              <div className="artist-image">
                <NextImage src="/img/artists/ezra-foster.jpg" width="200" height="150" alt="Ezra Foster" />
              </div>
              <h5>Ezra Foster</h5>
              <Link href="https://www.ezrafoster.com" className="artist-button">Learn more</Link>
            </div>
            <div>
              <div className="artist-image">
                <NextImage src="/img/artists/dr-floydbeck.jpg" width="200" height="150" alt="Dr. Floydbeck" />
              </div>
              <h5>Dr. Floydbeck</h5>
              <Link href="https://www.drfloydbeck.com" className="artist-button">Learn more</Link>
            </div>
            <div>
              <div className="artist-image">
                <NextImage src="/img/artists/crouch-and-foster.jpg" width="200" height="150" alt="Crouch and Foster" />
              </div>
              <h5>Crouch and Foster</h5>
              <Link href="https://www.crouchandfoster.com" className="artist-button">Learn more</Link>
            </div>
          </div>
        </>
      )}
      
    </div>
  )
}