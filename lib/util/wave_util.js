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

const uniq = function(array) {
  let result = [];
  array.forEach(el => {
    if(!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
}

const innermostElement = function(el) {
  if(el.lastChild) {
    return innermostElement(el.lastChild);
  } else {
    return el;
  }
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
  const outerBar = document.getElementById("test-bar");
  outerBar.innerHTML = "";
  const freqs = uniq(frequencyData).sort((a,b) => b - a);

  freqs.forEach(freq => {
    const circle = document.createElement("section");
    circle.className = "little-bar";
    circle.style.height = (freq*2) + "px";
    circle.style.width = (freq*2) + "px";

    innermostElement(outerBar).appendChild(circle);
  });
}
