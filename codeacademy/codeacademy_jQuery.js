// if page ready then close image
$(document).ready(function() {
    $('div').fadeOut(1000);
});

// make mouseenter and mouseleave like hover in css
$(document).ready(function(){
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    });
});

// hide element list on position
$(document).ready(function() {
    var $target = $('ol li:nth-child(4)');
    $target.fadeOut('fast');
});
//html
<ol>
    <li>Start with the function keyword</li>
    <li>Inputs go between ()</li>
    <li>Actions go between {}</li>
    <li>jQuery is for chumps!</li> //hide this
</ol>

// if click
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
});
//html
<div class="vanish"></div>
<div class="vanish"></div>
<div class="vanish"></div>
<div class="vanish"></div>
<br/><button>Click Me!</button>

//fadeout with id
$(document).ready(function() {
    $('button').click(function() {
        $('div#blue').fadeOut('slow');
    });
});
//html
<div id="blue"></div>
<div></div>
<div></div>
<div></div>
<br/><button>Click Me!</button>

// multi selector
$(document).ready(function(){
   $('.red, .pink').fadeTo('slow', 0); 
});
//html
<div class='red'></div>
<div></div>
<div class='pink'></div>
<div></div>

//using this on click
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});
//html
<div></div>
<div></div>
<div></div>
<div></div>

//toggle slide
$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow'); 
    }); 
});
//html
<div class="panel">
<br />
<br />
<p>Now you see me!</p>
</div>
<p class="slide"><div class="pull-me">Slide Up/Down</div></p>

// add append
$(document).ready(function(){
    $('body').append("<p>I'm a paragraph!</p>")
});

// add after target
$(document).ready(function(){
   $('div#one').after('<p>test</p>'); 
});
// html
<h2>Greetings</h2>
<div id="one">Div #1</div>
<div id="two">Div #2</div>

//toggle class
$(document).ready(function(){
    $('#text').click(function(){
       $(this).toggleClass('highlighted'); 
    });
});

//add some css
$(document).ready(function(){
    $('div').css('border-radius', '10px').height('200px').width('200px'); 
});

//add or replace html
$(document).ready(function(){
   $('p').html('jQuery magic in action!'); 
});

// add item .val
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
});
//html
<h2>To Do</h2>
<form name="checkListForm">
	<input type="text" name="checkListItem"/>
</form>
<div id="button">Add!</div>
<br/>
<div class="list"></div>
// add onclick on list that was create (so you can remove element list)
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
});

// add hover
$(document).ready(function(){
    $('div').hover(function(){
        $(this).addClass('red'); 
    });   
});

// double click
$(document).ready(function(){
    $('div').dblclick(function(){
       $('div').fadeOut('fast'); 
    });    
});

// add multi hover
$(document).ready(function(){
  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );
});

//animate
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({right: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({down: "+=10px"}, 'fast');
				break;
		}
	});
});

// animate go down
$(document).ready(function(){
    $('img').animate({top:'+=100px'},1000);
});

// animate div
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('explode');   
    }); 
});
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('bounce', {times:3}, 500);   
    }); 
});
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('slide');   
    }); 
});

//dropdown
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

//draggable content
$(document).ready(function(){
    $('#car').draggable();    
});

//resizable content
$(document).ready(function(){
   $('div').resizable(); 
});

//selectable content
$(document).ready(function(){
   $('ol').selectable(); 
});

//sortable content
$(document).ready(function(){
   $('ol').sortable(); 
});

//dropdown menu
$(document).ready(function(){
    $('#menu').accordion();
});
//html
<div id="menu">
    <h3>Section 1</h3>
    <div>
        <p>I'm the first section!</p>
    </div>
    <!--Add two more sections below!-->
    <h3>Section 2</h3>
    <div>
        <p>I'm the first section!</p>
    </div>
    <h3>Section 3</h3>
    <div>
        <p>I'm the first section!</p>
    </div>
</div>

