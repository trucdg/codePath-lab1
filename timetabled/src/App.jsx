import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div classNAme="App">
      <h1> Schedule for a Productive Week </h1>
      <h2>
        This is a standard 1-week schedule for a busy college student who wants
        to maintain a healthy and balance lifestyle.
      </h2>
      <Calendar />
    </div>
  );
};

export default App;
