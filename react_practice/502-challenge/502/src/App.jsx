import SnackInventory from "./container/SnackInventory"
import DrinkInventory from "./container/DrinkInventory"

function App() {
  return (
    <main className="d-flex justify-content-center vw-100">

    <div className="container-fluid">
      <SnackInventory />
      <DrinkInventory />
    </div>
    </main>
  )
}

export default App
