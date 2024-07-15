import logo from "./logo.svg";
import "./App.css";
import Reddy from "./images/image.JPG";
import audio1 from "./audio/mi.mp3";
import video1 from "./video/video.mp4";

function App() {
  return (
    <div className="App">
      <h1>Usage of images in three ways in React </h1>
      <p>
        1.Internet - Just by copying the images address
        <br />
        <div className="pic">
        <img src="https://imgs.search.brave.com/abZm-f3CqLImUDJWYggrKDjhpSDsq3bt9uEjNGxzjU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/MDk2Njg4MDg5NTUt/NDQwZmFkM2FmOTcy/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSFpoYkd4/bGVYTjhaVzU4TUh4/OE1IeDhmREE9" ></img>
      </div>
        2.local-We can use local images in Two ways --a)Public  b) src
        <br /> a).PUBLIC -Create the folder in images under Public folder
        <div className="pic">
          <img src="./images/img.JPG" ></img>
        </div>
        <br />
         b).SRC -Create the folder in Src we need write in { }- because it Js to make it understand thats it is js we will flower  Brackets
        <div className="pic">
          <img src= {Reddy} ></img>
        </div>
      </p>
      <hr />
      <div>
        <h1>Usage of audio in three ways in React </h1>
        <p>1.Internet - Just by copying the audio address</p>
          <br />
          <div>
          <audio src="https://www.dropbox.com/s/ja5r48ewjoof2rg/0139.%20Picnic%20-%20AShamaluevMusic.mp3?dl=1" controls></audio>
        </div><br />
        <h1> 2.local-We can use local audio in Two ways --a)Public  b) src
        <br /> a).PUBLIC -Create the folder in audio under Public folder </h1>
        <div>
          <audio src="./audio/mi.mp3" controls></audio>
        </div>
        <div>
          <h1>
          b).SRC -Create the folder in Src we need write in { }- because it Js to make it understand thats it is js we will flower  Brackets
          </h1>
          <div>
            <audio src={audio1} controls></audio>
          </div>
        </div>
      </div>
      <hr />
     <div>
      <p>1.Internet - Just by copying the video address</p>
      <div className="videos"> 
        <video src="https://youtu.be/aW3d7ydGXvs"controls></video>
      </div>
      <p> 2.local-We can use local video in Two ways --a)Public  b) src
      <br /> a).PUBLIC -Create the folder in video under Public folder </p>
      <div className="videos">
        <video src="/video/video.mp4"controls></video>
      </div>
      <p>b).SRC -Create the folder in Src we need write in { }- because it Js to make it understand thats it is js we will flower  Brackets      </p>
      <div className="videos">
        <video src={video1}controls></video>
      </div>
     </div>
    </div>
    
  );
}

export default App;
