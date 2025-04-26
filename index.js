function weather() {
  let city = document.getElementById("serch").value.toLowerCase();
  let results = document.getElementById("results");

  // console.log(city,result)

  if (city == "lahore") {
    results.innerHTML = "Today Lahore weather is 35 degree";
  } else if (city == "karachi") {
    results.innerHTML = "Today karachi Weather is 45 degree";
  } else if (city == "Islamabad") {
    results.innerHTML = "Today Islamabad Weather is 26 degree";
  } else if (city == "Peshaware") {
    results.innerHTML = "Today Peshawar weather is 30 degree";
  } else if (city == "Rwalpindi") {
    results.innerHTML = "Today Rawalpindi weather is 28 degree";
  } else if (city == "Faisalabad") {
    results.innerHTML = "Today Islamabad weather is 26 degree";
  } else {
    results.innerHTML = "You Enter Invalid City please Try agian";
  }
};
