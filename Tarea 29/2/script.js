const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

// PASO 1: forEach - Mostrar ciudades visitadas
const visitedDiv = document.getElementById('visited-cities');
cities.forEach(city => {
  const p = document.createElement('p');
  p.textContent = `¿Has visitado ${city}?`;
  visitedDiv.appendChild(p);
});

// PASO 2: filter - Ciudades con nombre > 7 caracteres
const longCities = cities.filter(city => city.length > 7);
document.getElementById('long-cities').textContent = longCities.join(', ');

// PASO 3: reduce - Formar palabra con primera letra de cada ciudad
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");
document.getElementById('city-code').textContent = word;

// PASO 4: map - Restar 5 a cada número
const smallerNums = nums.map(num => num - 5);
document.getElementById('smaller-nums').textContent = smallerNums.join(', ');

// PASO 5: some - Verificar si hay número menor que 0
const hasNegative = nums.some(num => num < 0);
document.getElementById('negative-check').textContent = hasNegative ? 'Sí ✅' : 'No ❌';
