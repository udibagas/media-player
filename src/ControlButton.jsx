function ControlButton({ isPlaying, player, playNext, playPrev }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <button onClick={playPrev} className="control-button">
        &larr;
      </button>
      <button
        className="control-button"
        onClick={() => (isPlaying ? player.pause() : player.play())}
      >
        {isPlaying ? "||" : "|>"}
      </button>
      <button onClick={playNext} className="control-button">
        &rarr;
      </button>
    </div>
  );
}

export default ControlButton;
