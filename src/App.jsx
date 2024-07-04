// import './components/Buttons'
import Buttons from './components/Buttons';
import './styles/App.css'

const App = () => {
  return (
    <>
      <main>
        <div className="characterDescription">
          <h1>Obanai Iguro</h1>
          <h2>Serpent Hashira</h2>
        </div>
        <div className="fillerP">
          <img src="/images/Obanai.webp" alt="" />
        </div>
        <Buttons />
      </main>
    </>
  )
}

export default App;