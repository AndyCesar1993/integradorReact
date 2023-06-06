import { Routes as ReactDomRoutes, Route} from 'react-router-dom'
//import Hero from '../components/Hero/Hero'
import Products from '../components/Podructs/Products'
//import AboutUs from '../components/AboutUs/AboutUs'
import Contact from '../components/Contact/Contact'
import PageNotFound from '../components/Pages/PageNotFound'
import Layout from '../components/Layout/Layout'
import Login from '../components/LoginRegister/Login/Login'
import Register from '../components/LoginRegister/Register/Register'
import Shop from '../components/Shop/Shop'

const RoutesContainer = ()=> {
    return (
        <Layout>
            <ReactDomRoutes>
                {/* <Route path="/" element={<Hero/>} /> */}
                <Route path="/products" element={<Products/>} />
               {/*  <Route path="/aboutUs" element={<AboutUs/>} /> */}
                <Route path="/contact" element={<Contact/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/snak" element={<></>} />

                <Route path="*" element={<PageNotFound/>} />
            </ReactDomRoutes>
        </Layout>
    )
}

export default RoutesContainer