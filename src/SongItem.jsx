function SongItem({ song, activeSong, changeSong }) {
  return (
    <li
      style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
      className={song.id == activeSong.id ? "active" : ""}
      onClick={() => changeSong(song)}
    >
      {song.title} - {song.artist}
    </li>
  );
}

export default SongItem;
