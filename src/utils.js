const Utils = {
  prepareData: (str) => {
    let prepStr = "";
    let isLastLetterSplitter = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "|" && isLastLetterSplitter) continue;
      prepStr += str[i];
      isLastLetterSplitter = str[i] === "|";
    }
    return prepStr;
  },
};

module.exports = Utils;
