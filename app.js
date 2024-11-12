document.getElementById('getFoodImageBtn').addEventListener('click', async () => {
    const apiUrl = 'https://foodish-api.herokuapp.com/api/';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch food image');

        const data = await response.json();
        displayFoodImage(data.image);
    } catch (error) {
        console.error(error.message);
    }
});

function displayFoodImage(imageUrl) {
    const foodImage = document.getElementById('foodImage');
    foodImage.src = imageUrl;
    foodImage.style.display = 'block'; // Make the image visible
}
