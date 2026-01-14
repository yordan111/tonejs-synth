let synth;
let isPlaying = false;

// Default waveform
let currentWave = 'sine';

// Start button
document.getElementById("start").onclick = async () => {
  await Tone.start();
  console.log("Audio started");

  if (!synth) {
    // Create synth with current waveform
    synth = new Tone.Synth({ oscillator: { type: currentWave } }).toDestination();
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
  currentWave = e.target.value;

  if (synth) {
    // Re-create synth with new waveform without losing frequency or detune
    const freq = synth.oscillator.frequency.value;
    const detune = synth.detune.value;

    synth.dispose(); // remove old synth
    synth = new Tone.Synth({ oscillator: { type: currentWave } }).toDestination();
    synth.oscillator.frequency.value = freq;
    synth.detune.value = detune;

    if (isPlaying) synth.triggerAttack("C4"); // restart note if it was playing
  }
};
