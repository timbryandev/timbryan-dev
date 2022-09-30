const removeFileExtension = (string: string) =>
  string.substring(0, string.lastIndexOf('.')) || string;

export default removeFileExtension;
