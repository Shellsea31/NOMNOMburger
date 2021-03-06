document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  const submitBtn = document.getElementById("form");
  const devourBtns = document.querySelectorAll(".devourBtn");

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
        location.reload();
      });
    });
  }

  if (devourBtns) {
    devourBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");

        const devouredBurger = {
          id: id,
        };
        // console.log(id)
        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(devouredBurger),
        }).then(() => {
          location.reload("/");
        });
      });
    });
  }
});
