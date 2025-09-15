document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
  let temp = parseFloat(document.getElementById('tempInput').value);
  let unit = document.getElementById('unitSelect').value;
  let resultDiv = document.getElementById('result');

  if (isNaN(temp)) {
    resultDiv.textContent = "⚠ Please enter a valid number!";
    resultDiv.style.color = "red";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } 
  else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } 
  else if (unit === "kelvin") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  resultDiv.style.color = "#333";
  resultDiv.innerHTML = `
    🌡 Converted Values: <br>
    ${celsius.toFixed(2)} °C | 
    ${fahrenheit.toFixed(2)} °F | 
    ${kelvin.toFixed(2)} K
  `;
}
