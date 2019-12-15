var Nefertiti = {
        init: function(o = {selector : '.select'}){
            
            if (!o.hasOwnProperty('el')){
                o.el = '.select';
            }
            class_name = o.hasOwnProperty('classes') ? o.classes : 'nefertiti';
            var selects = document.querySelectorAll(o.el);
            selects.forEach(function(select){
                select.style.display = 'none';
                _name = select.getAttribute('name');
                _list_id = _name + '_id'
                
                select_parent = select.parentElement;
                // create element and list
                var contentElement = document.createElement('input');
                var dataListElement = document.createElement('datalist');
                dataListElement.setAttribute('id', _list_id)
                if (o.hasOwnProperty('classes') && 
                    o.classes instanceof Array && 
                    o.classes.length !== 0
                ){
                    o.classes.forEach(function(cls){
                        contentElement.classList.add(cls);
                    });
                }

                contentElement.setAttribute('placeholder', o.hasOwnProperty('placeholderText')? o.placeholderText : 'Start typing')
                //contentElement.setAttribute('name', _name);
                contentElement.setAttribute('type', 'text');
                contentElement.setAttribute('list', _list_id)
                l = select.options;
                _kv_object = {}
                for(i = 0; i<l.length; i++){
                    var option = document.createElement('option');
                    option.value = l[i].label;
                    option.innerText = l[i].value; 
                    dataListElement.appendChild(option)
                    // build the key_value_object

                    _kv_object[l[i].label] = i; // define indexes here
                    //_kv_object[]
                }
                select_parent.appendChild(dataListElement);
                select_parent.appendChild(contentElement);

                // add event to handle change 
                contentElement.addEventListener('change', function(e){
                    // on change let set the current value to the select tag
                    
                    select.selectedIndex = _kv_object[e.target.value]; // retrieve indexez
                })
            });
        }
    }
