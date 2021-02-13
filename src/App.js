import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import TierList from "./components/TierList"
import InferenceTierList from "./components/InferenceTierList"

function App() {
  return (
    <div className="App">
      <header className="title">TTSLabs</header>
      <section className="TierList">
        <header className="TierListHeader">Tier Lists</header>
        <TierList/>
      </section>
      <section className="InferenceTierList">
        <header className="InferenceTierListHeader">Inferences</header>
        <InferenceTierList/>
      </section>
      <section className="ContactInfo">
        <header className="ContactInfoHeader">Contact Info</header>
        <div className="ContactInfoContents"></div>
      </section>
    </div>
  );
}

export default App;
