declare module '@webcomponents/custom-elements';

if (typeof PRERENDER === 'boolean') {
  // @ts-ignore
  window.customElements = {
    define() {},
  };
  // @ts-ignore
  window.MessagePort = function () {};
  // @ts-ignore
  window.matchMedia = function () {
    return { addListener() {} };
  };
  require('./init-app.tsx');
} else if (!('customElements' in self)) {
  import('@webcomponents/custom-elements').then(() => {
    require('./init-app.tsx');
  });
} else {
  require('./init-app.tsx');
}
