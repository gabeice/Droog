# Droog

[live](http://gabrielice.com/Droog/index.html)

### Description

Droog is an audio visualizer which supports both oscilloscope and concentric wave representation of audio, where the y axis on the oscilloscope and the wave radius on the concentric wave correspond to the audio frequency of the file being played at its current play position.

### Functionality

Users can upload audio files of their choosing or a sample tracks stored in the project's `assets` folder. They can then play whatever file has been available and playback is accompanied by a customizable visual representation. In addition to the choice of what type of wave representation, users can adjust the two colors (supports any hexadecimal color choice) and the wave will have a linear gradient from one to the other.

If the user chooses to upload their own file, the title and artist are extracted from the file's id3 tag (if available) and displayed.

### Architecture

Audio frequency data is extracted using the native [web audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).
