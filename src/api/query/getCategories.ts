import { client } from '..';
import { useQuery } from 'react-query';

const getCategories = (): Promise<Categories> => {
  return client.categories();
};

export const useGetCategories = () => {
  return useQuery<Categories>(`category`, async () => await getCategories());
};
