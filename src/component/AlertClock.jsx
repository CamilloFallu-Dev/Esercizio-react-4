function AlertClock() {
  function handleButtonClick() {
    const data = new Date();
    alert(
      `Orario attuale ${data.toLocaleTimeString()}, e la data attuale ${data.toLocaleDateString()}`
    );
  }
  return (
    <div className="flex justify-center bg-blue-100 p-2 shadow-xl">
      <p className="p-2">
        Clicca il pulsante per sapere il seguente orario (attuale)
      </p>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 rounded-lg p-2 text-amber-50 shadow-md"
      >
        Click me!
      </button>
    </div>
  );
}

export default AlertClock;
