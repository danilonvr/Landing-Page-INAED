import React from 'react';

const YouTubeVideo = ({ id }) => (
  <div className="max-w-md max-h-64 overflow-hidden rounded-lg">
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      className="object-cover w-full h-full md:h-48 lg:h-64"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const VideoGrid = () => (
  <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mb-20">
    <div className='md:flex md:justify-center lg:block'>
    <YouTubeVideo id="8lxBi8Sywj0" />
    </div>
    <div className='md:flex md:justify-center lg:block'>
    <YouTubeVideo id="KZIztiHsbUs" />
    </div>
    <div className='md:flex md:justify-center lg:block'>
    <YouTubeVideo id="u8AgFEW70fg" />
    </div>
    <div className="md:flex md:justify-center lg:block">
    <YouTubeVideo id="IhpCv7g2wz0"/>
    </div>
    <div className="md:flex md:justify-center lg:block mb-10">
    <YouTubeVideo id="ye-ehbVt00E"/>
    </div>
    <div className='md:flex md:justify-center lg:block'>
    <YouTubeVideo id="NywteBw1P7M" />
    </div>
   
   
  </div>
);

export default VideoGrid;
