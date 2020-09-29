function getrandomcolor (){
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i=0; i<6 ;i++){
    color += letters[Math.floor(Math.random()*16)];
  }

  return color;
}

document.getElementById('img1').onclick = function (){
  document.getElementById('name1').style.color = getrandomcolor();
}

document.getElementById('img2').onclick = function (){
  document.getElementById('name2').style.color = getrandomcolor();
}

document.getElementById('img3').onclick = function (){
  document.getElementById('name3').style.color = getrandomcolor();
}

document.getElementById('img4').onclick = function (){
  document.getElementById('name4').style.color = getrandomcolor();
}
