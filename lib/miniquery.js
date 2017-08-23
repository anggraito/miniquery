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
     e.style.display = 'block'
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
var EventDispatcher = {
 on: function(element, event, callback){
   return document.querySelectorAll(element).forEach(e => {
     e.addEventListener(event, callback)
   })
 }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
 request: function(options){
   let requested = new XMLHttpRequest()
   requested.addEventListener('load', options.success)
   requested.addEventListener('error', options.fail)
   requested.open(options.type, "http://localhost:3000")
   requested.send()
 }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 var miniquery = function(element){
   return {
     hide: function() {
       DOM.hide(element)
     },
     show: function() {
       DOM.show(element)
     }
   }
 }
 var $ = miniquery
