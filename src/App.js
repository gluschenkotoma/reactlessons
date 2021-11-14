import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import fetchPicturesWithQuery from './tools/PicturesApi';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import styled from 'styled-components';

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    largeImageUrl: '',
    showModal: false,
    page: 1,
    searchQuery: '',
    error: false,
    shouldScroll: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchPictures();
    }
    if (this.state.shouldScroll === true) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchPictures = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    fetchPicturesWithQuery(searchQuery, page)
      .then(pictures =>
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error: true }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      pictures: [],
    });
  };

  toggleModalImg = largeImageUrl => {
    this.setState({ largeImageUrl: largeImageUrl });
    this.setState({ shouldScroll: false });
    this.setState({ showModal: !this.state.showModal });
  };

  handleButton = () => {
    this.fetchPictures();
    if (this.state.page > 1) {
      this.setState({ shouldScroll: true });
    }
  };

  render() {
    const { pictures, isLoading, error, showModal, largeImageUrl } = this.state;

    return (
      <AppStyled>
        {error && <p>Whoops, something went wrong</p>}
        <SearchBar onSubmit={this.handleSearchFormSubmit}></SearchBar>
        {pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            onClose={this.toggleModalImg}
          ></ImageGallery>
        )}
        {showModal && (
          <Modal onClose={this.toggleModalImg} largeImageUrl={largeImageUrl} />
        )}
        {pictures.length > 0 && !isLoading && (
          <Button type="button" onClick={this.handleButton}></Button>
        )}
        {isLoading && <Loader />}
      </AppStyled>
    );
  }
}
