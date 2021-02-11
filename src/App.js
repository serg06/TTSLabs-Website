import TierList from "./components/TierList"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function App() {
  return (
    <div className="App">
      <header className="title">TTSLabs</header>
      <section className="TierList">
        <header className="TierListHeader">Tier Lists</header>
        <div className="TierListContents">
          <TierList/>
        </div>
      </section>
      <section className="Inferences">
        <header className="InferencesHeader">Our product (Inferences)</header>
        <div className="InferencesContents"></div>
      </section>
      <section className="ContactInfo">
        <header className="ContactInfoHeader">Contact Info</header>
        <div className="ContactInfoContents"></div>
      </section>
    </div>
  );
}

export default App;
