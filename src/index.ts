export default {
    port: 8000,
    fetch(request: Request) {
      const { url, method, credentials } = request;
      const data = {
        url,
        method,
        credentials
      }
      const response = JSON.stringify(data);
      return new Response(response);
    },
  }

  