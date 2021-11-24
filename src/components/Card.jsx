import React from 'react';
import PropTypes from 'prop-types';
function Card({ id, name, surname, description, handleDelete }) {
  const onDelete = () => {
    handleDelete(id);
  };
  // handleDelete = () => {
  //   this.props.handleDelete(this.props.id);
  // };

  // const { name = 'No name', surname, description } = this.props;

  return (
    <div>
      <p>
        {name} {surname}
      </p>
      {description && <p>О преподавателе: {description}</p>}
      {!description && <p>Нет информации</p>}

      <button onClick={onDelete}>Удалить</button>
    </div>
  );
}
Card.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleDelete: PropTypes.func,
};
export { Card };

/**
 *
 * return articles.length > 0 ? <ArticleList articles={articles} /> : null;
 * return isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />;
 * 
 return isLoading ? <p>Loading...</p> : articles.length > 0 ? <ArticleList articles={articles} /> : null

 return (
   <>
   {isLoading && <p>Loading...</p>}
   {articles.length > 0 ? <ArticleList articles={articles} /> : null}
   </>
 )
 */

/**
 * componentDidUpdate(prevProps) {
 *   if (this.props.field !== prevProps.field) {
 *     fetch(.....)
 *       .then((data) => {
 *         this.setState(prevState => ({ items: [...prevState.items, ...data.newItems] }))
 *       })
 *   }
 * }
 */
