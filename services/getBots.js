import client from './client';

export const getBots = async () => {
  const route = 'getBots';
  const url = `${route}`;
  try {
    const {data} = await client.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
