document.getElementsByClassName("download_button")[0].style.display ="none";
document.getElementsByClassName("text")[0].style.display ="none";
//ランダムな整数を生成
let randomNumber = Math.floor(Math.rondom() * 5 + 1);


function drawKuji() {

  setTimeout("shuffle_box1()",1000);
  setTimeout("shuffle_box2()",1000);
  let randomNumber = Math.floor(Math.random() * 5 + 1);


  document.getElementsByClassName("image")[0].setAttribute('src', `images/${randomNumber}.jpg`);
  document.getElementsByClassName("download")[0].setAttribute('href', `images/${randomNumber}.jpg`);
  document.getElementsByClassName("button")[0].setAttribute('value',`もう一度引く`);
  document.getElementsByClassName("download_button")[0].style.display ="block";
  document.getElementsByClassName("text")[0].style.display ="block";
}
