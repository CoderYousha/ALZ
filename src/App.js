import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/colors.css';
import './styles/constants.css';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { useTheme } from '@mui/material/styles';
import PageRoutes from './routes/PageRoutes';

function App() {
  const theme = useTheme();
  return (
    <main>
      <div className="App" style={{ backgroundColor: theme.palette.background.default }}>
        <BrowserRouter>
          <Routes>
            {
              PageRoutes().map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))
            }
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
