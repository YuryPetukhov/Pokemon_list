import { ErrorBoundary } from 'react-error-boundary';
import ListOfPokemons from './components/ListOfPokemonts';

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<div>Global error in Application</div>}>
        <ListOfPokemons />
      </ErrorBoundary>
    </div>
  );
}

export default App;
