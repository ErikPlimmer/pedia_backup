app.get('/edamam/*', proxyEdamam);

function proxyEdamam(request, response) {
  console.log('Routing a Edamam request');
  (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: 'ID',
      app_key: 'KEY'}
  }))(request, response);
}
