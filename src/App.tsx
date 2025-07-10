import { ContextProvider } from './contexts/ContextProvider';
import HomePage from './pages/Home';

function App() {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}

export default App;
