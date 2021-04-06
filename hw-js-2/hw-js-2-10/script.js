function send() {
  let n, pcNum, out, tempOut;

  pcNum = Math.floor((Math.random() * 100) + 1);
  tempOut = document.getElementById('temp-out');
  tempOut.innerHTML = pcNum;


  n = document.getElementById('userNum').value;
  out = document.getElementById('out');

  if (n > pcNum) {
    out.innerHTML = 'pc indicated a number less than yours';
  }
  if (n < pcNum) {
    out.innerHTML = 'pc indicated a number greater than yours';
  } else if(n == pcNum) {
    out.innerHTML = 'pc guess your number';
  }

}
