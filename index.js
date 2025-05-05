async function weather() {

    let inputRef = document.getElementById("city");
    let results = document.getElementById("results");

    const cityName = inputRef.value.toLowerCase();

    if (inputRef.value.trim() == "") {
      alert("invalid input ref");
      return;
    }
    try {
      const weatherApi = await fetch(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`,
        {
          method: "GET",
        }
      );

      if (weatherApi.ok === false) {
        results.innerHTML = "check your Internet";
      }


      const data = await weatherApi.json();
      inputRef.value = ""; 
          console.log(data);
          results.style.padding = "10px";
          results.style.width = "350px";
          results.style.alignContent = "center";
          results.style.textAlign = "center";
          results.style.background = "#e6f7ff";
          results.style.borderRadius = "9px";
          results.style.boxShadow = "0 0 10px ";

          console.log(data.current.temp_c);
          results.innerHTML = `
           <h2>WEATHER IN ${cityName.toUpperCase()}</h2>
           <p>🌡Temperature:${data.current.temp_c}</p>
          <p>☁ Condition: ${data.current.condition.text}</p>
          <img src ="${
            data.current.condition.icon
          }" alt="weather Icon  style="margin-left:10px;"/>
           <p>⏰ Last Update: ${data.current.last_updated}</p>
           `;
      
  } catch (error) {
    console.log(error);
    results.innerHTML = `<p style="colour:red;">❌ ${error.message}</p>`;
  }
}
