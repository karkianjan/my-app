import {useState,  useRef } from "react";

function VideoPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    function handleClick(){
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if(nextIsPlaying){
            ref.current.play();
        }
        else{
            ref.current.pause();
        }
    }

    return(
<div>
    <button onClick = {handleClick}>
        {isPlaying ? 'pause' : 'play'}
    </button>

    <video width="250" ref={ref}
         onPlay={() => setIsPlaying(true)}
         onPause = {() => setIsPlaying (false)}>
    <source

        src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4" height= "500px"  width= "500px"/>
    </video>
</div>

    )

}

export default VideoPlayer;