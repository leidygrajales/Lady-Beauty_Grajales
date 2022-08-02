import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'¿Deseas viajar y no sabes a dónde ir?'} />
      <main>
        <h2>Home</h2>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>

  )
}

export default App;
