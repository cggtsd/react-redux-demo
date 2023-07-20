import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import AddTodo  from './components/AddTodo'
import DisplayTodos  from './components/DisplayTodos'
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <Container className='py-3'>
    <AddTodo/>
    <DisplayTodos/>
    </Container>
    </Provider>
  );
}

export default App;
