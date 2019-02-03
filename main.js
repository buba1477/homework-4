//Сделайте обход дерева документа снизу вверх.
//
//const el = document.querySelector('.deepChild');
//const coQuEl = document.querySelector('.blockName');
//const coQuEli = document.querySelector('.parent');
//
////
////el.style.border = '4px solid black';
////     el.style.width = '800px';
////        el.style.height = '100px';            
////           el.style.marginBottom = '10px';
//
//coQuEl.style.border = '4px solid red';
//     //coQuEl.style.width = '1200px';
//        coQuEl.style.height = '50px';            
//           coQuEl.style.marginBottom = '10px';
//coQuEl.style.background = 'Yellow';
//
////coQuEli.style.border = '4px solid yellow';
//     coQuEli.style.width = '1000px';
//        coQuEli.style.height = '100px';            
//           coQuEli.style.marginBottom = '100px';
//              coQuEli.style.padding = '20px';

function catchParent(el) {   
  while (el.className != 'wrapper') {
  el = el.parentNode || el.parentElement;
      
console.log(el);
    
  }
}
 catchParent(el);

