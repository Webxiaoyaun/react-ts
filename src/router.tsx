import React from 'react';
//pages
import Home from '@/pages/Home';
import Work from '@/pages/Work';

import {Router ,Route,Switch} from 'dva/router';
import { History } from 'history';


const AppRouter: React.FC<{history: History}> = ({history}) => {

    return (<Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/work" exact component={Work} />
                </Switch>
            </Router>)
}


export default AppRouter


