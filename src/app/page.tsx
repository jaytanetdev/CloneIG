import React from 'react';
import SideBar from '@/components/SideBar';
import Content from '@/components/Content';
import RecommendFriend from '@/components/RecommendFriend';


export default function Home() {
  return (
    <main>
      <div className='flex'>
        <SideBar />
        <Content />
        <RecommendFriend />
      </div>
    </main>
  );
}
