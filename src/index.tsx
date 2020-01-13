import React, { Suspense }  from 'react';
import * as serviceWorker from '@/serviceWorker';
// 引入normalize
import 'normalize.css';
// 加载 应用
import '@/assets/less/app.less';
import '@/i18n';
import dva from 'dva';
import AppModel from '@/models/App';
import logger from '@/utils/logger';
import AppRouter from './router';
import Loading from './components/Loading';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const app = dva({
    history: history
});

// 加载app model
app.model(AppModel);


app.use({
    onError(e) {
        logger.error('app error',e);
    },
});
// 设置router
app.router((api) => <AppRouter history={ api ? api.history : history} />);
//启动
const App = app.start();

ReactDOM.render(<Suspense fallback={<Loading />}><App /></Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
