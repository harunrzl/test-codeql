function getItem(sKey) {
  if (!sKey) {
    return null;
  }

  if (!canUseDOM || !document || !document.cookie) {
    return false;
  }

  const regexKeyPart = encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$\\&');
  const fullRegex = new RegExp(`(?:(?:^|.*;)\\s*${regexKeyPart}\\s*\\=\\s*([^;]*).*$)|^.*$`);

  return decodeURIComponent(document.cookie.replace(fullRegex, '$1')) || null;
};

function hasItem(sKey) {
  if (!sKey) {
    return false;
  }

  if (!canUseDOM || !document || !document.cookie) {
    return false;
  }

  const regex = new RegExp(`(?:^|;\\s*)${encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&')}\\s*\\=`);

  return regex.test(document.cookie);
};