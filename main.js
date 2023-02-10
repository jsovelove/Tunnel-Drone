import './style.css'
import * as Tone from 'tone'


const vol = new Tone.Volume(-5);


const osc = new Tone.Oscillator(523.25, "sawtooth");

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";

});


document.getElementById("start").addEventListener("click", () => {
  Tone.start();
  osc.start();
});

document.getElementById("stop").addEventListener("click", () => {
  osc.stop();
});

let slider = document.querySelector(".vol_slider input")
slider.addEventListener('input',function(){
  var InputValue = slider.value
  vol.volume.value = InputValue
  
});

osc.chain(vol, Tone.Destination);

document.getElementById("sine").addEventListener("click", () => {
  osc.type = "sine"
});
document.getElementById("square").addEventListener("click", () => {
  osc.type = "square"
});
document.getElementById("saw").addEventListener("click", () => {
  osc.type = "sawtooth"
});

let slider2 = document.getElementById("slider2")
slider2.addEventListener('input',function(){
  var InputValue2 = slider2.value
  osc.frequency.value = InputValue2
  
});

document.getElementById("C").addEventListener("click", () => {
  slider2.value = 523.25;
  osc.frequency.value = slider2.value

});
document.getElementById("Cs").addEventListener("click", () => {
  slider2.value = 554.37;
  osc.frequency.value = slider2.value
});
document.getElementById("D").addEventListener("click", () => {
  slider2.value = 587.33;
  osc.frequency.value = slider2.value
});
document.getElementById("Ds").addEventListener("click", () => {
  slider2.value = 622.25;
  osc.frequency.value = slider2.value
});
document.getElementById("E").addEventListener("click", () => {
  slider2.value = 659.25;
  osc.frequency.value = slider2.value
});
document.getElementById("F").addEventListener("click", () => {
  slider2.value = 698.46;
  osc.frequency.value = slider2.value
});
document.getElementById("Fs").addEventListener("click", () => {
  slider2.value = 739.99;
  osc.frequency.value = slider2.value
});
document.getElementById("G").addEventListener("click", () => {
  slider2.value = 783.99;
  osc.frequency.value = slider2.value
});
document.getElementById("Gs").addEventListener("click", () => {
  slider2.value = 830.61;
  osc.frequency.value = slider2.value
});
document.getElementById("A").addEventListener("click", () => {
  slider2.value = 880.00;
  osc.frequency.value = slider2.value
});
document.getElementById("As").addEventListener("click", () => {
  slider2.value = 932.33;
  osc.frequency.value = slider2.value
});
document.getElementById("B").addEventListener("click", () => {
  slider2.value = 987.77;
  osc.frequency.value = slider2.value
});