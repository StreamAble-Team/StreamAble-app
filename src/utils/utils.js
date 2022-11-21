import sanitizer from "sanitize-html";

const textSanitizer = (textWithHTML) => {
  return sanitizer(textWithHTML, {
    allowedTags: [],
  });
};
export { textSanitizer };
