const liveServer = require("live-server");
const toLittlein = require("to-littlein");

const port = 8181;

const getFile = () => {
  switch (process.env.NODE_ENV) {
    case "A2HS":
      return "./add-to-home-screen";
    case "instagram":
      return "./instagram-ux";
    default:
      return "./push-notification";
  }
};

const params = {
  port, // Set the server port. Defaults to 8080.
  host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: getFile(), // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  mount: [["/components", "./node_modules"]], // Mount a directory to a route.
  logLevel: 2 // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);
toLittlein.connect(port).then(url => console.log(url));
