var lastProfessionClicked = null;


$(document).ready(function(){
	$("#professions-select").click(function(){

		$("#prof-list").css('display', 'block');
		$("#prof-details-default").css('display', 'inline-table');

		dehighlight(lastProfessionClicked);
		$(lastProfessionClicked+ "-details").css('display', 'none');
		lastProfessionClicked = null;
	});

	$("#prof tr td").click(function(){
		if(lastProfessionClicked === null){
			$("#prof-details-default").css('display', 'none');
		}else{
			$(lastProfessionClicked).css('display', 'none');
		}

		//Dehighlight last spell
		dehighlight(lastProfessionClicked);

		//Highlight new spell
		highlight($(this));

		//Displays the details list by grabbing the id of the td element in the selection table
		var thisElement = "#"+$(this).attr("id");
		var intThisElement = thisElement.length;
		var strCutDelim = "-select";
		var intCutDelim = strCutDelim.length;
		var strCleanedSelector = thisElement.substring(0, intThisElement - intCutDelim);

		$(strCleanedSelector+"-details").css('display', 'inline-table');

		lastSpellClicked = strCleanedSelector;
	});
});