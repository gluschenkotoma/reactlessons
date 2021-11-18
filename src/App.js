import { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

const CustomLoader = () => (
  <Loader type="Rings" color="#00BFFF" height={80} width={80} />
);

// async-aсинхронная фу-я
// await -подожди пока ты выполнийся
// data -результат выполнения
const fetchNews = async (page = 1) => {
  return await axios.get(`
    https://newsapi.org/v2/everything?q=tesla&from=2021-10-18&sortBy=publishedAt&apiKey=81ca568593d14411b4ea31670213b42d&page={page}`);
};

// fetchNews()
// const getNews = fetchNews();
// console.log('getNews', getNews); //getNews Promise {<pending>}

class App extends Component {
  state = {
    news: [],
    errors: { message: '', status: '' },
    loadingloading: true,
    currentPage: 1,
  };

  componentDidMount() {
    // самовызывающаяся фу-я , которая запишет в стейт массив данных с запроса
    (async () => {
      try {
        const news = await fetchNews();
        console.log('news', news);
        this.setState({ news: news.data.articles, loading: false }); // в components state  news:[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
      } catch (error) {
        console.log('error.response', error.response); // в components state errors:"Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTP header."
        this.setState({
          errors: {
            message: error.response.data.message,
            status: error.response.status,
          },
          loading: false,
        });
      }
    })();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      (async () => {
        try {
          this.setState({ loading: true });
          // this.state.currentPage -актуальность page
          const news = await fetchNews(this.state.currentPage);
          console.log('news', news);
          this.setState({
            news: [...prevState.news, ...news.data.articles],
            loading: false,
          }); // в components state  news:[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
        } catch (error) {
          console.log('error.response', error.response); // в components state errors:"Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTP header."
          this.setState({
            errors: {
              message: error.response.data.message,
              status: error.response.status,
            },
            loading: false,
          });
        }
      })();
    }
  }
  //   меод изменения currentPage(загрузка страниц)
  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const { loading, errors, news } = this.state;
    return (
      <>
        {loading && <CustomLoader />}
        {errors.message ? (
          <h2>{errors.message}</h2>
        ) : (
          <>
            {news.map(article => (
              <h2>{article.content}</h2>
            ))}
            <button type="button" onClick={this.nextPage}>
              Load more ...
            </button>
          </>
        )}
      </>
    );
  }
}

export default App;
