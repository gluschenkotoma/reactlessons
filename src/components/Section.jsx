import { useState, useEffect } from 'react';

import { Button } from './Button/Button';
import { Header } from './Header/Header';
import { Form } from './Form';
import { List } from './List';
import { getTeachers, addTeacher, deleteTeacher } from '../api/teachers';

/**
 * Section { items }
 *  Form
 *    Input (3)
 *    Button
 *  List
 *    ListItem
 */
//запуск 2bash npm run server+ npm start


function Section() {
  // setShowed - фу-я для обновления поля
  // showed - переменная состояния
  // (true) - дефолтное значение состояния
  const [showed, setShowed] = useState(true);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
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
  const handleToggle = () => {
    setShowed(prevShowed => !prevShowed);
  };
  // handleToggle = () => {
  //   setState(prevState => ({ showed: !prevState.showed }));
  // };

  const handleAddItem = async item => {
    try {
      const response = await addTeacher(item);
      setItems(prevItems => [...prevItems, response]);
    } catch (error) {
      alert(error.toString());
    }
  };
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

  return (
    <>
      <Header size="h2" title="Список преподавателей" />
      {loading && <p>Loading...</p>}
      {items.length > 0 && <List items={items} deleteItem={handleDeleteItem} />}
      <br />
      <Button
        name={showed ? 'Скрыть форму' : 'Показать форму'}
        onClick={handleToggle}
      />
      <hr />

      <br />

      {showed ? <Form onSubmit={handleAddItem} /> : null}
    </>
  );
}

export { Section };
