var time;

$(document).ready(function()
{
    time = $.now();
    console.log('loading massive');
    $.ajax({ url: 'data/massive.json', dataType:"text"}).done( handleDone );
}); 

function handleDone(data)
{
    console.log('done', $.now()-time);
    time = $.now();


   var json = JSON.parse(data);
   console.log('parsed', $.now()-time);
}