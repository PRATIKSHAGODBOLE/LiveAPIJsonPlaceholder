
const apiUrl = "https://jsonplaceholder.typicode.com/users";
//The Fetch API interface allows web browser to make HTTP requests to web servers.
//The fetch() method starts the process of fetching a resource from a server.
//The fetch() method returns a Promise that resolves to a Response object.
//The fetch() method starts the process of fetching a resource from a server. The fetch() method returns a Promise that resolves to a Response object.


fetch(apiUrl)
  .then(function(response){
      return response.json();  //storing temporary data.
  })
  .then(function(data){
      setTimeout(() => {
          const tableData = document.getElementById("tableData");
          data.forEach(function (item){
              const newRow = tableData.insertRow();  
              
              //Add cells to the new row
              newRow.insertCell().innerHTML = item.id;
              newRow.insertCell().innerHTML = item.name;
              newRow.insertCell().innerHTML = item.username;
              newRow.insertCell().innerHTML = item.email;
              newRow.insertCell().innerHTML = `${item.address.street}, ${item.address.city}, ${item.address.zipcode}`;
          });
      }, 1000);
      
      return data; // return the data for the next .then()
  })
  .then(function(data){
      console.log(data); // log the fetched data to the console
  })
  .catch(function(error){
      console.log(error);
  });

