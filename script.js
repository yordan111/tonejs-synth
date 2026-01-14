let synth;
let isPlaying = false;

// Start button
document.getElementById("start").onclick = async () => {
  await Tone.start();
  console.log("Audio started");

  if (!synth) {
    synth = new Tone.Synth().toDestination();
  }

  if (!isPlaying) {
    synth.triggerAttack("C4");
    isPlaying = true;
  }
};

// Stop button
document.getElementById("stop").onclick = () => {
  if (synth && isPlaying) {
    synth.triggerRelease();
    isPlaying = false;
  }
};

// Frequency slider
document.getElementById("freq").oninput = (e) => {
  if (synth) {
    synth.oscillator.frequency.value = e.target.value;
  }
};

// Detune slider
document.getElementById("detune").oninput = (e) => {
  if (synth) {
    synth.detune.value = parseFloat(e.target.value);
  }
};

// Waveform selector
document.getElementById("wave").onchange = (e) => {
  if (synth) {
    synth.oscillator.type = e.target.value;
  }
};
