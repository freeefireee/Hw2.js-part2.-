
  function getData() {

    const userId = document.getElementById("userId").value;


    if (userId >= 1 && userId <= 10) {

      const url = `https://jsonplaceholder.typicode.com/users/${userId}`;


      fetch(url)
        .then((response) => response.json())
        .then((data) => {

          document.getElementById("name").textContent = data.name;
          document.getElementById("username").textContent = data.username;
          document.getElementById("phone").textContent = data.phone;
        })
        .catch((error) => {
          console.error("Ошибка запроса:", error);
        });
    } else {
      alert("Пожалуйста, введите корректный ID пользователя от 1 до 10.");
    }
  }


  document.getElementById("getDataButton").addEventListener("click", getData);


  document.getElementById("userId").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      getData();
    }
  });

