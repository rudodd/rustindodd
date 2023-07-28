// import library functionality
import React, {useState, useEffect} from 'react';

// import components
import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {

  const [textOneVisible, setTextOneVisible] = useState(false);
  const [textTwoVisible, setTextTwoVisible] = useState(false);
  const [introTextSmall, setIntroTextSmall] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedContent, setSelectedContent] = useState('code');

  useEffect(() => {
    setTimeout(() => {
      setTextOneVisible(true);
    }, 500)
    setTimeout(() => {
      setTextTwoVisible(true);
    }, 1500)
    setTimeout(() => {
      setIntroTextSmall(true);
    }, 3000)
    setTimeout(() => {
      setShowContent(true);
    }, 3500)
  }, [])

  return (
    <>
      <Head>
        <title>Rustin Dodd - Austin, Texas based Front-End Developer nd Musician</title>
      </Head>
      <Header showContent={showContent} setContent={setSelectedContent} />
      <main>
        <div className={`avatar${!showContent ? ' hidden' : ''}`}>
          <Image src="/img/rustin-dodd.jpg" height="200" width="200" alt="Rustin Dodd" priority className={selectedContent != 'code' ? 'hidden' : ''} />
          <Image src="/img/ezra-foster.jpg" height="200" width="200" alt="Ezra Foster" className={selectedContent != 'music' ? 'hidden' : ''} />
        </div>
        <div className={`intro${introTextSmall ? ' small' : ''}`}>
          <h1><span className={!textOneVisible ? 'hidden' : '' }>Well, </span><span className={!textTwoVisible ? 'hidden' : '' }>hello there.</span></h1>
        </div>
      </main>
    </>
  )
}
