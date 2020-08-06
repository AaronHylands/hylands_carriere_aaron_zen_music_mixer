(() => {

		const deskInstruments = document.querySelectorAll(".icon"),
		dropZones = document.querySelectorAll(".dropZone"),
		audio = document.querySelector('audio');

		// let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function allowDrag(event) {
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg",this.id);

		// audio.src =`sounds/${draggedImage}.mp3`;
		// audio.pause();
		// audio.currentTime = 0;
	}

	function allowDragOver(event){
		event.preventDefault();
		console.log('dragged something over me!');
	}

	function allowDrop(event){

			if(event.target.childElementCount != 0) {

				console.log('one at a time')
				return 0;
			}
			else {
			console.log('dropped something on me');

			let droppedImage = event.dataTransfer.getData("draggedImg");


			event.target.appendChild(document.querySelector(`#${droppedImage}`));


			//audio.src =`sounds/${droppedImage}.mp3`;
			let audio1 = document.querySelector("#audio1"),
					audio2 = document.querySelector("#audio2"),
					audio3 = document.querySelector("#audio3"),
					audio4 = document.querySelector("#audio4"),
					audio5 = document.querySelector("#audio5");

			audio1.play();
			audio2.play();
			audio3.play();
			audio4.play();
			audio5.play();
		}

	}

	deskInstruments.forEach(instrument => instrument.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
		});
})();
