// Мой первый скрипт 

// Чек выбрана услуга или нет

function fun1 () {

var ckbox=document.getElementById('one');

  if (ckbox.checked) {
  	document.getElementById('order1').style.background = "green";
  	document.getElementById('p1').innerHTML = "ОК! Теперь определимся сколько нужно выкапать соток!";
  	document.getElementById('p2').innerHTML = "Выберите каробку передач!";
  }
  else {
  	document.getElementById('order1').style.background = "red";
  	document.getElementById('p1').innerHTML = "Пожалуйста, закажите трактор! (поставте галочку 'Заказать')";
  }
}

// input количестна соток

function fun2 () {

var UI=document.getElementById('input1').value;

document.getElementById('p2').innerHTML='Вы хотите заказать ' +UI +' соток';

if (UI < 10) {
  document.getElementById('p3').innerHTML='Всего лишь ' +UI +' соток можно и лопатой покопать!';
}
else {
  document.getElementById('p3').innerHTML='АЖ ' +UI +' сотоки! через 5 минут будем!';
  document.getElementById('order2').style.background = "green";
}

}

// radio выбор трактора

function fun3 () {

var sel=document.getElementById('mySelect').selectedIndex;
var options=document.getElementById('mySelect').options;
document.getElementById('p4').innerHTML='Выбрана ' +options[sel].text +' коробка передач, с Вас еще 100грн!';

}