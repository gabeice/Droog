window.onload = function() {
  const ctx = new AudioContext();
  const audio = document.getElementById('audio');
  const audioSrc = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  audioSrc.connect(ctx.destination);
  audioSrc.connect(analyser);
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  window.frequencyData = frequencyData;

  function renderFrame() {
     requestAnimationFrame(renderFrame);
     analyser.getByteFrequencyData(frequencyData);
  }
  audio.play();
  renderFrame();
  
  window.average = function(numArray) {
    return numArray.reduce(function(acc, val) {
      return acc + val;
    }, 0)/1024;
  }
};
