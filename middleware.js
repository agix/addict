const fs = require('fs');
module.exports = app => {
  app.use(function(req, res, next) {
    if (req.method === 'GET' && req.url.startsWith('/api')) {
      next();
      return true;
    }
    if ('adapi-auth' in req.headers) {
      const auth = JSON.parse(fs.readFileSync(process.env['ADDICT_AUTH']));
      const rules = auth[req.headers['adapi-auth']];
      if (typeof rules !== 'undefined') {
        const authorized = rules.find(rule => {
          const route = new RegExp(`^${rule.route}$`);
          return rule.method === req.method && route.test(req.url);
        });
        if (typeof authorized !== 'undefined') {
          next();
          return true;
        }
      }
    }

    res.writeHead(403, 'No way', {});
    res.end(JSON.stringify({ reason: 'No way' }));
  });
};
