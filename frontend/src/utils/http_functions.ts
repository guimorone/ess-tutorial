export const jsonAcceptHeaders = {
  Accept: 'application/json;',
};

const jsonPostHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
};

const jsonPostFormHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
};

const textPlainFormHeaders = {
  'Content-Type': 'text/plain',
};

const addHeaders = (opts: any, headers: any): any => {
  if (headers !== undefined) opts['headers'] = { ...opts['headers'], ...headers };
  return opts;
};

export async function doPost(url: string, body: any): Promise<Response> {
  let opts = addHeaders(
    {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(body),
    },
    { ...jsonPostHeaders }
  );
  return fetch(url, opts);
}
export function doFormPost(url: string, params: any, headers: any): Promise<Response> {
  const searchParams = Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');

  let opts = addHeaders(
    {
      method: 'POST',
      credentials: 'same-origin',
      body: decodeURIComponent(searchParams),
    },
    { ...headers, ...jsonPostFormHeaders }
  );
  return fetch(url, opts);
}

export function doPostFile(url: string, body: any, headers: any): Promise<Response> {
  let opts = addHeaders(
    {
      method: 'POST',
      credentials: 'same-origin',
      body: body,
    },
    { ...headers }
  );
  return fetch(url, opts);
}

export async function doPut(url: string, body: any, headers: any, isPayloadTextPlain: boolean): Promise<Response> {
  let extraHeaders = isPayloadTextPlain ? { ...textPlainFormHeaders } : { ...jsonPostFormHeaders };
  let opts = addHeaders(
    {
      method: 'PUT',
      credentials: 'same-origin',
      body: isPayloadTextPlain ? body : JSON.stringify(body),
    },
    { ...headers, ...extraHeaders }
  );
  return fetch(url, opts);
}

export async function doDelete(url: string, body: any, headers: any): Promise<Response> {
  let opts = addHeaders(
    {
      method: 'DELETE',
      credentials: 'same-origin',
      body: JSON.stringify(body),
    },
    { ...headers, ...jsonPostHeaders }
  );
  return fetch(url, opts);
}

export async function doGet(url: string, headers: any): Promise<Response> {
  const params = { ...headers };
  const opts = addHeaders(
    {
      method: 'GET',
      credentials: 'same-origin',
    },
    params
  );

  return fetch(url, opts);
}
