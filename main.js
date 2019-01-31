
const el = document.querySelector('.deepChild');

function catchParent(el) {   
  while (el.className != 'parent') {
  el = el.parentNode || el.parentElement;
  console.log(el);
}
        }
catchParent(el);
