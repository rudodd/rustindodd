// import library functionality
import React, { useEffect, useState } from 'react';

// import componenets

import Icon from '@mui/material/Icon';
import TerminalIcon from '@mui/icons-material/Terminal';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Header(props) {

  const { setContent, showContent } = props;
  const [selectedItem, setSelectedItem] = useState('code');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showContent) {
      setVisible(true);
    }
  }, [showContent])

  useEffect(() => {
    setContent(selectedItem);
  }, [selectedItem])

  return (
    <header className={!visible ? ' hidden' : ''}>
      <div className="logo">RD</div>
      <div className={`menu ${selectedItem}`}>
        <button onClick={() => setSelectedItem('code')}>
          <Icon fontSize="large" component={TerminalIcon} />
        </button>
        <button onClick={() => setSelectedItem('music')}>
          <Icon fontSize="large" component={LibraryMusicIcon} />
        </button>
      </div>
    </header>
  )
}