const d3 = require('d3');

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

  function renderFrame() {
     requestAnimationFrame(renderFrame);
     analyser.getByteFrequencyData(frequencyData);
  }

  renderFrame();
};

const average = function(numArray) {
  return numArray.reduce(function(acc, val) {
    return acc + val;
  }, 0)/numArray.length;
}

const splitArray = (array, n) => {
  let result = [];
  for(let i=0; i<array.length; i += n) {
    result.push(array.slice(i, i+n));
  }
  return result;
}

export const showFrequencyOsc = () => {
  document.getElementById("test-bar").innerHTML = "";

  const tens = splitArray(frequencyData, 5).map(slice => Math.floor(average(slice)));

  d3.select("#test-bar")
    .selectAll("div")
      .data(tens)
    .enter().append("div")
      .style("height", function(d) { return (d * 2) + "px"; });
}

export const showFrequencyMid = () => {
  document.getElementById("test-bar").innerHTML = "";

  const tens = splitArray(frequencyData, 5).map(slice => [Math.min(...slice), Math.max(...slice)]);

  d3.select("#test-bar")
    .selectAll("div")
      .data(tens)
    .enter().append("div")
      .style("margin-bottom", function(d) { return (d[0]) + "px"; })
      .style("height", function(d) { return (d[1] + d[0]) + "px"; });
}

export const showFrequencyCircle = () => {
  const bar = document.getElementById("test-bar");

  bar.style.height = (average(frequencyData)*3) + "px";
  bar.style.width = (average(frequencyData)*3) + "px";
}
