/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
 select : function(element) {
   return document.querySelectorAll(element) //querySelectorAll: all info, []
 }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
 hide : function(element){
   return document.querySelectorAll(element).forEach(e =>{
     e.style.display = 'none'
   })
  ////delete single tag
  //return SweetSelector.select(element).style.display = 'none'
},
show : function(element){
 //return SweetSelector.select(element).style.display = 'block'
 return document.querySelectorAll(element).forEach(e =>{
   e.style.visibility = 'visible'
 })
},
removeClass : function(element, attribute){
  return document.querySelectorAll(element).forEach(e =>{
    e.classList.remove(attribute)
  })
},
addClass : function(element,attribute){
  return document.querySelectorAll(element).forEach(e=>{
    e.classList.add(attribute)
  })
}
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
