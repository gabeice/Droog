# Droog

### Description

Droog is an audio visualizer which supports both oscilloscope and concentric wave representation of audio, where the y axis on the oscilloscope and the wave radius on the concentric wave correspond to the audio frequency of the file being played at its current play position.

### Functionality

Users can upload audio files of their choosing or select any of a number of sample tracks stored in the project's `assets` folder. They can then play whatever file has been available and playback is accompanied by a customizable visual representation. In addition to the choice of what type of wave representation, users can select one or two colors (supports any hexadecimal color choice)--if two are chosen the wave will have a linear gradient from one to the other, either vertically in the case of the oscilloscope or radially in the case of the concentric wave.

The oscilloscope can be either static (shown all at once, with a progress bar showing playback position) or centered (in which case the progress bar is centered and the wave moves leftward over it).

### Architecture

Audio metadata will be extracted using the `waveform-data.js` npm library.
