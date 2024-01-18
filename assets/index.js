const loadBtn = document.getElementById("load-primary");
const loadSecondary = document.getElementById("load-secondary");
const myPrimaryURL = "https://api.pexels.com/v1/search?query=tigers";
const mySecondaryURL =
  "https://api.pexels.com/v1/search?query=ocean&size=medium";
const myKey = "O7UQ41heV7Q2LSuAU3G1m3iNxcdaN0jEPyzobdVfig8XegenT0ZNr8ca";

const getTigers = () => {
  loadBtn.addEventListener("click");
};

fetch("https://api.pexels.com/v1/search?query=tigers", {
  Authorization: "O7UQ41heV7Q2LSuAU3G1m3iNxcdaN0jEPyzobdVfig8XegenT0ZNr8ca",
}).then((response) => {
  if (response.ok) {
    console.log(response);
  } else {
    throw new Error("");
  }
});
