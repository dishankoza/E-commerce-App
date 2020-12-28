import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component'

const HomePage = () =>{
    return(
    <div className='homepage'>
        <DirectoryMenu></DirectoryMenu>
    </div>
    );
    
}

export  default HomePage;