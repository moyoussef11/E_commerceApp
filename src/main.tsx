import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
