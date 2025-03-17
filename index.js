const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Nirvana Ramen", restaurant: "Ramen Nirvana", image: "images/nirvana.jpg", rating: 4, comment: "Heavenly flavors!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Naruto Ramen Bar", image: "images/naruto.jpg", rating: 3, comment: "Good but not great." },
    { id: 4, name: "Kojiro Ramen", restaurant: "Kojiro Ramen House", image: "images/kojiro.jpg", rating: 4, comment: "Unique and tasty!" },
    { id: 5, name: "Gyokotsu Ramen", restaurant: "Gyokotsu Ramen", image: "images/gyokotsu.jpg", rating: 5, comment: "Rich and flavorful!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailImage = document.getElementById("detail-image");
    const detailName = document.getElementById("detail-name");
    const detailRestaurant = document.getElementById("detail-restaurant");
    const detailRating = document.getElementById("detail-rating");
    const detailComment = document.getElementById("detail-comment");

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailRating.textContent = `Rating: ${ramen.rating}`;
    detailComment.textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamen = {
           
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value
        };
        ramens.push(newRamen);
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

document.addEventListener("DOMContentLoaded", main);