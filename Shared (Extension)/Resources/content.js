(function() {
  const url = new URL(window.location.href);
  if (url.hostname === 'www.google.com' && url.pathname === '/search') {
    if (!url.searchParams.has('udm')) {
      url.searchParams.append('udm', '14');
      window.location.replace(url.toString());
    }
  }
})();
