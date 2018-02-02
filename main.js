$(document).ready(function()
{
	$('.carousel').carousel({
  		interval: 5000
	})

	$('.carousel-control-next').click(function()
	{
		$('.carousel').carousel('next');
	})

	$('.carousel-control-prev').click(function()
	{
		$('.carousel').carousel('prev');
	})

	
	

	$(".btn").click(function()
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

	$(".d-block").click(function()
	{

		var id=$(this).attr("id");
		var dict =
		{
			"lannister": 229,
			"baratheon": 17,
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

			$("#housename").text("Name: " + data.name);
			$("#housewords").text("Words: " + data.words);
			$("#houseinfo").attr("num", housenumber);

			var titlestotal=" ";
			for(var i = 0; i < data.titles.length; i++)
			{
				titlestotal += data.titles[i];
				if(i<data.titles.length-1)
				{
					titlestotal += ",&nbsp;";
				}
			}

			$("#titles").text("Titles:" + data.titles);
			if(housenumber==378)
			{
				$("#houseinfo").css("background-color", '#e3dcc0'); //tan
				$("#houseinfo").css("color", '#000000'); //black
			}
			else if(housenumber==17)
			{
				$("#houseinfo").css("background-color", '#b08941');
				$("#houseinfo").css("color", '#4b4b54');

			}
			else if(housenumber==362)
			{
				$("#houseinfo").css("background-color", '#686763'); //grey
				$("#houseinfo").css("color", '#FFFFFF');
				
			}
			else if(housenumber==229)
			{
				$("#houseinfo").css("background-color", '#904041' );
				$("#houseinfo").css("color", '#c69f26');
			}
			else
			{
				$("#houseinfo").css("background-color", 'white' );
				$("#houseinfo").css("color", 'black');
			}

		}, 'json');
		}
})



