export default class DataService {
  getData(vegpont, callback, hibacallback,leiro) {
    axios
      .get(vegpont)
      .then(function (response) {
        // handle success
       /*  console.log("response", response);
        console.log("data", response.data);
        console.log("data", response.data.nevek);
        console.log("státusz", response.request.status);
        console.log("text", response.statusText); */
        callback(response.data.nevek,leiro)
        
      })
      .catch(function (error) {
        // handle error
        hibacallback(error)
      })
      .finally(function () {
        // always executed
      });
  }
}
