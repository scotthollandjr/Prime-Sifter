var primeList = [];
var number = 100;

for ( prime = 2; prime <= number; prime ++ ) {
  primeList.push(prime);
};

var sifter = function() {
for ( i = 2; i < 100; i ++ ) {
  if ( primeList[i] % i = 0 ) {
    primeList.pop(i);
  }
}
};

primeList.forEach(sifter);
