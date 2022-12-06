import sanitizer from "sanitize-html";

const textSanitizer = (textWithHTML) => {
  return sanitizer(textWithHTML, {
    allowedTags: [],
  });
};

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

const addZero = (num) => {
  return num < 10 ? `0${num}` : num;
};

const getTitle = (title) => {
  if (!title) return undefined;

  return title.english ?? title.romaji ?? title.native ?? undefined;
};

const getProgress = (media, progress) => {
  return media.episodes ? `${progress}/${media.episodes} EP` : `${progress} EP`;
};

const notEmpty = (value) => {
  return value !== null && value !== undefined;
};

export { textSanitizer, groupBy, addZero, getTitle, getProgress, notEmpty };
