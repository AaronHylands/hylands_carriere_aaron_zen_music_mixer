(() => {

		const deskInstruments = document.querySelectorAll(".icon"),
		dropZones = document.querySelectorAll(".dropZone"),
		audio = document.querySelector('audio'),;

		// let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function allowDrag(event) {
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg",this.id);
	}

	function allowDragOver(event){
		event.preventDefault();
		console.log('dragged something over me!');
	}

	function allowDrop(event){

		if(event.target.childElementCount != 0)
		{

			console.log('one at a time')
			return 0;
		}
		else
		{
		console.log('dropped something on me');

		let droppedImage = event.dataTransfer.getData("draggedImg");


		event.target.appendChild(document.querySelector(`#${droppedImage}`));
	}

	}

	deskInstruments.forEach(instrument => instrument.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
		});
})();
