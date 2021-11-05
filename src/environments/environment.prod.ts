export const environment = {
  production: true,
  // Since this file is gonna be served by flask
  // A better approach would be to serve the compiled frontend staticly by NGINX
  // in something like a docker container, and have the API in another container with Gunicorn
  apiUrl: window.location.origin
};
