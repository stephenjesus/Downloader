const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.listen(4000, () => {
	console.log('Server Works !!! At port 4000');
});
// http://localhost:4000/link?URL=https://youtu.be/a2hEEpf9kVM  -- testing	
app.get('/link' , (re , r) => {
	var URL = re.query.URL;
	if (URL && ytdl.validateURL(URL)) {
		var request = require("request");
		console.log(URL , 'url');
		var options = { method: 'POST',
		 url: 'https://upvideo.herokuapp.com/',
		 headers: 
		  { 'postman-token': '934c3aad-8845-40f3-0b55-8980dfb1cbc9',
			'cache-control': 'no-cache',
			'content-type': 'application/x-www-form-urlencoded' },
		 form: { url: URL } };
	   
	   request(options, function (error, response, body) {
		 if (error) throw new Error(error);
		 r.send(body);
	   });
	} else {
		r.send('invalid link');
	}
	
});

app.get('/youtube/video', (req, res) => {
	//   console.log(err , 'err') ;
	var URL = req.query.URL;
	console.log(URL , 'url');
	 console.log(ytdl.getURLVideoID(URL) , 'id' , ytdl.validateURL(URL));
	if  (URL && ytdl.validateURL(URL)) {
		console.log('inside ');
		// res.header('Content-Disposition', 'attachment; filename="video.mp4"');
		// ytdl(ytdl.getURLVideoID(URL), {
		// 	format: 'mp4'
		// }).pipe(res);	
		res.send(true);
	}  else {
		res.send(false);
		console.log('in valid');
	}
});

app.get('/youtube/audio', (req) => {

	var URL = req.query.URL;
	console.log(URL , 'url audio');

	// 	// Example of filtering the formats to audio only.
	if (ytdl.validateURL(URL)) {
		// ytdl.getInfo(ytdl.getURLVideoID(URL), (err, info) => {
		// 	if (err) throw err;
		// 	ytdl(URL, { filter: 'audioonly' })
		// 		.pipe(res);
		// });
	} else {
		console.log('in valid');
	}
});

