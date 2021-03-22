import { useEffect, useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import React from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    id: 0,
    name: 'action',
    title: ''
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleSelectGenre={setSelectedGenre}></SideBar>
      <Content genre={selectedGenre}></Content>
    </div>
  )
}