import removeFileExtension from './removeFileExtension';

describe('util:removeFileExtension', () => {
  it('should remove extension', () => {
    const path = 'path/to/file.tsx';
    const expected = 'path/to/file';
    const result = removeFileExtension(path);
    expect(result).toBe(expected);
  });

  it('should only remove last instance of an extension', () => {
    const path = 'path/to/file.test.tsx';
    const expected = 'path/to/file.test';
    const result = removeFileExtension(path);
    expect(result).toBe(expected);
  });

  it('should not remove folder names with dot syntax', () => {
    const path = 'path/to.d/file.test.tsx';
    const expected = 'path/to.d/file.test';
    const result = removeFileExtension(path);
    expect(result).toBe(expected);
  });

  it('should return the original string if no extension is found', () => {
    const path = 'path/to/file';
    const expected = 'path/to/file';
    const result = removeFileExtension(path);
    expect(result).toBe(expected);
  });
});
