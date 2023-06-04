import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

function Intro() {

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  function handleVideoFunction() {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    }
    if (!playVideo) {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        typeof='video/mp4'
        Loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>

        <div className='app__video-overlay_circle flex__center'
          onClick={handleVideoFunction}
        >
          {playVideo
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />}

        </div>
      </div>
    </div>
  );
}

export default Intro;
