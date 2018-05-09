app.get('/edamam/*', proxyEdamam);

function proxyEdamam(request, response) {
  console.log('Routing a Edamam request');
  (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: 'f135b876',
      app_key: 'acdb60a92956d657fa8aacf40beb71c6'}
  }))(request, response);
}
