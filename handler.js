const staticInitTime = Date.now();
console.log('Loading handler. Static init time:', staticInitTime);
let isColdStart = true;

module.exports.hello = async (_event) => {
  let coldStartResult = false;
  if (isColdStart) {
    isColdStart = false;
    coldStartResult = true;
  }
  const handlerRunTime = Date.now();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        staticInitTime,
        handlerRunTime,
        coldStartResult,
        processUptime: process.uptime(),
      },
      null,
      2
    ),
  };
};
