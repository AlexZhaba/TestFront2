import React from 'react';

import s from './ProjectList.module.scss';

let ProjectList: React.FC = () => {
    return (
        <div className={s.container}>
            <div className={s.list__text}>
                <div className={s.text__inner}>Ваши последние проекты</div>
            </div>
            <div className={s.list__container}></div>
        </div>
    )
}

export {ProjectList};