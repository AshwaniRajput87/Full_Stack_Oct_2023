import Counter from "./components/withoutRedux"
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import CounterWithRedux from "./components/withRedux/CounterWithRedux";
import CounterInputWithRedux from "./components/withInputRedux/CounterInputWithRedux";
import UserDataWithRedux from "./components/user/User.jsx";
const App = () => {

  return (
    <Provider store={store}>
      <Counter />
      <CounterWithRedux />
      <CounterInputWithRedux />
      <UserDataWithRedux />
     </Provider>

  )
}

export default App
