import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from 'react';

export const useData = () => {
  const [data, setData] = useState([
    // Your initial data here
  ]);

  const updateData = (updatedData) => {
    setData(updatedData);
  };

  return { data, updateData };
};

const data = [
    {
      id: 1,
      name: 'Mithlesh Kumar Singh',
      email: 'singhmithlesh095@gmail.com',
      age: 22,
      city: 'Sarlahi'
    },
    {
      id: 2,
      name: 'Subin Sedhai',
      email: 'suninsedhai002@gmail.com',
      age: 22,
      city: 'Panchthar'
    },
    {
      id: 3,
      name: 'Surohan Maharjan',
      email: 'suron.maharjan@gmail.com ',
      age: 22,
      city: 'lalitpur'
    },
    {
      id: 4,
      name: 'Wonjala Joshi',
      email: 'wonju2joshi@gmail.com ',
      age: 22,
      city: 'Lalitpur'
    },
    {
      id: 5,
      name: 'Sadhana Sapkota',
      email: 'mandeyra7@gmail.com',
      age: 22,
      city: 'Dhading'
    }
];


const updateData = (updatedUserData) => {
  data = updatedUserData;
};

export {updateData };

export default data; 