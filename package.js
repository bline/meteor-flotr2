Package.describe({
  summary: "Packaging of flotr2"
});

Package.on_use(function (api) {
  api.add_files([
    'Flotr2/flotr2.js'
  ], 'client');
});

