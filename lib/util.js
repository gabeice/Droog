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

const renderFrame = function() {
  requestAnimationFrame(renderFrame);
  analyser.getByteFrequencyData(frequencyData);
}

export const analyze = () => {
  const ctx = new AudioContext();
  const audio = document.getElementById('audio');
  const audioSrc = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  audioSrc.connect(ctx.destination);
  audioSrc.connect(analyser);
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  window.ctx = ctx;
  window.frequencyData = frequencyData;
  window.average = function(numArray) {
    return numArray.reduce(function(acc, val) {
      return acc + val;
    }, 0)/1024;
  }

  function renderFrame() {
     requestAnimationFrame(renderFrame);
     analyser.getByteFrequencyData(frequencyData);
  }

  renderFrame();
};

export const showFrequency = () => {
  const bar = document.getElementById("test-bar");

  bar.style.height = (average(frequencyData)*3) + "px";
  bar.style.width = (average(frequencyData)*3) + "px";
}
