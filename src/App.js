import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import routes from './routes';

class App extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            preloader.style.display = 'none';
        }, 1500);
    }

    render() {
        return (
            <Switch>
                {routes.map((i, idx) => (
                    <Route key={idx} path={i.path} exact={i.exact} component={i.component} />
                ))}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default App;
