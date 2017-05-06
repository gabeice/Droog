import { extractor } from '../util/metadata_util';

export const setupAudio = (songFile, audio) => {
  songFile.addEventListener("change", (e) => {
    const file = e.target.files[0]
    extractor(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      audio.src = window.URL.createObjectURL(file);
    }
    reader.readAsDataURL(file);
  });
}
