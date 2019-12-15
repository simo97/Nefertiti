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
  el: '.select', // css selector for element, should be a select it's mandatory
  classes: [], // list of css class to add to the output, ex: classes: ['form-control', 'another-class']
  placeholderText: '', // a placeholder text, default is: Start typing...
 }
 ```
 
 ## Author
 
 * **simo97 (@adonis__simo)**
 
 ## Contribution
 
 This is just a small tool designed to be lightweight and simple to use, if you want to contribute please keep it in mind, every idea and optimization is welcome. Thanks
