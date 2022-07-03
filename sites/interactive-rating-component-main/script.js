const card = document.querySelector(".card");
const ratingInputs = document.querySelectorAll(".ratingInput");
const button = document.querySelector(".card__button");

button.addEventListener("click", () => {
  let status = 0;
  ratingInputs.forEach((input) => {
    if (input.checked) {
      status = 1;
      const rating = input.value;
      let html = `
      <div class="thankyouCard">
      <img src="./images/illustration-thank-you.svg" alt="thank you" class="card__thankyouImg">

      <p class="selectedRating">You selected ${rating} out of 5</p>

      <h1 class="card__thankyouText">Thank you!</h1>

      <p class="card__thankyouPara">We appreciate you taking the time to give a rating. If you ever need more support,
        don't hesitate to get in touch!</p>
    </div>
      `;

      card.innerHTML = html;
    }
  });

  if (status === 0) {
    window.alert("Please select a rating.");
  }
});
