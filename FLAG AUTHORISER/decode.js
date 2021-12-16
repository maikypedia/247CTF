var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjc3JmIjoiM2MxNDA5NDQtNjNjYi00ZGNjLTg0N2QtZDJmNGUxYTA1OGIyIiwianRpIjoiNmM2OGZjYjktMzc0My00NDE4LTkxYzQtM2Q0YmYwYThjOWFiIiwiZXhwIjoxNjM5NjE2MDI0LCJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzOTYxNTEyNCwidHlwZSI6ImFjY2VzcyIsIm5iZiI6MTYzOTYxNTEyNCwiaWRlbnRpdHkiOiJhbm9ueW1vdXMifQ.YTzki653xlDZi4BvTmkFrOmWGgcz94n9Q5Ol0GIdDq0";

const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

var decoded = parseJwt(token);
console.log(decoded);

