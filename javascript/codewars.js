function digital_root(n) {

  var sNumero = n.toString();
  var sum = 0;


  for (i = 0; i < sNumero.length; i++) {
    sum += parseInt(sNumero[i]);
  }

  if (sum > 9) {
    return digital_root(sum); // missing return here
  }

  return sum;
}

console.log(digital_root(456))