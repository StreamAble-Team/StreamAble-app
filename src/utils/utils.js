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

export { textSanitizer, groupBy };
