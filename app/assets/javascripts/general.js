  /*========================= load JavaScript ========================= */

$(window).load(function(){
	$("#btn-run").on('click', function(){
	    scriptJS = $("#scriptJS").val();
	    libsJS = $("#libsJS").val();
	    eval(libsJS);
	    eval(scriptJS);
	    main();
	});
});

/*========================= load JavaScript ========================= */