import camelCase from 'lodash/camelCase';

type Column = {
  title: string;
  dataIndex: string;
  key: string;
};

export const createColumnsForTable = (columns: string[]): Column[] => {
  return columns.map((column) => ({
    title: column,
    dataIndex: camelCase(column),
    key: camelCase(column),
  }));
};