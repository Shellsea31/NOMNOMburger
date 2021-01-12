// console.log("hello")
document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  const submitBtn = document.getElementById("form");

  if (submitBtn) {
    submitBtn.addEventListener("submit", (e) => {
      e.preventDefault();
      const BurgerName = document.getElementById("burger").value.trim();
      const newBurger = {
        burgerName: BurgerName,
      };

      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("burger").value = "";
        console.log("Added a Burger!");
        location.reload();
      });
    });
  }
});
