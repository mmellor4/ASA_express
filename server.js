const express = require('express');

const app = express();

const PORT = 1337;

const dir = __dirname + '/public/';

app.use(express.static('public'));


 // folders
app.use(express.static('/public/gallery'));

app.use(express.static('/public/eboard'));

app.use(express.static('/public/js'));

app.use(express.static('/public/data'));


  //style sheet
app.get('/style_home.css', function(request, response){
	response.sendFile(dir + 'style_home.css');
});


app.get('/', function(request, response){
	response.sendFile(dir + 'index.html');
});

	// html pages

app.get('/index', function(request, response){
	response.sendFile(dir + 'index.html');
});

app.get('/about', function(request, response){
	response.sendFile(dir + 'about.html');
});

app.get('/photos', function(request, response){
	response.sendFile(dir + '/photos.html');
});

app.get('/upcoming', function(request, response){
	response.sendFile(dir + 'upcoming.html');
});

app.get('/past', function(request, response){
	response.sendFile(dir + 'past.html');
});

app.get('/brickleys', function(request, response){
	response.sendFile(dir + 'brickleys.html');
});

app.get('/craftday', function(request, response){
	response.sendFile(dir + 'craftday.html');
});

app.get('/farmersdaughter', function(request, response){
	response.sendFile(dir + 'farmersdaughter.html');
});

app.get('/halloween', function(request, response){
	response.sendFile(dir + 'halloween.html');
});

app.get('/savethebay', function(request, response){
	response.sendFile(dir + 'savethebay.html');
});

app.get('/scaryacers', function(request, response){
	response.sendFile(dir + 'scaryacers.html');
});

app.get('/winterformal', function(request, response){
	response.sendFile(dir + 'winterformal.html');
});

app.get('/musicalchairs', function(request, response){
	response.sendFile(dir + 'musicalchairs.html');
});


//error 404 not found

app.get('/*', function(request, response){
	response.sendFile(dir + 'error.html');
});



app.listen(PORT, function(){
	console.log('Listening on http://localhost:' + PORT + ' press cntrl+c to quit');

})