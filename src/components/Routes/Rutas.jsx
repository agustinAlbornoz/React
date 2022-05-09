import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "../Item/ItemListContainer"
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer"
import Layout from "../Layout/Layout"
import Error from "../Error/Error"


const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ItemListContainer />}/>
                        <Route path="/movies/:id" element={<ItemDetailContainer />}/>
                    </Route>

                        <Route path="*" element={<Error/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas