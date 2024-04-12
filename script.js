var clickCountPass = 0; // Counter to track the number of clicks for "pass" button
var displayedGifs = []; // Array to keep track of displayed gifs

document.getElementById('opkorsBtn').addEventListener('click', function() {
    window.location.href = 'happy.html';
});

document.getElementById('passBtn').addEventListener('click', function() {
    // Get the button element to move
    var passButton = document.getElementById('passBtn');

    // Calculate the maximum allowable values for top and left positions based on screen size
    var maxTop = window.innerHeight - passButton.clientHeight;
    var maxLeft = window.innerWidth - passButton.clientWidth;

    // Adjust maxTop and maxLeft for mobile responsiveness
    if (window.innerWidth < 500) {
        maxTop -= 50; // Subtract a buffer to prevent overlap with mobile browser UI
        maxLeft -= 20; // Subtract a buffer to prevent overlap with mobile browser UI
    }

    // Generate random values for top and left positions within the maximum allowable range
    var randomTop = Math.floor(Math.random() * maxTop);
    var randomLeft = Math.floor(Math.random() * maxLeft);

    // Set new position
    passButton.style.position = 'absolute';
    passButton.style.top = randomTop + 'px';
    passButton.style.left = randomLeft + 'px';

    // Calculate the new scale
    var scale = 1 - (clickCountPass / 5); // Decrease scale gradually over 5 clicks

    // Set the new scale
    passButton.style.transform = 'scale(' + scale + ')';

    // Increment click count
    clickCountPass++;

    // Add a new gif into a random location
    addRandomGif();
});

function addRandomGif() {
    var gif = document.createElement('img');
    var gifUrls = ['cry.gif', 'dead.gif', 'leave.gif', 'beg.gif', 'depressed.gif']; // Array of gif URLs

    // Filter out already displayed gifs
    var availableGifs = gifUrls.filter(url => !displayedGifs.includes(url));

    // If all gifs have been displayed, reset the displayedGifs array
    if (availableGifs.length === 0) {
        displayedGifs = [];
        availableGifs = gifUrls;
    }

    // Randomly select a gif URL from the available gifs
    var randomUrl = availableGifs[Math.floor(Math.random() * availableGifs.length)]; 

    // Add the selected gif URL to the displayed gifs array
    displayedGifs.push(randomUrl);

    gif.src = randomUrl;
    gif.style.position = 'absolute';

    // Adjust maxTop and maxLeft for mobile responsiveness
    var maxTop = window.innerHeight - gif.clientHeight;
    var maxLeft = window.innerWidth - gif.clientWidth;
    if (window.innerWidth < 500) {
        maxTop -= 50; // Subtract a buffer to prevent overlap with mobile browser UI
        maxLeft -= 20; // Subtract a buffer to prevent overlap with mobile browser UI
    }

    // Generate random values for top and left positions within the maximum allowable range
    var randomTop = Math.floor(Math.random() * maxTop);
    var randomLeft = Math.floor(Math.random() * maxLeft);

    gif.style.top = randomTop + 'px';
    gif.style.left = randomLeft + 'px';
    gif.style.width = '250px'; // Adjust width to be larger
    gif.style.height = 'auto'; // Maintain aspect ratio
    document.querySelector('.GIF').appendChild(gif); // Append the gif to the .GIF container
}
