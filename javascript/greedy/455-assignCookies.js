/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      result++;
      index--;
    }
  }
  return result;
};
g = [1, 2, 3];
s = [1, 1];
console.log(findContentChildren(g, s));
