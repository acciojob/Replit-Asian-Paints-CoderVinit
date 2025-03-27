//your JS code here. If required.

document.getElementById("change_button").addEventListener("click",()=>{
	let blockId = document.getElementById("block_id").value;
	let color = document.getElementById("color_id").value;

	document.querySelectorAll(".grid-item").forEach((item)=>{
		item.style.backgroundColor = "transparent";
	})

	let selectedBlock = document.getElementById(blockId);
	if(selectedBlock){
		selectedBlock.style.backgroundColor=color;
	}
	else{
		alert("Invalid Block ID!")
	}
})

document.getElementById('Reset').addEventListener('click', function() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
	});
});
