import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './app/app';
import { store } from './app/redux/store';
import { theme } from './config/theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    </ThemeProvider>
);
