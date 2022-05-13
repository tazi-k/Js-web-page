function clock(){
  var twoDigit = function(num){
    var digit;
    if(num < 10){
      digit = "0" + num;
    }else{
      digit = num;
    }

    return digit;
  }

  // 現在日時のインスタンス取得
  var now = new Date();
  
  var weeks = new Array("Sun","Mon","Thu","Wed","Thu","Fri","Sat"); 
  
  var year = now.getFullYear();
  var month = twoDigit(now.getMonth() + 1);
  var day = twoDigit(now.getDate());
  var week = weeks[now.getDay()];
  var hour = twoDigit(now.getHours());
  var minute = twoDigit(now.getMinutes());
  var second = twoDigit(now.getSeconds());

  document.getElementById("clock_time").textContent = hour + ":" + minute + ":" + second;
  document.getElementById("clock_date").textContent = year + "/" + month + "/" + day + " (" + week + ")";
}

setInterval(clock, 1000);

//以下スライドショー

var indexValue = 0;
function slideShow(){
  setTimeout(slideShow,2500);
  var x;
  const img = document.querySelectorAll("img");
  for(x=0; img.length>x; x++){
    img[x].style.display = "none";
  }
  indexValue++;
  //全ての画像を一巡したらカウントリセット
  if(indexValue > img.length){
    indexValue = 1;
  }
  //配列の最初は「0」なので「-1」、一つの画像だけblock要素にして表示
  img[indexValue - 1].style.display = "inline-block";
}
slideShow();