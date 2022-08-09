import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Belleza, cosmetica y cuidado personal '} />
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
