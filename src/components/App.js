import NavBar from "./navbar/NavBar";
import NavigationRouter from "./router/NavigationRouter";

const App = () => {
  return (
    <>
      <NavigationRouter />
      {/* <ItemListContainer greeting={'Belleza, Cosmetica y Cuidado personal '} /> */}
      <footer style={{ display: 'flex' }}>
        <p>footer</p>
      </footer>
    </>

  )
}

export default App;
