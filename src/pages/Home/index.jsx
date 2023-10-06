import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../data/accommodations.json'
import '../../styles/card.css'

function App() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {data.map((accommodation) => (
          <Card key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
    </>
  );
}

export default App;
