export const Service = async () => {
  try {
    const url = (`https://api-test-ln.herokuapp.com/articles`);
    const resp = await fetch(url);
    const { articles } = await resp.json();
    return articles
  } catch (error) {
    console.warn(error);
  }
}
