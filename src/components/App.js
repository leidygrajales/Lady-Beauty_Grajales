import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Belleza, cosmetica y cuidado personal '} />
      <footer style={{ display: 'flex' }}>
        <p>footer</p>
      </footer>
    </>

  )
}

export default App;
