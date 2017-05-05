const colorDist = function(pos1, pos2) {
  const xDist = Math.abs(pos1[0] - pos2[0]);
  const yDist = Math.abs(pos1[1] - pos2[1]);

  const absDist = Math.floor(Math.sqrt(xDist**2 + yDist**2));

  if(absDist >= 60) {
    return 0;
  } else {
    return 255 - Math.floor((absDist/60) * 255);
  }
}

export const toColor = function(circlePos) {
  const red = colorDist(circlePos, [60, 0]);
  const green = colorDist(circlePos, [8, 90]);
  const blue = colorDist(circlePos, [112, 90]);
  return [red, green, blue];
}
