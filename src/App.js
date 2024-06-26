import './App.css';
// import Header from './header/header';
import Header from './header/Navbar'
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'


//App function - Merges created website components and allows navigation between websites
function App() {
    return (
        <div className="App2">
            <Header />
            <Home />
        </div>
    );
}
export default App;
