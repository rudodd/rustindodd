// import library functionality
import React, { useState } from 'react';

// import components
import Icon from '@mui/material/Icon';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Content(props) {

  const { showContent, selectedContent } = props;
  const [storyLength, setStoryLength] = useState(null);

  return (
    <div className={`content${!showContent ? ' hidden' : ''}`}>
      <h2>I'm Rustin Dodd.</h2>
      {selectedContent == 'code' ? (
        <>
          <h3>I'm a front-end developer @ {<Link href="https://www.ibm.com"><Image src="/img/ibm.jpg" width="100" height="45" alt="IBM" priority /></Link>}.</h3>
          <p>I'm not sure what landed you here in my little corner of the internet, but I'm glad you came.  I assume you're here to learn more about me, so let's get to it...</p>
          <div className="length-selector">
            <p>Which would you prefer?</p>
            <button onClick={() => setStoryLength('x-short')} className={storyLength == 'x-short' ? 'selected' : null}>Really short version</button>
            <button onClick={() => setStoryLength('short')} className={storyLength == 'short' ? 'selected' : null}>Short version</button>
            <button onClick={() => setStoryLength('long')} className={storyLength == 'long' ? 'selected' : null}>The whole story</button>
          </div>
          {storyLength != null &&
            <>
              {storyLength == 'long' ? (
                <>
                  <p>Like most developers here in Austin, I moved here ~15 years ago to start my music career. Luckily, I've been able to support my music habit by designing and building websites for damn near the whole time, though it didn't always pay so well.</p>
                  <p>I started my "real" career designing websites at a local IT Services company because, back in the day, people hired their IT company to build their website. I eventually grew tired of how other people coded my designs (designers can be picky) and learned how to code them myself.</p>
                  <p>Working at small companies means I wore a lot of hats. I found myself taking on marketing and minor management responsibilities in addition to my design and development roles, and that's what really changed everything. I hated it. I hated marketing, I got burned out on design, and realized I just wanted to code.</p>
                  <p>Some time around 8 years ago, I decided to focus on becoming a full-time developer, only a developer, and a damn good developer. Not sure that I'm a damn good developer yet, but I'm good. I currently work for IBM on a team called Z DevOps Innovation Lab (I know, a mouthful) building internal applications using React and Next.js.</p>
                </>
              ) : storyLength == 'short' ? (
                <>
                  <p>I started my career designing and building websites at a local IT Services company, which was the first step in my journey into front-end development. I spent nearly a decade working in small companies that required me to wear various hats that limited the time I spent doing development, and candidly, it took me too long to realize that I hated it.</p>
                  <p>Some time around 8 years ago, I decided to focus solely on being a developer. I currently work for IBM on a team called Z DevOps Innovation Lab (I know, a mouthful) building internal applications using React and Next.js.</p>
                </>
              ) : (
                <p>I am a developer with 10+ years of experience.  I currently work for IBM building internal applications using React and Next.js.</p>
              )}
            </>          
          }
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
                <Image src="/img/artists/ezra-foster.jpg" width="200" height="150" alt="Ezra Foster" priority />
              </div>
              <h5>Ezra Foster</h5>
              <Link href="https://www.ezrafoster.com" className="artist-button">Learn more</Link>
            </div>
            <div>
              <div className="artist-image">
                <Image src="/img/artists/dr-floydbeck.jpg" width="200" height="150" alt="Dr. Floydbeck" priority />
              </div>
              <h5>Dr. Floydbeck</h5>
              <Link href="https://www.drfloydbeck.com" className="artist-button">Learn more</Link>
            </div>
            <div>
              <div className="artist-image">
                <Image src="/img/artists/crouch-and-foster.jpg" width="200" height="150" alt="Crouch and Foster" priority />
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