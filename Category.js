let posts = [
    { id: 1, title: "Maison Margiele GF", image: "MM1.jpg", category: "Maison Margiela", price: "220€" },
    { id: 2, title: "Givenchy Plus", image: "GV1.jpg", category: "Givenchy", price: "100€" },
    { id: 3, title: "Maison Margiele Luxery", image: "MM2.jpg", category: "Maison Margiela", price: "370€" },
    { id: 4, title: "Givenchy MED", image: "GV2.jpg", category: "Givenchy", price: "200€" },
    { id: 5, title: "Maison Margiele Medium", image: "MM3.jpg", category: "Maison Margiela", price: "580€" },
    { id: 6, title: "Givenchy CROP", image: "GV3.jpg", category: "Givenchy", price: "440€" },
    { id: 7, title: "Maison Margiele Prime", image: "MM4.jpg", category: "Maison Margiela" ,price: "330€" },
    { id: 8, title: "Givenchy Fade", image: "GV4.jpg", category: "Givenchy", price: "250€" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    if (category === "Корзина") {
        category = "All"; 
    }
    posts.forEach(function(post){
        if (category === "All" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <h4 class = "COLOR">${post.title}</h4>
                                    <p  class = "COLOR">${post.price}</p>
                                    <button onclick="addToCart(${post.id})" >Додати в корзину</button>

                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
}

loadPosts("All");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});

