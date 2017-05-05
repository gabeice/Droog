const d3 = require('d3');

export const analyze = () => {
  const ctx = new AudioContext();
  const audio = document.getElementById('audio');
  const audioSrc = ctx.createMediaElementSource(audio);
  const analyser = ctx.createAnalyser();
  audioSrc.connect(ctx.destination);
  audioSrc.connect(analyser);
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  function renderFrame() {
     requestAnimationFrame(renderFrame);
     analyser.getByteFrequencyData(frequencyData);
  }

  renderFrame();
  return frequencyData;
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

export const showFrequencyOsc = (frequencyData) => {
  document.getElementById("test-bar").innerHTML = "";

  const tens = splitArray(frequencyData, 3).map(slice => Math.floor(average(slice)));

  d3.select("#test-bar")
    .selectAll("div")
      .data(tens.slice(0, tens.length-100))
    .enter().append("div")
      .style("height", function(d) { return (d * 2) + "px"; });
}

export const showFrequencyMid = (frequencyData) => {
  document.getElementById("test-bar").innerHTML = "";

  const tens = splitArray(frequencyData, 3).map(slice => [Math.min(...slice), Math.max(...slice)]);

  d3.select("#test-bar")
    .selectAll("div")
      .data(tens.slice(0, tens.length-100))
    .enter().append("div")
      .style("margin-bottom", function(d) { return (d[0]) + "px"; })
      .style("height", function(d) { return (d[1] + d[0]) + "px"; });
}

export const showFrequencyCircle = (frequencyData) => {
  const bar = document.getElementById("test-bar");
  const littleBar = document.getElementById("little-bar");

  bar.style.height = Math.max(...frequencyData) + "px";
  bar.style.width = Math.max(...frequencyData) + "px";

  littleBar.style.height = (average(frequencyData)*2) + "px";
  littleBar.style.width = (average(frequencyData)*2) + "px";
}
