# Сoздать папку redux

- actions.js
- reducer.js -
- store.js -
- хранилище - types.js

# index.js

- подключение редакс import { Provider } from 'react-redux'
- <Provider store={store}> <App /></Provider>
- store={store} --глобальное хранилище, импортируестся с папки редакс
- import { store} from'../src/redux/store'

# store.js

- взять с редакса createStore - import { createStore } from 'redux';

- создать store - export const store = createStore(notes, devToolsEnhancer());
- 1й - редюсер, 2й-энхансер

- import { devToolsEnhancer } from 'redux-devtools-extension';
- import { notes } from './reducer';

# TodoForms

- import { useDispatch } from 'react-redux'; хук useDispatch
- const dispatch = useDispatch() - портал

* `handlesubmit`
* dispatch({type:'addTodo', payload:{...todo, id:uuid()}})
* dispatch(addTodo({ ...todo, id: uuid() })); oбращение к экшену
