let synth;

document.getElementById("start").onclick = async () => {
  await Tone.start(); // Unlocks audio in the browser
  console.log("Audio started");

  if (!synth) {
    synth = new Tone.Synth().toDestination();
  }

  synth.triggerAttack("C4"); // Play note continuously
};

document.getElementById("stop").onclick = () => {
  if (synth) {
    synth.triggerRelease(); // Stop note
  }
};

document.getElementById("freq").oninput = (e) => {
  if (synth) {
    synth.oscillator.frequency.value = e.target.value; // Real-time pitch control
  }
};

