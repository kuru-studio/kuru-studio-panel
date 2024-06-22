'use client';
import { Input } from 'antd';
const { Search } = Input;

export default () => {
  return <Search placeholder="Search..." allowClear onSearch={null} style={{ width: 200 }} />;
};
