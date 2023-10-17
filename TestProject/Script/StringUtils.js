
const getFirstWord = (text) => {
  let cleanedText = text.replace(/,/g, '');
  let words = cleanedText.split(/\s+/);
  return words[0];
}

const getLastWord = (text) => {
  let cleanedText = text.replace(/,/g, '');
  let words = cleanedText.split(/\s+/);
  return words[words.length - 1];
}


module.exports = { getFirstWord, getLastWord };