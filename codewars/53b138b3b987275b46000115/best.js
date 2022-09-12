const compareVersions = (v1, v2) => {
  const a1 = v1.split('.').map(Number);
  const a2 = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
    let n1 = a1[i] || 0, n2 = a2[i] || 0;
    if (n1 === n2) continue;
    return (n1 > n2) ? true : false;
  }
  return true;
};