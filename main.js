$(document).ready(function()
{
	$(".button").click(function()
	{

		if($(this).attr("id") == "prev_house" && $("#houseinfo").attr("num")>1)
		{

			fetchdata($("#houseinfo").attr("num")-1);
			console.log($("#houseinfo").attr("num")-1);

		}
		else if($(this).attr("id") == "next_house" && $("#houseinfo").attr("num")<444)
		{
			console.log(Number($("#houseinfo").attr("num"))+1);
			fetchdata(Number($("#houseinfo").attr("num"))+1);
		}
	})

	$(".sigil").click(function()
	{

		var id=$(this).attr("id");
		var dict =
		{
			"lannister": 229,
			"baratheon": 15,
			"stark":362,
			"targaryen": 378
		}


		fetchdata(dict[id]);


		return false;


	})

		function fetchdata(housenumber)
		{
			var URL = "https://anapioficeandfire.com/api/houses/" + housenumber;
			$.get(URL, function(data)
		{

			$("#housename").text("Name:" + data.name);
			$("#housewords").text("Words:" + data.words);
			$("#houseinfo").attr("num", housenumber);

			var titlestotal=""
			for(var i = 0; i < data.titles.length; i++)
			{
				titlestotal += data.titles[i];
				if(i<data.titles.length-1)
				{
					titlestotal += ",&nbsp;";
				}
			}

			$("#titles").text("Titles:" + data.titles);

		}, 'json');
		}
})



