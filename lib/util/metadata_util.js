const jDataView = require("jdataview");

const updateSong = (title, artist, file) => {
  const titleField = document.getElementById("song-title");
  const artistField = document.getElementById("song-artist");

  if(title) {
    titleField.innerHTML = `"${title}"`;
  } else {
    titleField.innerHTML = "[no title information found]";
  }

  if(title) {
    artistField.innerHTML = artist;
  } else {
    artistField.innerHTML = "[no artist information found]";
  }
}

export const extractor = (file) => {
  const infoReader = new FileReader();

  infoReader.onload = function(e) {
    const view = new jDataView(this.result);
    if(view.getString(3, view.byteLength - 128) == 'TAG') {
      const title = view.getString(30, view.tell());
      const artist = view.getString(30, view.tell());
      updateSong(title, artist);
    }
  }
  infoReader.readAsArrayBuffer(file);
}
