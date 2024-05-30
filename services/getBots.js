import client from './client';

export const getBots = async () => {
  const route = 'getBots';
  const url = `${route}`;

  const {data} = await client.get(url);

  return data;
};
