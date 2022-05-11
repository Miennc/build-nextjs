require("isomorphic-fetch");

async function parseJSON(response) {
  const data = await response.json();
  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
}

const isNode = typeof window === "undefined";
const nodeOptions = !isNode
  ? {}
  : {
      agent: new (require("https").Agent)({
        rejectUnauthorized: false,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: global.cookie,
      },
    };

export default function request(path, options = {}) {
  const url = `${process.env.API_URL}/${path}`;
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    ...nodeOptions,
    ...options,
  }).then(parseJSON);
}
