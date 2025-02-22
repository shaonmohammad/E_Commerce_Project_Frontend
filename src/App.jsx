import './App.css'
import Categories from './Components/Categories/Categories'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <div className='mx-0 my-5 md:mx-40 md:my-10'>
        <Navbar></Navbar>
        <Header></Header>
        <Categories></Categories>
        <Products></Products>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
