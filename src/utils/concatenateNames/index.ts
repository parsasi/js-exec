export const concatenateNames = (names: string[]): string =>
  names.reduce((finalText, currentName, index) => {
    if (currentName) {
      finalText += index === 0 ? `${currentName}` : `, ${currentName}`;
    }
    return finalText;
  }, "");
