import Card from 'antd/lib/card';
import React from 'react';
// import { debounce } from 'lodash';
// import map from 'lodash/map';

// const A = debounce(() => {
//   console.log(1);
// }, 1000);

export default ({ title }: { title: string }) => {
  //   A();
  return (
    <h1>
      <Card title="卡片" />
      {/* {map([1, 2], (item) => (
        <div>{item}</div>
      ))} */}
    </h1>
  );
};
