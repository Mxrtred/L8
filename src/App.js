import NumberList from './NumberList';
import StringList from './StringList';
import CardList from './CardList';
import NumberFilter from './NumberFilter';
import AddList from './AddList';

function App() {
  return (
    <div className="App">
      <NumberList />
      <StringList />
      <CardList people={[{name:'Kirill', age:'52'},{name:'NeKirill', age:'21'}]}/>
      <NumberFilter />
      <AddList initialItems={['Sobaka','NeSobaka']}/>
      </div>
    );
}

export default App;
