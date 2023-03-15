export const extractIdFromUrl = (url: string): number => {
  const splitUrl = url.split('/');

  return parseInt(splitUrl[splitUrl.length - 2], 10);
};
