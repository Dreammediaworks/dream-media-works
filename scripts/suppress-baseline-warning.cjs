const originalWarn = console.warn;

console.warn = (...args) => {
  const [first] = args;

  if (
    typeof first === "string" &&
    first.startsWith("[baseline-browser-mapping] The data in this module is over two months old.")
  ) {
    return;
  }

  originalWarn(...args);
};
