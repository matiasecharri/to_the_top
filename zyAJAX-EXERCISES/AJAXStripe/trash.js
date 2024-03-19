export default function () {
  const d = document;
  const $btmImg = d.getElementById("batman");

  let isPlaying = false;

  const ambience = file => {
    if (isPlaying) {
      return;
    }
    isPlaying = true;
    const song = new Audio(file);
    song.volume = 1;
    song.loop = true;
    song.play();
    setInterval(() => {
      $btmImg.classList.toggle("saturate");
    }, 7000);
    console.log(song);
  };

  d.addEventListener("click", event => {
    ambience("/zyAJAX-EXERCISES/AJAXStripe/batman.mp3");
  });
}
