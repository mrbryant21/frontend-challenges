class StarRating {
  constructor(containerId, totalStars = 5) {
    this.container = document.getElementById(containerId);
    this.totalStars = totalStars;
    this.selectedRating = 0;
    this.hoverRating = 0;

    this.init();
  }

  init() {
    this.container.innerHTML = `
            <div class="stars"></div>
            <div class="rating-message">Please select a rating</div>
        `;

    this.starsContainer = this.container.querySelector(".stars");
    this.ratingMessage = this.container.querySelector(".rating-message");

    this.generateStars();
    this.setupEventListeners();
  }

  generateStars() {
    this.starsContainer.innerHTML = "";

    for (let i = 1; i <= this.totalStars; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.dataset.rating = i;
      star.innerHTML = "★";
      star.setAttribute("aria-label", `Rate ${i} out of ${this.totalStars}`);
      this.starsContainer.appendChild(star);
    }
  }

  setupEventListeners() {
    this.starsContainer.addEventListener("mouseover", (e) => {
      const star = e.target.closest(".star");
      if (star) {
        this.handleHover(parseInt(star.dataset.rating));
      }
    });

    this.starsContainer.addEventListener("mouseleave", () => {
      this.handleMouseLeave();
    });

    this.starsContainer.addEventListener("click", (e) => {
      const star = e.target.closest(".star");
      if (star) {
        this.handleClick(parseInt(star.dataset.rating));
      }
    });
  }

  handleHover(rating) {
    this.hoverRating = rating;
    this.updateDisplay();
  }

  handleMouseLeave() {
    this.hoverRating = 0;
    this.updateDisplay();
  }

  handleClick(rating) {
    this.selectedRating = rating;
    this.hoverRating = 0;
    this.updateDisplay();
    this.updateMessage();
  }

  updateDisplay() {
    const stars = this.starsContainer.querySelectorAll(".star");

    stars.forEach((star) => {
      const starRating = parseInt(star.dataset.rating);

      star.classList.remove("selected", "hover");

      if (this.hoverRating > 0) {
        if (starRating <= this.hoverRating) {
          star.classList.add("hover");
        }
      } else if (this.selectedRating > 0) {
        if (starRating <= this.selectedRating) {
          star.classList.add("selected");
        }
      }
    });
  }

  updateMessage() {
    if (this.selectedRating > 0) {
      this.ratingMessage.textContent = `You rated this ${this.selectedRating} out of ${this.totalStars} stars!`;
    } else {
      this.ratingMessage.textContent = "Please select a rating";
    }
  }
}

// Initialize the component when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const starRating = new StarRating("stars", 5);
});

// Optional: Make it globally accessible for testing
window.StarRating = StarRating;
