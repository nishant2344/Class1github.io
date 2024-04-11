document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var searchText = document.getElementById('search').value; // Get the search text from the input field

    // Here you can implement the actual search functionality
    // For example, you can send a request to a search API with the searchText as a parameter
    // and then update the page with the search results

    console.log('Searching for:', searchText);
});