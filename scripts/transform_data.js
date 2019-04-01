const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");
const results = [];

//  .pipe(csv())
fs.createReadStream("./bicycle_theft.csv").pipe(csv()).on("data", chunk => console.log(chunk));

/* 
  .on("end", () => {
    const start = 0;
    const end = 8000;
    const newData = results.slice(start, end);

    let postcodeResults = [];

    const batchSize = 100;

    function getPostcodes(coords) {
      return axios.post("https://api.postcodes.io/postcodes", {
        geolocations: coords
      });
    }

    function chunkArray(myArray, chunk_size) {
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];

      for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
      }

      return tempArray;
    }

    const chunkedArray = chunkArray(newData, batchSize);

    axios
      .all(
        chunkedArray.map(d =>
          getPostcodes(
            d.map(x => ({
              longitude: +x.Longitude,
              latitude: +x.Latitude,
              limit: 1
            }))
          )
        )
      )
      .then(function(res) {
        postcodeResults = res
          .map(r => r.data.result)
          .reduce(function(accumulator, currentValue) {
            return accumulator.concat(currentValue);
          }, [])
          //.filter(d => d.result !== null)
          .map((d, i) =>
            Object.assign({}, newData[i], d.result !== null ? d.result[0] : {})
          )
          .filter(d => d.hasOwnProperty("outcode"));

        const json = JSON.stringify(postcodeResults);
        fs.writeFile(
          "postcode_bicycle_crime-" + start + "-" + (end - 1) + ".json",
          json,
          "utf8",
          () => console.log("Completed " + postcodeResults.length + " results")
        );
      });
  });
 */
