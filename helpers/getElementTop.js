function getElementTop (element) {
  if (element && 'offsetTop' in element) {
    let actualTop = element.offsetTop;
    let currentParent = element.offsetParent;

    while (currentParent !== null) {
      actualTop += currentParent.offsetTop;
      currentParent = currentParent.offsetParent;
    }

    return actualTop;
  }
}

export default getElementTop;