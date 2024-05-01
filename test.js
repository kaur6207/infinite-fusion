const https = require('https');

// Function to generate a random dexId between 1 and 470
function getRandomDexId() {
  const randomNumber1 = Math.floor(Math.random() * 470) + 1;
  const randomNumber2 = Math.floor(Math.random() * 470) + 1;
  const dexId = `${randomNumber1}.${randomNumber2}`;
  return dexId;
}

// Function to send a GET request to the API
function sendRequest() {
  const dexId = getRandomDexId();
  const options = {
    hostname: 'api.infinitefusion.online',
    port: 443,
    path: `/custom-sprites/${dexId}`,
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    res.on('data', (chunk) => {
      console.log(`Response: ${chunk}`);
    });

    res.on('end', () => {
      console.log('Request completed');
    });
  });

  req.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });

  req.end();
}

// Send the request
sendRequest();