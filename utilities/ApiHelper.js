const checkIfErrorOccurs = (res) => ({
  res,
  code: res.status,
});

const TIME_OUT = 10000;

async function customFetch(path, headerOptions) {
  const normalFetch = fetch(path, headerOptions);
  const res = await timeoutPromise(
    TIME_OUT,
    normalFetch.then(checkIfErrorOccurs).catch(checkIfErrorOccurs)
  );
  const response = await res.res.json();
  if (!res.code) {
    const newError = {
      code: 404,
      message: 'Fail to fetch',
    };
    throw newError;
  }

  if (res.code < 300) {
    return response;
  }
  const error = {
    code: res.code,
    ...response,
  };
  throw error;
}

export const timeoutPromise = (ms, promise) =>
  new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request time out! Please try again.'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });

export default customFetch;

function requestWrapper(method) {
  const request = async (url, data = null, params = {}) => {
    let convertUrl = 'http://localhost:3000/api/' + url;

    let convertParams = params;
    let convertData = data;
    if (method === 'GET') {
      convertParams = convertData;

      if (convertParams !== null) {
        convertUrl = `${convertUrl}?${getQueryString(convertParams)}`;
      }
      convertData = null;
    } else if (convertData === Object(convertData)) {
      convertData = JSON.stringify(convertData);
    }
    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      defaults.headers.Accept = 'application/json';
      defaults.headers['Content-Type'] = 'application/json';
    }

    if (convertData) {
      defaults.body = convertData;
    }

    const paramsObj = {
      ...defaults,
      headers: {
        ...params,
        ...defaults.headers,
        'Access-Control-Allow-Origin': '*',
      },
    };

    return customFetch(convertUrl, paramsObj);
  };
  return request;
}

export function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .filter((k) => params[k] || params[k] === 0)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');
