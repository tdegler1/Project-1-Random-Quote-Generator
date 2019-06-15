/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** BEGIN Global Variables ***/

/* Create array of quote objects. 
All quotes have a quote and source(author) property; optional properties include citation, year and category of the quote. */
var quotes = [ 
   { 
    quote: "The essence of genius is to know what to overlook.",
	source: "William James",
	category: "Genius"
  },
	{ 
    quote: "There's a fine line between genius and insanity. I have erased this line.",
	source: "Oscar Levant",
	category: "Genius"
  },
	{ 
    quote: "Intellectuals solve problems; geniuses prevent them.",
	source: "Albert Einstein",
	category: "Genius"
  },
	{
    quote: "Be the person your dog thinks you are.",
    source: "J.W. Stephens",
	category: "Dogs"
  },
  { 
    quote: "Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.",
    source: "Groucho Marx",
	category: "Dogs"
  },
	{ 
    quote: "Scratch a dog and you'll find a permanent job.",
    source: "Franklin P. Jones",
	category: "Dogs"
  },
    { 
    quote: "KHAAANNN!",
    source: "Captain James T. Kirk",
    citation: "Star Trek II: The Wrath of Khan",
    year: 1982,
	category: "Movies"
  },
	{ 
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
	source: "Dorothy Gale",
	citation: "The Wizard of Oz",
    year: 1939,
	category: "Movies"
  },
  {
    quote: "My precious.",
    source: "Gollum",
    citation: "The Lord of the Rings: Two Towers",
	year: 2002,
	category: "Movies"
  }
];

/*** END Global Variables ***/

/*** BEGIN Functions ***/

/* Generate three random numbers for red, blue and green. 
Create HTML string of RGB color values and store in variable 'color'.
Add background color attribute to the body tag (with id='page') */
function randomRGB() {
	var color = 'rgb('; // initialize color string
  	color += Math.floor(Math.random() * 256 ) + ','; // red
  	color += Math.floor(Math.random() * 256 ) + ','; // blue
  	color += Math.floor(Math.random() * 256 ) + ')'; // green
	var targetDiv = document.getElementById('page');
	targetDiv.style.backgroundColor = color;
}

/* Generate a random number between 0 and the last index in the 'quotes' array and retrieve a random quote object from the `quotes` array. */
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * quotes.length );
	return quotes[randomNumber];
}

/* Call the 'getRandomQuote' function to get a random quote object. 
Initalize an empty string variable 'html' and concatenate the parts of the random quote to create final output string with formatting elements. 
Check for optional properties that need to be added to the final output. 
Populate the 'quote-box' div in the HTML with the final output string 'html'. */
function printQuote() {
	var randomQuote = getRandomQuote();
	var html = '';
	html += '<p class="quote">' + randomQuote.quote + '</p>';
	html += '<p class="source">' + randomQuote.source;
	if (randomQuote.citation) {
		html += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if (randomQuote.year) {
		html += '<span class="year">' + randomQuote.year + '</span>';
	}
	if (randomQuote.category) {
		html += '<span class="category"> (' + randomQuote.category + ')</span>';
	}
	html += '</p>';
	/* Call 'randomRGB' function to change the background color of the webpage */
	randomRGB();
	/* Display the new random quote on the webpage */
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = html;
}

/*** END Functions ***/

/*** BEGIN Triggers ***/

/* When "Show another quote" button is clicked, call the printQuote function. */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*** END Triggers ***/

/*** BEGIN Main Program ***/

/* Initialize the web page with the first random quote */
printQuote();

/* Auto-refresh the quote (and background color) every 20 seconds. */
setInterval(function(){ 
	printQuote(); }, 
	20000);

/*** END Main Program ***/

