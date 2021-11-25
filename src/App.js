import React, { createContext, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './views/Home';
import { Loading } from './components/Loading';
import { theme } from './theme/colors';

//LAZY react+обертка Suspense c fallback
const AsyncTeacher = lazy(() => import('./views/Teacher'));
const AsyncForm = lazy(() => import('./views/Form'));
const AsyncTeachers = lazy(() => import('./views/Teachers'));

// import { Form } from './views/Form';
// import { Teachers } from './views/Teachers';
// import { Teacher } from './views/Teacher';

// import { asyncComponent } from './hocs/asyncComponent';
// LAZYсамописный вариант hoks
// const AsyncTeachers = asyncComponent({
//   loader: () => import('./views/Teachers'),
//   loading: Loading,
// });

// HOOK CREATECONTEXT theme.light-какую тему передаем
export const ThemeContext = createContext(theme.dark);

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={theme.light}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/form" element={<AsyncForm />} />
            <Route path="/teachers" element={<AsyncTeachers />} />
            <Route path="/teachers/:id" element={<AsyncTeacher />} />
            {/* <Route path="/teachers" element={<AsyncTeachers />} /> */}
          </Routes>
        </Suspense>
      </ThemeContext.Provider>
    );
  }
}

export default App;
