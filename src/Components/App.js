import React, { useDebugValue, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../APIs/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  /*useEffect(()=>{onTermSubmit('cars')},[]);*/
  const onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: { q: term },
    });
    setVideo(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
