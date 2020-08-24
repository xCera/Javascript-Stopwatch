//===================== Buttons ==========================
const startBtn = document.querySelector('#btnStart');
const stopBtn = document.querySelector('#btnStop');
const resetBtn = document.querySelector('#btnReset');
const lapBtn = document.querySelector('#btnLap');

//========================== Text ====================
let tensText = document.querySelector('#tens');
let secondsText = document.querySelector('#seconds');
let minutesText = document.querySelector('#minutes');
let hoursText = document.querySelector('#hours');

//========================== Time logic ====================
var laps = document.querySelector('.laps');
var tens = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var lapCount = 0;
var timeInterval;
var hasStarted = false;

// ================================================= EVENT LISTENERS =============================================

startBtn.addEventListener('click', () => {
	showButtons();
	if (hasStarted === false) {
		startTimer();
		hasStarted = true;
	}
});

resetBtn.addEventListener('click', () => {
	restartTimer();
});

lapBtn.addEventListener('click', () => {
	if (hasStarted === true) {
		lapCount++;
		var lap = document.createElement('li');
		lap.innerHTML =
			lapCount +
			': ' +
			hoursText.textContent +
			':' +
			minutesText.textContent +
			':' +
			secondsText.textContent +
			':' +
			tensText.textContent;
		laps.append(lap);
	}
});

stopBtn.addEventListener('click', () => {
	hasStarted = false;
	clearInterval(timeInterval);
});

//=========================================================== TIMER LOGIC ==================================================================

function startTimer() {
	timeInterval = setInterval(function() {
		tens++;
		if (tens >= 100) {
			tens = 0;
			seconds++;
			if (seconds >= 60) {
				minutes++;
				seconds = 0;
				if (minutes >= 60) {
					hours++;
					minutes = 0;
				}
			}
		}
		manageText();
	}, 10);

	// ================================================= UPDATING TEXT DISPLAY =============================================

	function manageText() {
		// Tens
		if (tens >= 10) {
			tensText.innerHTML = tens;
		} else {
			tensText.innerHTML = '0' + tens;
		}

		// Seconds
		if (seconds >= 10) {
			secondsText.innerHTML = seconds;
		} else {
			secondsText.innerHTML = '0' + seconds;
		}
		// Minutes

		if (minutes >= 10) {
			minutesText.innerHTML = minutes;
		} else {
			minutesText.innerHTML = '0' + minutes;
		}

		// Hours

		if (hours >= 10) {
			hoursText.textContent = hours;
		} else {
			hoursText.textContent = '0' + hours;
		}
	}
}

// ================================================= FUNCTIONS =============================================

function showButtons() {
	setTimeout(function() {
		stopBtn.classList.remove('hidden');
		resetBtn.classList.remove('hidden');
		btnLap.classList.remove('hidden');
	}, 160);
}

function restartTimer() {
	tens = 0;
	seconds = 0;
	secondsText.innerHTML = '0' + seconds;
	tensText.innerHTML = '0' + tens;
	removeChilds(laps);
}

const removeChilds = (parent) => {
	while (parent.lastChild) {
		parent.removeChild(parent.lastChild);
	}
};
