import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  GET_COUNT,
  PLUS_COUNT,
  MINUS_COUNT,
} from '../apollo/count/count.queries';

function Counter() {
  const { loading, error, data } = useQuery(GET_COUNT);
  const [plusCount] = useMutation(PLUS_COUNT);
  const [minusCount] = useMutation(MINUS_COUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div>
        <b>count : </b>
        {data?.count}
      </div>
      <div>
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>
    </>
  );
}

export default Counter;
