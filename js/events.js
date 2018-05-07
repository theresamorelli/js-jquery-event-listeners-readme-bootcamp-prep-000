//define functions here
function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').on('load', () => $('img').addClass('tasty'));
}

function pressIt() {
  $('#typing').on('keydown', (key) => {
    if (key.which === 71) alert('You have pressed the G key');
  });
}

$(document).ready(function(){

// call functions here

});
