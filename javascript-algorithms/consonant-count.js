function hasConsonantCount(text, target) {
  // Converter para minúsculas para facilitar
  const lowerText = text.toLowerCase();
  
  // Contador de consoantes
  let count = 0;
  
  // Vogais a serem ignoradas
  const vowels = 'aeiou';
  
  // Percorrer cada caractere
  for (let char of lowerText) {
    // Verificar se é uma letra (a-z)
    if (char >= 'a' && char <= 'z') {
      // Se não for vogal, é consoante
      if (!vowels.includes(char)) {
        count++;
      }
    }
  }
  
  // Retornar se a contagem é igual ao target
  return count === target;
}
