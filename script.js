var convertBtn = document.querySelector('.convert-button');
var convertBtn1 = document.querySelector('.convert-button1');

var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	sendURLVideo(URLinput.value);
});

convertBtn1.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `http://localhost:4000/youtube/audio?URL=${URL}`;
}
// http://localhost:4000/youtube/audio?URL=https://youtu.be/a2hEEpf9kVM

function sendURLVideo(URL) {
	window.location.href = `http://localhost:4000/youtube/video?URL=${URL}`;
}
