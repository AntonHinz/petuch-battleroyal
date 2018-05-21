import config from './config';


export const api = (url, data) => {
  const defaultOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }

  const heads = Object.assign({}, defaultOptions.headers, data.headers);

  const options = Object.assign({}, defaultOptions, data, { headers: heads });
  console.log(options);

  return fetch(config.api + url, options)
    .then((res) => res.json())
    .catch(error => error);
}


export const pushScore = async (data) => {
  const result = await api('push-score', data);

  return result;
}