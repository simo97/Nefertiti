# Nefertiti
A small vanilla JS utility tool to transform &lt;select> tags in to &lt;input> with autocomplete feature based on HTML 5 &lt;datalist> tag

## Why this.
Was working on a project and looking for a simple tools in vanilla js allowing me to quickly add autocomplete feature to my select tag, as my app was mostly done but i need to add it so it will became easy to use to users. After few search i discovered <datalist> HTML 5 tag then i decided to build something based on it.
  
 ## How to use.
 Just import and init nefertiti object.
 
 ### import nefertiti code and init it
 ```js
 <script src='PATH_TO_NEFERTITI.js'></script>
 <script>
 Nefertiti.init({
  el: '.select',
 })
 </script>
 ```
 
 ### Configurations
 
 The global object to control Nefer (let's call it like that) is:
 
 ```js
 {
  el: '',
  classes: [],
  placeholderText: ''
 }
 ```
 
 * **el**: represent the css selector for the element your want to target, should be an <select>(select-one) tag otherwise nothing will happen. 
 * **classes**: a list of classes to be added to the input (the one who hold the autocomplete list), for example if you page is using bootstrap it can be ```classes: ['form-control']```.
 * **placeholderText** : define a placeholder text the default is ```Start typing...```.
 
 
 ## Author
 
 * **simo97 (@adonis__simo)**
 
 ## Contribution
 
 This is just a small tool design to be lightweigth ans simple to use, if you want to contribute please keep it in mind, every idea and optimization is welcome. Thanks
