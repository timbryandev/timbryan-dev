export function convertTo2D<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];

  arr.forEach((elt, ind) => {
    if (ind % size === 0) {
      res.push([elt]);
    } else {
      res[res.length - 1].push(elt);
    }
  });

  return res;
}

export function convertUrlToLinkHref(url: string): string {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}
