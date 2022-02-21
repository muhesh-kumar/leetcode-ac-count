const s = document.createElement('script');
s.src = chrome.runtime.getURL('bundle.js');
s.defer = true;

s.onload = function() {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);