import client from './client';

export const sendPrompt = async (prompt, botId) => {
  const route = 'converse';
  const url = `${route}`;

  const {data} = await client.post(url, {message: prompt, botId});

  return data;
};
