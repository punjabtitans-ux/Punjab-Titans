import React from 'react';
import Featured from '../Components/Pagecomponent/Featured';
import Sponsors from '../Components/Pagecomponent/Sponsors';
import VideoGallery from '../Components/Pagecomponent/VideoGallery';

const page = () => {
  return (
    <div>
      <VideoGallery />
      <Featured />
      <div className="pb-16">
        <Sponsors />
      </div>
    </div>
  )
}

export default page
