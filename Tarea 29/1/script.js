const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// PASO 1: Comprobar si hay palabras con menos de 6 caracteres usando some()
const hasShortWords = words.some((word) => {
  return word.length < 6;
});
document.getElementById('some-check').textContent = `¿Hay palabras con menos de 6 caracteres? ${hasShortWords}`;

// PASO 2: Filtrar palabras con más de 5 caracteres
const interestingWords = words.filter((word) => word.length > 5);
document.getElementById('filtered-words').textContent = `Palabras con más de 5 caracteres: ${interestingWords.join(', ')}`;

// PASO 3: Verificar si todas las palabras filtradas tienen más de 5 caracteres
const allInteresting = interestingWords.every((word) => word.length > 5);
document.getElementById('every-check').textContent = `¿Todas las palabras en 'interestingWords' tienen más de 5 caracteres? ${allInteresting}`;
