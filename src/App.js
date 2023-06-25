import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
