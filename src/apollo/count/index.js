import { GET_COUNT } from './count.queries';

export const plusCount = (_, __, { cache }) => {
  const { count } = cache.readQuery({ query: GET_COUNT });
  cache.writeData({
    data: { count: count + 1 },
  });
};

export const minusCount = (_, __, { cache }) => {
  const { count } = cache.readQuery({ query: GET_COUNT });
  cache.writeData({
    data: { count: count - 1 },
  });
};
