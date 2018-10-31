declare module '@webcomponents/custom-elements';

if (!('customElements' in self)) {
  import('@webcomponents/custom-elements').then(() => {
    require('./init-app.tsx');
  });
} else {
  require('./init-app.tsx');
}
