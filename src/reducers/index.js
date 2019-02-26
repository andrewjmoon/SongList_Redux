import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Desire Lines", duration: "5:50" },
    { title: "Plains", duration: "2:19" },
    { title: "Helicopter", duration: "5:05" },
    { title: "Breaker", duration: "4:00" },
    { title: "Futurism", duration: "2:50" },
    { title: "Never Stops", duration: "3:35" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
