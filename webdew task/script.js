function showBookDetails(title, author, description, coverUrl, bookLink) {
    const modal = document.getElementById('bookModal');
    const modalBookCover = document.getElementById('modalBookCover');
    const modalBookTitle = document.getElementById('modalBookTitle');
    const modalBookAuthor = document.getElementById('modalBookAuthor');
    const modalBookDescription = document.getElementById('modalBookDescription');
    const modalBookLink = document.getElementById('modalBookLink');

    modalBookCover.src = coverUrl;
    modalBookTitle.textContent = title;
    modalBookAuthor.textContent = `Author: ${author}`;
    modalBookDescription.textContent = description;
    modalBookLink.href = bookLink;

    modal.style.display = 'block';
}

// Function to hide the book details modal
function hideBookDetails() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('bookModal');
    if (event.target === modal) {
        hideBookDetails();
    }
};

function purchaseBook() {
    // Here, you can add your code to handle the purchase action.
    // For the purpose of this example, we'll simply log the purchase attempt.
    console.log('Purchase the book!');
}