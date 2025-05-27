import travel_journal_data from "./data/travel_journal_data.js";
import HeaderTravel from "./components/HeaderTravel";
import TravelJournalArticle from "./components/TravelJornalArticle";
import "./travel_journal.css";

function TravelJounalApp() {
  return (
    <>
      <HeaderTravel />
      <main>        
        {
          travel_journal_data.map((travelData) => (<TravelJournalArticle key={travelData.name} data={travelData}/>))
        }        
      </main>
    </>
  );
}

export default TravelJounalApp;
