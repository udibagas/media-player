import { useEffect, useState } from "react";
import ControlButton from "./ControlButton";
import SongItem from "./SongItem";

const songs = [
  {
    id: 1,
    title: "Tanah Airku",
    artist: "Artist 3",
    thumbnail: "image3.jpeg",
    audio: "tanah-airku.mp3",
  },
  {
    id: 2,
    title: "Rayuan Pulau Kelapa",
    artist: "Artist 2",
    thumbnail: "image2.jpeg",
    audio: "rayuan-pulau-kelapa.aac",
  },
  {
    id: 3,
    title: "Kidung Reksa Bumi",
    artist: "Artist 1",
    thumbnail: "image1.jpeg",
    audio: "kidung-reksabumi.aac",
  },
  {
    id: 4,
    title: "Lingsir Wengi",
    artist: "Artist 2",
    thumbnail: "image2.jpeg",
    audio: "lingsir-wengi.mp3",
  },
];

const player = new Audio(songs[0].audio);

function SongList() {
  const [song, setSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    player.addEventListener("play", (e) => {
      console.log("play");
      setIsPlaying(true);
    });

    player.addEventListener("ended", (e) => {
      console.log("ended");
      setIsPlaying(false);
    });

    player.addEventListener("pause", (e) => {
      console.log("pause");
      setIsPlaying(false);
    });
  }, []);

  const changeSong = (item) => {
    setSong(item);
    player.src = item.audio;
    player.play();
  };

  const playNext = () => {
    let currentIndex = songs.findIndex((el) => el.id == song.id);
    currentIndex += 1;
    let activeSong;

    if (currentIndex == songs.length) {
      activeSong = songs[0];
    } else {
      activeSong = songs[currentIndex];
    }

    changeSong(activeSong);
  };

  const playPrev = () => {
    let currentIndex = songs.findIndex((el) => el.id == song.id);
    let activeSong;

    if (currentIndex == 0) {
      activeSong = songs.at(-1);
    } else {
      activeSong = songs[currentIndex - 1];
    }

    changeSong(activeSong);
  };

  return (
    <>
      <img src={song.thumbnail} alt="" style={{ height: "200px" }} />
      <div style={{ padding: 5, textAlign: "center", background: "#ddd" }}>
        Now Playing: {song.title} by {song.artist}
      </div>
      <ControlButton
        player={player}
        isPlaying={isPlaying}
        playNext={playNext}
        playPrev={playPrev}
      />
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {songs.map((el) => {
          return (
            <SongItem
              song={el}
              activeSong={song}
              changeSong={changeSong}
              key={el.id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default SongList;
