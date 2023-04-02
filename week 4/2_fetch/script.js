fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
    })
    .catch(error => {
      console.log("tidak berhasil");
    });