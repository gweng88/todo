
import PageHeader from './Components/PageHeader';
import TodoContainer from './Components/TodoContainer';

//export const EditModeContext = createContext(false);

const App = () => {
  return (
    <div>
      <PageHeader/>
      <TodoContainer/>
    </div>
  );
}

export default App;