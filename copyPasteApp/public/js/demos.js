var clipboardDemos = new Clipboard('[data-clipboard-demo]');
var script = document.createElement('script');
script.src = './js/jquery-1.11.3.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

clipboardDemos.on('success', function(e) {
    e.clearSelection();

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);


$( "#wyatt" ).attr( "src","./img/cometSuccess.ico" );

    $("#wyatt").hide("fast", function() {

        $( "#wyatt" ).attr( "src","./img/favicon.ico" );
        $("#wyatt").show("fast");

});

});

clipboardDemos.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);

    $( "#wyatt" ).attr( "src","./img/cometFail.ico" );

    $("#wyatt").hide("slow", function() {

        $( "#wyatt" ).attr( "src","./img/favicon.ico" );
        $("#wyatt").show("fast");

      });


});
