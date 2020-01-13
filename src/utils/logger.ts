import * as log from 'loglevel';

log.enableAll();

if (process.env.NODE_ENV !== 'production') {
    log.setLevel('debug');
} else {
    log.setLevel('info');
}


export default log;