const { https, logger } = require("firebase-functions");
const next = require("next");

const nextjsDistDir = require("./next.config.js").distDir;

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextApp = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => {
    logger.info(req.path, req.query);
    return nextjsHandle(req, res);
  });
});
