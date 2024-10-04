const loadAllPhones = async () => {
  console.log("wait 3 seconds to load all phones");

  document.getElementById("spinner").style.display = "none";

  //   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //     .then((res) => console.log(res))
  //     .then((data) => console.log(data));

  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=iphone`
  );
  const data = await response.json();
  displayAllPhones(data.data);
};

const displayAllPhones = (phones) => {
  console.log(phones);
};

const handleSearch = () => {
  //   console.log("balance");

  document.getElementById("spinner").style.display = "block";

  setTimeout(() => {
    loadAllPhones();
  }, 3000);
};

loadAllPhones();
