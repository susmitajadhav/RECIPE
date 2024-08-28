
// function openPopup() {
//     document.getElementById('productPopup').style.display = 'flex';
// }

// function closePopup() {
//     document.getElementById('productPopup').style.display = 'none';
// }


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (index >=totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 270; // Adjust the offset according to your card width + margin
    slides.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function openPopup() {
    document.getElementById('productPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('productPopup').style.display = 'none';
}

// Initialize the carousel
showSlide(currentIndex);








const recipes = {
    "Almond Meal": [
      "Almond Flour Cookies",
      "Almond Meal Pancakes"
    ],
    "Almonds": [
      "Almond Butter",
      "Almond Milk"
    ],
    // ... more ingredients and recipes
  };





  function displayIngredients(letter) {
    // ... (existing code to clear list) ...
  
    ingredients[letter].forEach(ingredient => {
      // ... (existing code to create ingredient item) ...
      if (recipes[ingredient]) {
        const recipeList = document.createElement('ul');
        recipes[ingredient].forEach(recipe => {
          const recipeItem = document.createElement('li');
          recipeItem.textContent = recipe;
          recipeList.appendChild(recipeItem);
        });
        ingredientItem.appendChild(recipeList);
      }
      ingredientList.appendChild(ingredientItem);
    });
  
    // ... (existing code for handling no results) ...
  }