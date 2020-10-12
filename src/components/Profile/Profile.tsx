import React from 'react';

//components
import {Header} from './Header/Header';
import {ProjectList} from './ProjectList/ProjectList';
let Profile: React.FC = () => {
    return (
        <div>
            <Header/>
            <ProjectList/>
        </div>
    )
}

export {Profile};