import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { routes } from './routes_data';
import Navbar from '../shared/navbar/Navbar';
import Drawer from '../shared/drawer/Drawer';

export default function Routes() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    {isMobile ? <Drawer /> : <Navbar />}
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                exact
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}
