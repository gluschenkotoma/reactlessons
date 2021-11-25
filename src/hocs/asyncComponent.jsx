import { Component } from 'react';
// import { Loading } from '../components/Loading';

export const asyncComponent = ({ loader, loading: Loading }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await loader(); //подгрузка компонента

      this.setState({ component }); //засетить в стэйт компонент
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};
//LAZY САМОПИСНЫЙ ВАРИАНТ
// App -const AsyncTeachers = asyncComponent({
//   loader: () => import('./views/Teachers'),
//   loading: Loading,
// });
// в loader записана фу-я которая возвращает компонент з дефюэкспортом
