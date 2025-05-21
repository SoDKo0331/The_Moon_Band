document.addEventListener('DOMContentLoaded', function() {
      const memberCards = document.querySelectorAll('.member-card');
      
      memberCards.forEach(card => {
        card.addEventListener('click', function() {
          const cardInner = this.querySelector('.member-card-inner');
          
          // Reset all other cards first (only one flipped at a time)
          document.querySelectorAll('.member-card-inner').forEach(otherCard => {
            if (otherCard !== cardInner) {
              otherCard.classList.remove('active');
            }
          });
          
          // Toggle the active class on click/tap
          cardInner.classList.toggle('active');
        });
      });
    });