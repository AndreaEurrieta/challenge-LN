export const Service = async() => {
  try {
    const url = (`https://api-test-ln.herokuapp.com/articles`);
    const resp = await fetch ( url );
    const { articles } = await resp.json();
    return articles
  } catch (error) {
      console.warn(error);
  }
}



// export const Service = async() => {
//   const [articles, setArticles] = useState([]);
//   const [loader, setLoader] = useState(flase);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//    const getArticles = async() => {
//     try {
//       const url = (`https://api-test-ln.herokuapp.com/articles`);
//       const resp = await fetch ( url );
//       const { articles } = await resp.json();
//       return articles
      
//     } catch (error) {
//       setError(error);
//       setLoader(true);
//     }

//    }
//    getArticles();
//   }, []);
// }


