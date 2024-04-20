import { useRoutes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMenu from './components/NavigationMenu';

import routes from './pages';

import { FinanceDataContextProvider } from './contexts';

import './App.css';

const App: React.FC = () => {
    const definedRoutes = useRoutes(routes);

    return (
        <div className='app__root'>
            <FinanceDataContextProvider>
                <Header />
                <NavigationMenu />
                <div className='app__content'>
                    {definedRoutes}
                </div>
                <Footer />
            </FinanceDataContextProvider>
        </div>
    );
}

export default App;
