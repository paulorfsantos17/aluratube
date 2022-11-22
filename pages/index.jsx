import { Header } from "/src/components/Header/Header";
import { Menu } from "/src/components/Menu/Menu";
import { Timeline } from "/src/components/Timeline/Timeline";

import config from "../config.json";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { videoService } from "../src/services/videoService";

function HomePage(props) {
  const service = videoService();
  const [search, setSearch] = useState("");
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    service.getAllVideos()
    .then((dados) => {
      const novasPlaylist = { ...playlist };
      dados.data.forEach((video) => {
        if (!novasPlaylist[video.playlist]) {
          novasPlaylist[video.playlist] = [];
        }
        novasPlaylist[video.playlist]?.push(video);
      });
      setPlaylist(novasPlaylist);
    });
  }, []);
  console.log(playlist);
  return (
    <>
      <div>
        <Menu serach={search} setSearch={setSearch} />
        <Header />

        <Timeline playlist={playlist} searchTitle={search} />
      </div>
    </>
  );
}

export default HomePage;
