// Change the main product image when clicking on a thumbnail
function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
}

// Calculate and display expected delivery date
function calculateDeliveryDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2); // Assuming delivery in the next 2 days
    const deliveryDate = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('deliveryDate').innerText = deliveryDate;
}

calculateDeliveryDate(); // Call the function to display the initial delivery date


function submitReview() {
    // Get form values
    var userName = document.getElementById('userName').value;
    var userRating = document.getElementById('userRating').value;
    var userComment = document.getElementById('userComment').value;

    // Validate form
    if (!userName || !userRating || !userComment) {
        alert('Please fill in all fields before submitting your review.');
        return;
    }

    // Create new review element
    var reviewElement = document.createElement('div');
    reviewElement.className = 'review';

    reviewElement.innerHTML = `
        <div class="user-avatar">${userName.charAt(0)}</div>
        <div class="review-details">
            <div class="user-name">${userName}</div>
            <div class="rating">${'⭐'.repeat(parseInt(userRating))}</div>
            <p class="comment">${userComment}</p>
        </div>
    `;

    // Append the new review to the reviews section
    var reviewsSection = document.querySelector('.user-reviews');
    reviewsSection.insertBefore(reviewElement, reviewsSection.firstChild);

    // Clear form fields
    document.getElementById('userName').value = '';
    document.getElementById('userRating').value = '5';
    document.getElementById('userComment').value = '';
}
