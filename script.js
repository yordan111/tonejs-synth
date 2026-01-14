let synth;

document.getElementById("start").onclick = async () => {
  await Tone.start();
  console.log("Audio started");

  synth = new Tone.Synth().toDestination();
  synth.triggerAttack("C4");
};

document.getElementById("freq").oninput = (e) => {
  if (synth) {
    synth.oscillator.frequency.value = e.target.value;
  }
};
