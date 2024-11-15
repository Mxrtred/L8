import './App.css';
import NumberList from './NumberList';
import StringList from './StringList';
import CardList from './CardList';
import NumberFilter from './NumberFilter';
import AddList from './AddList';
import AddDelete from './AddDelete';
import Alphabet from './Alphabet';
import NamePriceTable from './NamePriceTable';
import HoverList from './HoverList';
import ImageGrid from './ImageGrid';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <div className="App">
      <NumberList />
      <StringList />
      <CardList people={[{ name: 'Kirill', age: '52' }, { name: 'NeKirill', age: '21' }]} />
      <NumberFilter />
      <AddList initialItems={['Sobaka', 'NeSobaka']} />
      <AddDelete />
      <Alphabet items={['Артем', 'Саша', 'Кирилл', 'Юра',]} />
      <NamePriceTable products={[{ name: 'CSS', price: '$500' }, { name: 'JS', price: '$1000' }]} />
      <HoverList items={['Цвет', 'Должен', 'Меняться']} />
      <ImageGrid images={[
        { url: 'https://www.meme-arsenal.com/memes/063b3419c3214f2287bc7dd1232ddef5.jpg' },
        { url: 'https://avatars.mds.yandex.net/i?id=6ffb99d8e46001d9518a2a0686c86bb7_l-7069324-images-thumbs&n=13' },
        { url: 'https://i.pinimg.com/736x/9e/97/68/9e97684a69cd2c9c4580c9e82adf2a0c.jpg' }
      ]} />
      <ImageGallery
        images={[
          { url: 'https://i.pinimg.com/736x/f9/36/a5/f936a5efed8b13d15208a4ff6f346d65.jpg' },
          { url: 'https://ih1.redbubble.net/image.2479090846.2689/st,small,507x507-pad,600x600,f8f8f8.jpg' },
          { url: 'https://upload.wikimedia.org/wikipedia/ru/4/43/SwoleDogeVSCheems.jpg' },
          { url: 'https://i.pinimg.com/736x/7b/1e/b9/7b1eb944285fe8822ebe3fc0a036e1f9.jpg' },
        ]} />
    </div>
  );
}

export default App;
