
let tentatives = 5;
// padEnd rajoute le caractère donné en deuxième paramètre à la fin de la chaine sur laquelle on utilisé padEnd autant de fois que nécessaire pour atteindre la taille précisée en premier paramètre
console.log( "--".padEnd(tentatives, '*')  );
console.log( "".padEnd(tentatives, '💲')  ); /* Un émoji prend la place de 2 caractères */
console.log( "".padEnd(tentatives * 2 , '💲')  );

console.log( "--".padStart(tentatives, '*') );
console.log( "------".padStart(tentatives, '*'));