
function changeProgress(id)
{
	switch(id)
	{
		case 1:
			hide();
			document.getElementById('startLink').className = "list-group-item active";
			break;
		case 2:
			hide();
			document.getElementById('customizeLink').className = "list-group-item active";
			break;
		case 3:
			hide();
			document.getElementById('buyLink').className = "list-group-item active";
			break;
	}
}

function hide()
{
	document.getElementById('startLink').className = "list-group-item";
	document.getElementById('customizeLink').className = "list-group-item ";
	document.getElementById('buyLink').className = "list-group-item";

}