const URL_SERVER = 'http://localhost:3000/api';

export async function getFeaturesApi() {
  return fetch(URL_SERVER + '/featured')
    .then((response) => response.json())
    .then((data) => data);
}
export async function getStoryApi() {
  return fetch(URL_SERVER + '/story')
    .then((response) => response.json())
    .then((data) => data);
}
export async function getLatestPostApi(param) {
  return fetch(URL_SERVER + `/latestPost?limit=${param}`)
    .then((response) => response.json())
    .then((data) => data);
}
