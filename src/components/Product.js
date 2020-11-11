import React from 'react';
import { useSelector } from 'react-redux';

export default function Product() {
  const item = useSelector(({ items }) => items);
  return <h1>{item ?? 'Select an Item'}</h1>;
}
