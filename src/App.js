import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {

  const slides = [
    {url: 'img1.jpeg', title: 'Animal1'},
    {url: 'img2.jpeg', title: 'Animal2'},
    {url: 'img3.jpeg', title: 'Animal3'},
    {url: 'img4.jpeg', title: 'Animal4'},
    {url: 'img5.jpeg', title: 'Animal5'}
  ]

  const containerStyles = {
    width: '80%',
    height: '80vh',
    margin: '0 auto'
  }
  return (
    <div className="App">
      <h1>Animals SlideShow</h1>
      <div style={containerStyles}>
      <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
