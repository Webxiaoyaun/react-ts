import React from 'react';
import {Link} from 'react-router-dom'
import css from './index.module.less';

import {useTranslation} from 'react-i18next';


const Home: React.FC = () => {
    const { t} = useTranslation();

    return <div className={css.home}>
        {t('Loading')}<br />
        <Link to="/work">跳转到</Link>
    </div>
}

export default Home;