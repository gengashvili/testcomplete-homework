const httpGetRequest = (URL) => {
  
  let address = URL;

  let aqHttpRequest = aqHttp.CreateGetRequest(address);

  let aqHttpResponse = aqHttpRequest.Send();

  if (aqHttpResponse != null) {
    let result = JSON.parse(aqHttpResponse);
    return result;
  } 
}

module.exports = httpGetRequest;