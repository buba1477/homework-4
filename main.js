var el = document.querySelector('.deepChild');
while (el.className != 'parent') {
  el = el.parentNode || el.parentElement;
  console.log(el);
}

