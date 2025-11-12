import { create, defaults, router } from 'json-server';
const server = create();
const middlewares = defaults();
const routes = router('db.json');

server.use(middlewares);
server.use(routes);
server.listen(process.env.PORT || 10000, () => {
  console.log('JSON Server is running');
});
