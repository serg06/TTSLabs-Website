import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import TierList from "./components/TierList"
import InferenceTierList from "./components/InferenceTierList"

function App() {
  return (
    <div className="App">
      <header className="title">TTSLabs</header>
      <section className="TierList">
        <header className="TierListHeader">
          Our Plans
          <p1 className="TierListHeaderText">This are our plans and bla bla bla</p1>
        </header>
        <TierList/>
      </section>
      <section className="InferenceTierList">
        <header className="InferenceTierListHeader">
          Inferences
          <p1 className="InferenceTierListHeaderText">
            Those are our inferences and they do this and that and bla bla bla
          </p1>
        </header>
        <InferenceTierList/>
      </section>
      <section className="ContactInfo">
        <header className="ContactInfoHeader"></header>
        <div className="ContactInfoContents"></div>
      </section>
    </div>
  );
}

export default App;
