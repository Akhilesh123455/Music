let fs = require("fs");
let axios = require("axios");

let songs = ["Just a Little Bit of Your Heart.mp3"];
let durations = ["03:57"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmXufYwv3JPEpFCrTpVD3nNfjDhYDEEijhGnZAFHT14Jqq/media/1`, 
      name: songs[i],
      animation_url: `ipfs://QmXufYwv3JPEpFCrTpVD3nNfjDhYDEEijhGnZAFHT14Jqq/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: "Shakira",
      year: "2010"
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "uy19iERciE0kK2Fow9DhRrOypZ90sOv07twgw32fHd2SzFMpj5sb5FelPmoTrnJ8",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
