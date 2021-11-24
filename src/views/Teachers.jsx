import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';

import { List } from '../components/List';
import { getTeachers, deleteTeacher } from '../api/teachers';

/**
 * Section { items }
 *  Form
 *    Input (3)
 *    Button
 *  List
 *    ListItem
 */
//запуск 2bash npm run server+ npm start

function Teachers() {
  // setShowed - фу-я для обновления поля
  // showed - переменная состояния
  // (true) - дефолтное значение состояния

  // const [showed, setShowed] = useState(true);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  // state = {
  //   showed: true,
  //   items: [],
  //   loading: false,
  // };

  // масив зависимостей пустой потому что вызов дидмаунт 1 раз
  // async выносится в одельную фу-ю, и потом эта функция вызивается внутри useEffect
  // getTeachers();-export const getTeachers = async () => { const { data } = await axios.get(`${BASE_URL}/teachers`); return data; }; с api
  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const teachers = await getTeachers();
        setItems(teachers);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);
  // async componentDidMount() {
  //   setState({ loading: true });
  //   try {
  //     const items = await getTeachers();
  //     setState({ items });
  //   } finally {
  //     setState({ loading: false });
  //   }
  // }

  // приставка prev - это предсостояние, предсостояние состояния-переменной setShowed -Showed
  // const handleToggle = () => {
  //   setShowed(prevShowed => !prevShowed);
  // };
  // handleToggle = () => {
  //   setState(prevState => ({ showed: !prevState.showed }));
  // };

  // const handleAddItem = async item => {
  //   try {
  //     const response = await addTeacher(item);
  //     setItems(prevItems => [...prevItems, response]);
  //   } catch (error) {
  //     alert(error.toString());
  //   }
  // };

  // handleAddItem = async item => {
  //   try {
  //     const res = await addTeacher(item);

  //     setState(prevState => ({
  //       items: [...prevState.items, res],
  //     }));
  //   } catch (error) {
  //     alert(error.toString());
  //   }
  // };

  const handleDeleteItem = id => {
    deleteTeacher(id)
      .then(() => {
        setItems(prevItems => prevItems.filter(i => i.id !== id));
      })
      .catch(error => {
        alert(error.toString());
      });
  };
  // handleDeleteItem = id => {
  //   deleteTeacher(id)
  //     .then(() => {
  //       setState(prevState => ({
  //         items: prevState.items.filter(i => i.id !== id),
  //       }));
  //     })
  //     .catch(error => {
  //       alert(error.toString());
  //     });
  // };
  const filterItems = () => {
    setFilteredItems(items.filter(item => item.description));
  };

  return (
    <>
      <Header size="h2" title="Список преподавателей" />
      {loading && <p>Loading...</p>}
      {items.length > 0 && <List items={items} deleteItem={handleDeleteItem} />}
      <br />
      <button onClick={filterItems} type="button">
        Show with description
      </button>
      {filteredItems.length > 0 && <List items={filteredItems} />}
      {/* <Button
        name={showed ? 'Скрыть форму' : 'Показать форму'}
        onClick={handleToggle}
      /> */}
      <hr />

      <br />

      {/* {showed ? <Form onSubmit={handleAddItem} /> : null} */}
      <Link to="/form">Форма добавления преподавателей</Link>
    </>
  );
}

export { Teachers };
