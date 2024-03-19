import "./App.css";
import data from "./assets/data.json";
import FootballScoreboard from "./FootballScoreboard";
function App() {
  return (
    <div className="app">
      <FootballScoreboard data={data} />
    </div>
  );
}
export default App;
