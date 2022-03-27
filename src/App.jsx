import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './layout/Dashboard';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import ListHeroesDC from './pages/ListHeroesDC';
import ListHeroesMarvel from './pages/ListHeroesMarvel';
import Search from './pages/Search';
import ListHeroes from './pages/ListHeroes';




function App() 
{

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}>
          </Route>
          
          <Route path="/login" element={<Login/>}>
          </Route>
          
          <Route path="heroes" element={<Dashboard/>}>
            <Route index element={<ListHeroes/>} />
            <Route path="dc" element={<ListHeroesDC />} />
            <Route path="marvel" element={<ListHeroesMarvel />} />
            <Route path="search" element={<Search />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
