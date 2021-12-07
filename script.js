const btn = document.querySelector('button');
const submit = document.querySelector('.sub');
const con = document.querySelector('.container');
const text = document.querySelector('.text-center');
const hidden = document.querySelector('.hidden');

btn.addEventListener('click', function () {
  con.classList.add('hidden');
  text.classList.remove('hidden');
});
// // const com = function get(submit) {
// //   submit.preventDefult();
// //   var data = new data(form[0]);
// //   alert(
// //     FormData.get('#name'),
// //     FormData.get('#pass'),
// //     FormData.get('#password')
// //   );
// // };
// // console.log(alert.value);

function fn1() {
  var str = document.querySelector('#name');
  console.log('name:' + str.value);
  var str1 = document.querySelector('#pass');
  console.log('password:' + str1.value);
  var str3 = document.querySelector('#password');
  console.log('confirm password:' + str3.value);
}

// const di = document.querySelector('.show');
const name = document.querySelector('input.nu');
const pass = document.querySelector('input.num');
const pass2 = document.querySelector('input.numm');
// const password = document.querySelector('#password').value;
const show = document.querySelector('.show');

submit.addEventListener('click', function () {
  con.classList.add('hidden');
  text.classList.add('hidden');
  show.classList.remove('hidden');
  const html = `<textarea>
  User name : ${name.value}
  password : ${pass.value}
  final-password: ${pass2.value}
  </textarea>`;
  document.querySelector('div.show').textContent = html;
  console.log(html);
});

$('.sub').on('click', function () {
  // $('.container').addClass('hidden');
  // $('.show').removeClass('hidden');
  $('.show').text($('#name').val());
  $('.show').text($('#pass').val());
  $('.show').text($('#password').val());
});
