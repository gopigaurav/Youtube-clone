import React, {useState} from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import AppIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import {Link} from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState('');


    return (
        <div className="header">
            <div className="header__left">
             <MenuIcon/>
             <Link to ="/">
              <img className="header__logo" src="https://img.icons8.com/plasticine/200/000000/youtube.png" alt = "Youtube Icon"/>
             </Link>
            </div>

        <div className="header__input">
        <input className ="in__bu" onChange = { e=> setInputSearch(e.target.value)}value={inputSearch} placeholder = "Seacrh" type = "text"/>
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className= "header__inputButton"/>

        </Link>
        
        
        </div>
        
        <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppIcon className="header__icon"/>
        <NotificationIcon className="header__icon"/>
        <img height="32"alt="My-iamge" width="32" src="https://i.pinimg.com/originals/19/d3/c7/19d3c73311beccc67b8f9d1a547f2e3d.jpg"></img>
        </div>
        </div>
    )
};

export default Header;
