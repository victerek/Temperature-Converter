// Termometer Animation

function tempLoad() {
  const temp = document.getElementById('temp');
  temp.innerHTML = '&#xf2cb;';

  setTimeout(() => {
    temp.innerHTML = '&#xf2ca;';
  }, 1000);
  setTimeout(() => {
    temp.innerHTML = '&#xf2c9;';
  }, 2000);
  setTimeout(() => {
    temp.innerHTML = '&#xf2c8;';
  }, 3000);
  setTimeout(() => {
    temp.innerHTML = '&#xf2c7;';
  }, 4000);
}

tempLoad();
// Run Animation on a course of 5 seconds
setInterval(tempLoad, 5000);

// Convert Farenheit to either Kelvins or Celsius
function farToAll(e) {
  // Use Farenheit to convert
  const farenheits = e.target.value;

    // Convert to Celsius
  document.getElementById('farToCel').innerHTML = ((5 / 9) * ((farenheits * 1) - 32)).toFixed(2);

    // Convert to Kelvin
  document.getElementById('farToKel').innerHTML = ((5 / 9) * ((farenheits * 1) + 459.67)).toFixed(2);
}

// Convert Kelvin to either Farenheit or Celsius
function kelToAll(e) {
  // Use Kelvin to convert
  const kelvins = e.target.value;

  // Convert to Farenheit
  document.getElementById('kelToFar').innerHTML = (1.8 * ((kelvins * 1) - 273) + 32).toFixed(2);

  // Convert to Celsius
  document.getElementById('kelToCel').innerHTML = ((kelvins * 1) - 273.15).toFixed(2);
}

// Convert Celsius to either Farenheit or Kelvins
function celToAll(e) {
  // Use Celsius to convert
  const celsius = e.target.value;

  // Convert to Farenheit
  document.getElementById('celToFar').innerHTML = ((celsius * 1.8) + 32).toFixed(2);

  // Convert to Kelvin
  document.getElementById('celToKel').innerHTML = ((celsius * 1) + 273.15).toFixed(2);
}

// Convert numbers on input
document.getElementById('farInput').addEventListener('input', farToAll);
document.getElementById('celInput').addEventListener('input', celToAll);
document.getElementById('kelInput').addEventListener('input', kelToAll);