import AlertClock from "./component/AlertClock";

function App() {
  function handleButtonClick() {
    const data = new Date();
    alert(
      `Orario attuale ${data.toLocaleTimeString()}, e la data attuale ${data.toLocaleDateString()}`
    );
  }
  return (
    <>
      <AlertClock clock={handleButtonClick} />
    </>
  );
}

export default App;
