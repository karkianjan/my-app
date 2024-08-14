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
    src="https://www.pexels.com/video/a-person-doing-research-with-books-and-electronic-datas-5537647/"/>
    </video>
</div>

    )

}

export default VideoPlayer;