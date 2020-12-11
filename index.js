
//ランダムな整数を生成
let randomNumber = Math.floor(Math.rondom() * 5 + 1);



document.getElementsByClassName("image")[0].setAttribute('src', `images/${randomNumber}.jpg`);//バッククォートで囲むことに注意！！

function drawKuji() {
  let randomNumber = Math.floor(Math.random() * 5 + 1);

  document.getElementsByClassName("image")[0].setAttribute('src', `images/${randomNumber}.jpg`);
}
