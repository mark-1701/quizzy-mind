export async function ajax(props) {
  let { url, method, headers, cbSuccess, cbError } = props;
  try {
    let res = await axios(url);
    cbSuccess(res);
  } catch (err) {
    cbError(err);
  }
}