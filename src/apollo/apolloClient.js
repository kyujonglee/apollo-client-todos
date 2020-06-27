import ApolloClient, { InMemoryCache } from 'apollo-boost';
import * as count from './count';
import * as todos from './todos';

const cache = new InMemoryCache();

const data = {
  count: 0,
  todos: [],
  todoBefore: '',
};
cache.writeData({
  data,
});

const resolvers = {
  Mutation: {
    ...count,
    ...todos,
  },
};

export default new ApolloClient({
  cache,
  resolvers,
});
