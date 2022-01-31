import axios from 'axios';
import humps from 'humps';
import { get } from 'lodash';

const API_URI = 'http://localhost:3010';

const CLIENT = 'clientlocal12345';
const SECRET = 'secretlocal12345';

const path = url => `${API_URI}${url}`;

function processResponse(response) {
  return humps.camelizeKeys(response.data);
};

async function fetch(url, config) {
  const { headers, method, ...rest } = config;

  const options = {
    method,
    headers: {
      // client: CLIENT,
      // secret: SECRET,
      'Content-Type': 'application/json',
      post: { 'Content-Type': 'application/json' },
      ...headers,
    },
    ...rest,
  };
  
  try {
    return processResponse(await axios(path(url), options));
  } catch (e) {
    const status = get(e, 'response.status');
    const data = get(e, 'response.data');
    console.log('error', data);
    throw e;
  };
};

export { fetch };