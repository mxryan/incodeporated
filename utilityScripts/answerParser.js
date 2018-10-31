
function insert(str, n) {
  if (str == "" || str == null) return n.toString();
  const pieces = str.split("-");
  let i = 0;
  while (n > parseInt(pieces[i])) {
    i++;
  }
  if (parseInt(pieces[i]) == n) return str;
  pieces.splice(i, 0, n);
  return pieces.join("-");
}

const test_strings = [
  null,
  "",
  "1",
  "1-3",
  "1-3-7"
]

