import TierList from "./components/TierList"

function App() {
  return (
    <div className="App">
      <header>TTSLabs</header>
      <div className="TierListContainer">
        <header className="TierListHeader">Tier Lists</header>
        <div className="TierListContents">
          <TierList></TierList>
        </div>
      </div>
      <div className="InferencesContainer">
        <header className="InferencesHeader">Our product (Inferences)</header>
        <div className="InferencesContents"></div>
      </div>
      <div className="ContactInfoContainer">
        <header className="ContactInfoHeader">Contact Info</header>
        <div className="ContactInfoContents"></div>
      </div>
    </div>
  );
}

export default App;
