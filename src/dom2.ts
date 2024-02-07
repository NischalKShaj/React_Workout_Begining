const forms = document.querySelector(".details") as HTMLFormElement;

const userName = document.querySelector("#userName") as HTMLInputElement;
const userEmail = document.querySelector("#userEmail") as HTMLInputElement;

forms.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(userName.value, userEmail.value);
});
