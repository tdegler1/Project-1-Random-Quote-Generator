/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* Create array of quote objects. 
All quotes have a quote and source(author) property; optional properties include citation and year of the quote. */
var quotes = [ 
  { 
    quote: "Here's Quote #1",
    source: "Author #1",
    citation: "The movie #1 it came from",
    year: 1901
  },
  { 
    quote: "Here's Quote #2",
    source: "Author #2",
	citation: "The movie #2 it came from",
    year: 1902
  },
	{ 
    quote: "Here's Quote #3",
    source: "Author #3"
  },
	{ 
    quote: "Here's Quote #4",
    source: "Author #4",
    year: 1904
  },
  {
    quote: "Here's Quote #5",
    source: "Author #5",
    citation: "The movie #5 it came from"
  }
];

/* Generate a random number between 0 and the last index in the 'quotes' array and retrieve a random quote object from the `quotes` array. 
Return the random quote. */
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
	html += '</p>';
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = html;
}

/* When "Show another quote" button is clicked, call the printQuote function. */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* Initialize the web page with the first random quote */
printQuote();
