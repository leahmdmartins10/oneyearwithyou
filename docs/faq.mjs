document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const faqItem = this.parentElement;
        faqItem.classList.toggle("active");
  
        const answer = faqItem.querySelector(".faq-answer");
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null; // Collapse the answer
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
        }
      });
    });
  });
  