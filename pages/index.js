// Import library functionality
import React, {useState, useEffect} from 'react';

// Import components
import Avatar from '../components/Avatar';
import Content from '../components/Content';
import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../components/Intro';

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
        <Avatar selectedContent={selectedContent} showContent={showContent} />
        <Intro introTextSmall={introTextSmall} textOneVisible={textOneVisible} textTwoVisible={textTwoVisible} />
        <Content selectedContent={selectedContent} showContent={showContent} />
      </main>
    </>
  )
}
