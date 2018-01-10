    function onButtonPush(button){
		bbj_send_event({
        'type': 'button-push',
        'control': button.id
      });
    }

    function onLostFocus(ctrl){
		bbj_send_event({
        'type': 'lost-focus',
        'control': ctrl.id
      });
		
    }
    
	function onEditModify(ctrl){
		bbj_send_event({
        'type': 'edit-modify',
        'control': ctrl.id
      });
		
    }
	
    function setText(name,text){
        var ctrl = $doc.getElementById(name);
        ctrl.value=text;
    }

    function setFocus(name){
        var ctrl = $doc.getElementById(name);
        ctrl.focus();
    }
	
    function getText(name){
        return $doc.getElementById(name).value;
    }	

    function setBackColor(name,color){
        var ctrl = $doc.getElementById(name);
        ctrl.style.backgroundColor = color;
    }    

    function setEnabled(name,enabled){
        var ctrl = $doc.getElementById(name);
        ctrl.disabled = !enabled;
    } 	
	
    function setEditable(name,enabled){
        var ctrl = $doc.getElementById(name);
        ctrl.disabled = !enabled;
		//is disabled really the correct flag?
    } 		
	
	function bbj_send_event(payload) {
	  var d = document.getElementById('eventTransporterDiv');
	  var event = new Event('click');
	  event.payload = payload;
	  d.dispatchEvent(event);
}

function bbj_post_event(ev) {
	window.basisDispatchCustomEvent(ev, ev.payload);
}