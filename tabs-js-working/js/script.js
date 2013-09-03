;var TABS = {};
TABS.FADE = {
	
	infoList : document.querySelectorAll('.info >ul > li'),
	activeSlide : 0,
	currElem : document.querySelectorAll('.info >ul > li')[0],
	cachedElem : document.querySelectorAll('.info >ul > li')[0],
	tabList : document.querySelectorAll('.tabs >ul> li > a'),

    init: function()
    {
		
		document.querySelector('body').className = 'js';
		
		that = this;
        
		//remove all info modules from dom and set their opacity to 0		
		for(i=0;i<that.infoList.length;i++){
		  document.querySelectorAll('.info >ul > li')[i].style.opacity = 0;
		  document.querySelectorAll('.info >ul > li')[i].style.display = 'none';
		}
		
		
		//put first info module back in DOM and set it's opacity to 1
		document.querySelector('.info >ul > li:first-child').style.opacity = 1;
		document.querySelector('.info >ul > li:first-child').style.display = 'block';
			 
		//add click event to all tabs
		
		for(i=0;i<document.querySelectorAll('.tabs a').length;i++){
		  document.querySelectorAll('.tabs a')[i].onclick=that.fadeContent;
		}
		/*that.forEachElm(document.querySelectorAll('.tabs a'),function(){
			console.log('this in forEachElm: '+this);
		});*/
    },
	
	forEachElm: function(elem,func){
		for(i=0;i<elem.length;i++){
			func();
		}
	},
		
	fadeContent: function(e)
	{
		e.preventDefault();
		 
		 //assign second element in string array of clicked tabs href to thisTab
		 thisTab = Number(this.getAttribute('href').split('#')[1]);
		 
		 //remove active from all tabs
		 for(i=0;i<that.infoList.length;i++){
			if ( document.querySelectorAll('.tabs >ul > li a')[i].className.match(/(?:^|\s)active(?!\S)/) ){
				that.removeclass(document.querySelectorAll('.tabs >ul > li a')[i],'active');
			}
		 }
		 
		 //add active to tab clicked
		 that.addclass(this,'active');
		
		//pass the current tab element to the animateFade method
		 that.animateFade(document.querySelectorAll('.tabs >ul > li')[thisTab - 1]); 
	},
		
	animateFade: function(elem) {
		//get slide id/number from current tab elements href attribute
		thisSlide = Number(elem.querySelector('a').getAttribute('href').split('#')[1]);
		var lastId = that.cachedElem.getAttribute('id'),
			lastElem =  document.querySelectorAll('.info >ul > li')[lastId -1];
		
		//get current slide element
		elem = document.querySelectorAll('.info >ul > li')[thisSlide - 1];
		that.cachedElem = elem;
			
		// unhide this slide 		
		elem.style.display = 'block';	
		
	  var opacityUp = 0,
	      opacityDown = 1;
      
	  // animate opacity from current slide from 0 to 1	
	  function fade(fadeElem, cachedElem) {
		opacityUp += 0.01;
		opacityDown -= 0.01;
		
		
		fadeElem.style.opacity = opacityUp.toFixed(2); 
		lastElem.style.opacity = opacityDown.toFixed(2);
	
		if (opacityUp.toFixed(2) == 1.00)  
		  {
			  clearInterval(opct);
			  lastElem.style.display = 'none';
		  }		  
	  }// end fade function	  
	
	  var opct = setInterval(function(){fade(elem,that.cachedElem);}, 10);
	},
	
	addclass : function(elm,newclass){
	  var classes = elm.className.split(' ');
	  classes.push(newclass);
	  elm.className = classes.join(' ');
	},
	
	removeclass : function(elm,deleteclass){
	  var classes = elm.className.split(' '),
	  index = classes.indexOf(deleteclass);
	  classes.splice(index, 1);
	  elm.className = classes.join(' ');
	}    
}
TABS.FADE.init(); 
