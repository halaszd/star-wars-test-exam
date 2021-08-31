import { createServer } from 'miragejs';
export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
    },
    seeds(server) {
    },
    routes() {
      this.namespace = '/api';
      this.timing = 2000

      this.post('/calculate', (schema, request) => {
        return [
          {
            "name": "Yoda",
            "type": "Jedi",
            "chance": "70%"
          },
          {
            "name": "Yo",
            "type": "Jedi",
            "chance": "1%"
          },
          {
            "name": "Darth Vader",
            "type": "Sith",
            "chance": "80%"
          },
          {
            "name": "Luke Skywalker",
            "type": "Jedi",
            "chance": "20%"
          },
          {
            "name": "walker",
            "type": "Jedi",
            "chance": "100%"
          },
        ]
      })

    },
  });
  return server;
}
