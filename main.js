var el = document.querySelector('.deepChild');
while (el.className != 'wrapper') {
  el = el.parentNode || el.parentElement;
  console.log(el);
}
