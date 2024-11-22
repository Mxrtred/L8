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
        { url: 'https://i.pinimg.com/736x/9e/97/68/9e97684a69cd2c9c4580c9e82adf2a0c.jpg' },
      ]} />
      <ImageGallery
        images={[
          { url: 'https://i.pinimg.com/736x/f9/36/a5/f936a5efed8b13d15208a4ff6f346d65.jpg' },
          { url: 'https://ih1.redbubble.net/image.2479090846.2689/st,small,507x507-pad,600x600,f8f8f8.jpg' },
          { url: 'https://upload.wikimedia.org/wikipedia/ru/4/43/SwoleDogeVSCheems.jpg' },
          { url: 'https://steamuserimages-a.akamaihd.net/ugc/2381928551685454191/755FF732B877FB47B0CCC84E39A9A575CF1B6E1B/?imw=512&amp;imh=307&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' },
          { url: 'https://www.meme-arsenal.com/memes/5a361999b9e82f968d4be3b4f5263fb9.jpg' },
          { url: 'https://yt3.ggpht.com/ytc/AMLnZu9F3qw_Xf1WcoY2wWavJvx6FQSE47i0c3I7u6dopA=s900-c-k-c0x00ffffff-no-rj' },
        ]} />
    </div>
  );
}

export default App;
