function compareVersions (version1, version2) {
  version1 = version1.split('.');
  version2 = version2.split('.');
  const l = Math.max(version1.length, version2.length);
  version1.length = l;
  version1.length = l;

  for(let i = 0; i < l; i++) {
    if(!version1[i]) version1[i] = 0;
    if(!version2[i]) version2[i] = 0;

    if(+version1[i] > +version2[i]) return true;
    if(+version1[i] < +version2[i]) return false;
  }
  return true;
}