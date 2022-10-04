const removeFileExtension = (string: string) => {
  const trimmed = string.substring(0, string.lastIndexOf('.'));

  if (trimmed.length > 0) return trimmed;

  return string;
};

export default removeFileExtension;
