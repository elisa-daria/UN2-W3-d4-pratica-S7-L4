const loadBtn = document.getElementById("load-primary");
const loadSecondary = document.getElementById("load-secondary");
const myPrimaryURL = "https://api.pexels.com/v1/search?query=tiger";
const mySecondaryURL = "https://api.pexels.com/v1/search?query=dog";
const myKey = "O7UQ41heV7Q2LSuAU3G1m3iNxcdaN0jEPyzobdVfig8XegenT0ZNr8ca";
const myRow = document.getElementById("my-row");
const newCol = document.createElement("div");

const emptyRow = () => {
  myRow.innerHTML = ``;
};

//HIDING CARD

const hideBtns = document.querySelectorAll(".hide-btn");
const hideAnimal = () => {
  hideBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".col");
      if (card) {
        card.classList.add("d-none");
      }
    });
  });
};

const getTigers = (tigers) => {
  emptyRow();
  tigers.forEach((tiger) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-4");
    newCol.innerHTML = `
        <div class="card h-100 ">
        <img src=${tiger.src.medium} class="card-img-top d-flex flex-column"/>
        <div class="card-body flex-grow-1">
          <p class="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Adipisci repellat recusandae iure mollitia repudiandae,
            deleniti sint! Itaque repellendus amet recusandae in eaque
            nostrum iusto a eum alias, atque nesciunt adipisci?
          </p>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            class="btn btn-outline-secondary"
            id="view-btn"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-end-2"
            class="hide-btn"
          >
            Hide
          </button>
          <span class="flex-grow-1 d-flex justify-content-end mx-3 opacity-50" class="id-photo"
            >ID:${tiger.id}</span
          >
        </div>
      </div>`;
    myRow.appendChild(newCol);
  });
  hideAnimal();
};

loadBtn.addEventListener("click", () => {
  fetch(myPrimaryURL, {
    headers: { Authorization: myKey },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data);
      getTigers(data.photos);
      const hideBtns = document.querySelectorAll(".hide-btn");
      hideAnimal();
    })
    .catch((err) => {
      console.log(err);
    });
});

// REPETITA IUVANT

const getDoggos = (dogs) => {
  emptyRow();
  dogs.forEach((dog) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-4");
    newCol.innerHTML = `
        <div class="card h-100 ">
        <img src=${dog.src.medium} class="card-img-top d-flex flex-column"/>
        <div class="card-body flex-grow-1">
          <p class="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Adipisci repellat recusandae iure mollitia repudiandae,
            deleniti sint! Itaque repellendus amet recusandae in eaque
            nostrum iusto a eum alias, atque nesciunt adipisci?
          </p>
        </div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            class="btn btn-outline-secondary"
            id="view-btn"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-end-2"
            class="hide-btn"
          >
            Hide
          </button>
          <span class="flex-grow-1 d-flex justify-content-end mx-3 opacity-50" class="_id-photo"
            >ID:${dog.id}</span
          >
        </div>
      </div>`;
    myRow.appendChild(newCol);
  });
  hideAnimal();
};

loadSecondary.addEventListener("click", () => {
  fetch(mySecondaryURL, {
    headers: {
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((doggos) => {
      console.log(doggos);
      getDoggos(doggos.photos);
      const hideBtns = document.querySelectorAll(".hide-btn");
      hideAnimal();
    })
    .catch((err) => {
      alert("something didn't work ");
      console.log(err);
    });
});
