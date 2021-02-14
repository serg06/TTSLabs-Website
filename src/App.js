import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import logo from "./images/logo.png"

import TierList from "./components/TierList"
import InferenceTierList from "./components/InferenceTierList"

function App() {
  return (
    <div className="App">
      <img className="logo" src={ logo } alt="Logo"></img>
      <section className="TierList">
        <header className="TierListHeader">
          Our Plans
          <p1 className="TierListHeaderText">
            Cock and ball torture (CBT) is a sexual activity involving application of pain or constriction to the male genitals. This may involve directly painful activities, such as wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation or even kicking.[1] The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.
          </p1>
        </header>
        <TierList/>
      </section>
      <section className="InferenceTierList">
        <header className="InferenceTierListHeader">
          Inferences
          <p1 className="InferenceTierListHeaderText">
            Yeah I read that too. Are you gonna plagiarize the whole thing for us? Do you have any thoughts of your own on this matter? Is that your thing? You come into a thread, you copy some obscure passage and then paste it off as your own idea just to impress some of your "crew" and downvote my friend? See the sad thing about a guy like you is that in 50 years you're gonna start doing some thinking on your own and you're gonna come up with the fact that there are two certainties in life One, you are a talentless and unoriginal hack. And two, you wasted time trying to post other people's thoughts as your own while you could've been honing your skills to be actually creative instead of a thoughtless loser with a paste fetish.
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
