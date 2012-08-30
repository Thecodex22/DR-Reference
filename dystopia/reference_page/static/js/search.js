$(document).ready(function(){
	//Declares hide everything function then hides everything
	function hideAll(){
		$("#nation_chunk").hide();
		$("#profession_chunk").hide();
		$("#spell_chunk").hide();
	}
	hideAll();

	//Chunk for making nations, profession, or skills hiddable or showable
	$("#nation_select").click(function(){
		hideAll();
		$("#nation_chunk").show();
	});
	$("#profession_select").click(function(){
		hideAll();
		$("#profession_chunk").show();
	});
	$("#spell_select").click(function(){
		hideAll();
		$("#spell_chunk").show();
	});



});