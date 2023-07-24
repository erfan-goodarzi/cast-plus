import { useQuery } from 'react-query';

import { client } from '../Client';

const getCategories = (): Promise<Categories> => {
  return client.categories();
};

export const useGetCategories = () => {
  return useQuery<Categories>(`category`, async () => getCategories());
};
