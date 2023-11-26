import React, {useContext} from 'react';
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext, tokens} from "../../theme";
import AlbumIcon from '@mui/icons-material/Album';
import "./style.scss"
import mainLogo from'./../../assets/profile.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, Search, MenuOutlined} from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {useStyles} from "./styles";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import CreateIcon from '@mui/icons-material/Create';
import {Link, useNavigate} from "react-router-dom";


const TopBarComponent = () => {
    const user = useAppSelector(state =>state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const navigate = useNavigate()


    const isVisible = ():string=>{
        if(user.role === "admin")
            return "block"
        return "none"
    }
    return (
        <header>
            <div className="profile">
                <div className="pic-block">
                    <img src={mainLogo} alt=""/>
                </div>
                <div className="name-block">
                    {user.lastName} {user.firstName}
                </div>
                <div className="menu-items">
                    <ul className="menu">
                        <li className="navlink">
                            <Link className="link" to={"/"}>
                            <IconButton aria-label="">
                                <AlbumIcon />
                            </IconButton>
                            <p>QEMU</p>
                            </Link>
                        </li>
                        <li className="navlink"><Link className="link" to={"/lxc"}>
                            <IconButton aria-label="">
                                <AlbumIcon />
                            </IconButton>
                            <p>LXC</p>
                        </Link></li> <li className="navlink"><Link className="link" to={"/docker"}>
                        <IconButton aria-label="">
                            <AlbumIcon />
                        </IconButton>
                        <p>Docker container</p>
                    </Link></li>

                    </ul>
                </div>
            </div>
        </header>
    );
};

export default TopBarComponent;