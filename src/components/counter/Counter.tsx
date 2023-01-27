import {Button, Text} from 'react-native';
import React, {useState} from 'react';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Text>
      {count}
      <Button onPress={() => dispatch(decrement())} title="Minus" />
      <Button onPress={() => dispatch(increment())} title="Plus" />

      <Button
        onPress={() => dispatch(incrementByAmount(incrementValue))}
        title="Add Amount"
      />
      <Button
        onPress={() => dispatch(incrementAsync(incrementValue))}
        title="Add Async"
      />
      <Button
        onPress={() => dispatch(incrementIfOdd(incrementValue))}
        title="Add If Odd"
      />
    </Text>
  );
}
