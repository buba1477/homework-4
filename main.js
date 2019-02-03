
function catchParent(el) {   
  while (el.className != 'wrapper') {
  el = el.parentNode || el.parentElement;
      
console.log(el);
    
  }
}
 catchParent(el);

