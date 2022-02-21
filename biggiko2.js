// 1 блок
let linkMore = document.querySelector('a.b1-main-brand-more-info');
console.log(linkMore);
let form = document.querySelector('div.foother');
console.log(form);
let b=document.querySelector('div.b1');
console.log(b);

linkMore.onclick = function () {
  form.style.display = 'flex';
  form.style.marginBottom='15px';
  b.style.marginBottom='0px';
};
form.onclick=function(){
    form.style.display = 'none';
    b.style.marginBottom='15px';
};
// 2 блок
let linkMore2 = document.querySelector('a.b1-main-brand-more-info2');
let form2 = document.querySelector('div.foother2');
let b2=document.querySelector('div.b2');

linkMore2.onclick = function () {
  form2.style.display = 'flex';
  form2.style.marginBottom='15px';
  b2.style.marginBottom='0px';
};
form2.onclick=function(){
    form2.style.display = 'none';
    b2.style.marginBottom='15px';
};
// 3 блок
let linkMore3 = document.querySelector('a.b1-main-brand-more-info3');
let form3 = document.querySelector('div.foother3');
let b3=document.querySelector('div.b3');

linkMore3.onclick = function () {
  form3.style.display = 'flex';
  form3.style.marginBottom='15px';
  b3.style.marginBottom='0px';
};
form3.onclick=function(){
    form3.style.display = 'none';
    b3.style.marginBottom='15px';
};