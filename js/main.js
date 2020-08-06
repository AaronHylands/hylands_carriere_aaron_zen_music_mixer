(() => {

		const deskInstruments = document.querySelectorAll(".icon"),
		dropZones = document.querySelectorAll(".dropZone"),
		playButton = document.querySelector(".playButton"),
		itemHolder = document.querySelector(".itemHolder"),
		desk = document.querySelector(".desk"),
		audio1 = document.querySelector("#audio1"),
		audio2 = document.querySelector("#audio2"),
		audio3 = document.querySelector("#audio3"),
		audio4 = document.querySelector("#audio4"),
		audio5 = document.querySelector("#audio5"),
		audio = document.querySelector('audio');

		// let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function allowDrag(event) {
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg",this.id);

		// audio.src =`sounds/${draggedImage}.mp3`;
		// audio.pause();
		// audio.currentTime = 0;
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged something over me!');
	}

	function allowDrop(event){

		if(event.target.childElementCount != 0) {

			console.log('one at a time');
			return 0;
		}
		else {
		console.log('dropped something on me');

		let droppedImage = event.dataTransfer.getData("draggedImg");


		event.target.appendChild(document.querySelector(`#${droppedImage}`));

	// audio.src =`sounds/${droppedImage}.mp3`;
	// audio.load();
	//
	// audio.play();
		}

	}

	function playAudio() {
		audio1.currentTime = 0;
		audio2.currentTime = 0;
		audio3.currentTime = 0;
		audio4.currentTime = 0;
		audio5.currentTime = 0;
		console.log("Audio button pressed!");
		playAudio1();
		playAudio2();
		playAudio3();
		playAudio4();
		playAudio5();
	}

	function playAudio1() {
		console.log("playAudio1 now running...")
		//debugger;
		let match = desk.querySelector(`img[data-key="1"]`);
		if (match !== null) {
			console.log("Playing Pencil music.");
			audio1.play();
		}
	}

	function playAudio2() {
		console.log("playAudio2 now running...")
		//debugger;
		let match = desk.querySelector(`img[data-key="2"]`);
		if (match !== null) {
			console.log("Playing Eraser music.");
			audio2.play();
		}
	}

	function playAudio3() {
		console.log("playAudio3 now running...")
		//debugger;
		let match = desk.querySelector(`img[data-key="3"]`);
		if (match !== null) {
			console.log("Playing Sharpenmer music.");
			audio3.play();
		}
	}

	function playAudio4() {
		console.log("playAudio4 now running...")
		//debugger;
		let match = desk.querySelector(`img[data-key="4"]`);
		if (match !== null) {
			console.log("Playing Stapler music.");
			audio4.play();
		}
	}

	function playAudio5() {
		console.log("playAudio5 now running...")
		//debugger;
		let match = desk.querySelector(`img[data-key="5"]`);
		if (match !== null) {
			console.log("Playing Pen music.");
			audio5.play();
		}
	}

	deskInstruments.forEach(instrument => instrument.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
		});

	playButton.addEventListener("click", playAudio);

})();
