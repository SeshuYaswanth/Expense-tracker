import './App.css';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { Transactions } from './Components/Transactions';
import { History } from "./Components/History";
import { AddNotes } from './Components/AddNotes';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Transactions />
        <AddNotes />
        <History />
      </div>
    </GlobalProvider>
  );
}

export default App;
