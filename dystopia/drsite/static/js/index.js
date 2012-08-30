var bgBlue = 'rgb(61, 63, 94)'

function highlight(element){
	$(element).css('background-color', '#FFF');
	$(element).css('color', bgBlue);
}
function dehighlight(element){
	var strFormatted = element + "-select";
	$(strFormatted).css('background-color', bgBlue);
	$(strFormatted).css('color', '#FFF');
}
$(document).ready(function(){
	var lastSpellClicked = null;
	var lastNationClicked = null;
	var lastProfessionClicked = null;
	function resetSelection(){
		lastSpellClicked = null;
		lastNationClicked = null;
		lastProfessionClicked = null;
	}
	function hideSpells(){
		var topParent = "#spell-list";
		$(topParent).hide();
		$(lastSpellClicked+"-details").hide();
		dehighlight(lastSpellClicked);
	}
	function hideProfessions(){
		var topParent = "#prof-list";
		$(topParent).hide();
		$(lastProfessionClicked+"-details").hide();
		dehighlight(lastProfessionClicked);
	}
	function hideNations(){
		var topParent = "#nation-list";
		$(topParent).hide();
		$(lastNationClicked+"-details").hide();
		dehighlight(lastNationClicked);
	}
	function showSpells(){
		hideSpells();
		$("#spell-list").show();
	}
	function showProfessions(){
		hideProfessions();
		$("#prof-list").show();
	}
	function showNation(){
		hideNations();
		$("#nation-list").show();
	}

	$("#nations-select").click(function(){
		hideSpells();
		hideProfessions();

		$("#nation-list").css('display', 'block');
		$("#nation-details-default").css('display', 'inline-table');

		dehighlight(lastNationClicked);
		$(lastNationClicked + "-details").hide();

		resetSelection();
	});

	$("#nation tr td").click(function(){
		if(lastNationClicked === null){
			$("#nation-details-default").css('display', 'none');
		}else{
			$(lastNationClicked).css('display', 'none');
		}

		//Dehighlight last spell
		dehighlight(lastNationClicked);

		//Highlight new spell
		highlight($(this));

		//Displays the details list by grabbing the id of the td element in the selection table
		var thisElement = "#"+$(this).attr("id");
		var intThisElement = thisElement.length;
		var strCutDelim = "-select";
		var intCutDelim = strCutDelim.length;
		var strCleanedSelector = thisElement.substring(0, intThisElement - intCutDelim);

		$(strCleanedSelector+"-details").css('display', 'inline-table');

		lastNationClicked = strCleanedSelector;
	});

	$("#nation-search").keyup(function(){
		var strCurrentValue = $(this).val().toLowerCase();
		var intRows = $("#nation tr").size();
		var iter = 0;


		for(iter = 0; iter < intRows; iter+=1){
			//get td
			var eleCell = $("#nation tr:eq("+iter+") td");
			var strCellText = eleCell.text().toLowerCase();

			//If the current value in the textbox is not in the td's text, hide it
			if(strCellText.lastIndexOf(strCurrentValue) == -1){
				eleCell.css('display', 'none');
			}else{ //else show it
				eleCell.css('display', 'table-cell');
			}
		}
	});

	$("#professions-select").click(function(){
		hideSpells();
		hideNations();

		$("#prof-list").css('display', 'block');
		$("#prof-details-default").css('display', 'inline-table');

		dehighlight(lastProfessionClicked);
		$(lastProfessionClicked + "-details").css('display', 'none');
		resetSelection();
	});

	$("#profs tr td").click(function(){
		if(lastProfessionClicked === null){
			$("#prof-details-default").css('display', 'none');
		}else{
			$(lastProfessionClicked+"-details").css('display', 'none');
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

		lastProfessionClicked = strCleanedSelector;
	});

	$("#prof-search").keyup(function(){
		var strCurrentValue = $(this).val().toLowerCase();
		var intRows = $("#profs tr").size();
		var iter = 0;


		for(iter = 0; iter < intRows; iter+=1){
			//get td
			var eleCell = $("#profs tr:eq("+iter+") td");
			var strCellText = eleCell.text().toLowerCase();

			//If the current value in the textbox is not in the td's text, hide it
			if(strCellText.lastIndexOf(strCurrentValue) == -1){
				eleCell.css('display', 'none');
			}else{ //else show it
				eleCell.css('display', 'table-cell');
			}
		}
	});




	$("#spells-select").click(function(){
		hideProfessions();
		hideNations();
		$("#spell-list").css('display', 'block');
		$("#spell-details-default").css('display', 'inline-table');

		//Unlighlights last selection, hides the details page to make room for default page
		dehighlight(lastSpellClicked);
		$(lastSpellClicked+"-details").css('display', 'none');
		
		resetSelection();
	});

	$("#spells tr td").click(function(){
		//if lastSpellClicked is null that means its the first click ever, so get rid of default
		if(lastSpellClicked === null){
			$("#spell-details-default").css('display', 'none');
		}else{
			$(lastSpellClicked+"-details").css('display', 'none');
		}

		//Dehighlight last spell
		dehighlight(lastSpellClicked);

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

	$("#spell-search").keyup(function(){
		var strCurrentValue = $(this).val().toLowerCase();
		var intRows = $("#spells tr").size();
		var iter = 0;


		for(iter = 0; iter < intRows; iter+=1){
			//get td
			var eleCell = $("#spells tr:eq("+iter+") td");
			var strCellText = eleCell.text().toLowerCase();

			//If the current value in the textbox is not in the td's text, hide it
			if(strCellText.lastIndexOf(strCurrentValue) == -1){
				eleCell.css('display', 'none');
			}else{ //else show it
				eleCell.css('display', 'table-cell');
			}
		}
	});
});