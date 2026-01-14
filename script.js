let synth;
let isPlaying = false; // Track if a note is currently sounding

// Start button
document.getElementById("start").onclick = async () => {
  await Tone.start(); // Unlocks audio in browser
  console.log("Audio started");

  if (!synth) {
    synth = new Tone.Synth().toDestination();
  }

  if (!isPlaying) {
    synth.triggerAttack("C4"); // Start holding the note
    isPlaying = true;
  }
};

// Stop button
document.getElementById("stop").onclick = () => {
  if (synth && isPlaying) {
    synth.triggerRelease(); // Stop note
    isPlaying = false;
  }
};

// Frequency slider
document.getElementById("freq").oninput = (e) => {
  if (synth) {
    synth.oscillator.frequency.value = e.target.value; // Real-time pitch control
  }
};
