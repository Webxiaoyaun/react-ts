import React, { ReactNode } from 'react';
import css from './index.module.less';

import {PropsFromI18n} from '@/i18n';
import { withTranslation } from 'react-i18next';



// 设置组件名称
type Props =  PropsFromI18n;


class WorkPage extends React.Component<Props>{

    render(): ReactNode{
        const {t} = this.props;
        return <div className={css.home}>{t('workstation')}</div>
    }

}

export default withTranslation()(WorkPage);