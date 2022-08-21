export const removeHtmlTag = (str: string) => str.replaceAll(/<[^>]*>/g, '');
