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
      username: 'Mithlesh Kumar Singh',
      email: 'singhmithlesh095@gmail.com',
      age: 23,
      city: 'Sarlahi'
    },
    {
      id: 2,
      username: 'Subin Sedhai',
      email: 'suninsedhai002@gmail.com',
      age: 22,
      city: 'Kathmandu'
    },
    {
      id: 3,
      username: 'Surohan Maharjan',
      email: 'suron.maharjan@gmail.com ',
      age: 22,
      city: 'lalitpur'
    },
    {
      id: 4,
      username: 'Wonjala Joshi',
      email: 'wonju2joshi@gmail.com ',
      age: 22,
      city: 'Lalitpur'
    },
    {
      id: 5,
      username: 'Sadhana Sapkota',
      email: 'mandeyra7@gmail.com',
      age: 22,
      city: 'Kathmandu'
    }
];


const updateData = (updatedUserData) => {
  data = updatedUserData;
};

export {updateData };

export default data; 




