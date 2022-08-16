import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../item/ItemListContainer";
import NavBar from '../navbar/NavBar'

const NavigationRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route exact path="*" element={<>404 not found</>} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavigationRouter