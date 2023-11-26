import React, {useEffect, useState} from 'react';
import {Box, IconButton} from "@mui/material";
import './style.scss'
import {ICardsLXC} from "../../../common/types/qemu";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import {useAuthInstance} from "../../../utils/axios";
const LxcCart:React.FC<ICardsLXC> = ({name, state,iPv4,iPv6, type,snapshots, location } ):JSX.Element => {
    const [statusVm, setStatusVm] = useState<boolean>(false);
    const api = useAuthInstance()
    const startVM = async () => {
        try {
            const recordData = {
                name: name,
            }
            const response = await api.post('/RemoteVirt/StartLXC',recordData)
            window.location.reload();
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
        }
    };
    const destroyVM = async () => {
        try {
            const recordData = {
                name: name,
            }
            const response = await api.post('/RemoteVirt/DestroyLXC', recordData)
            window.location.reload();
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
        }
    }
    const sortVM = async()=>{
        if (state=="RUNNING"){
            setStatusVm(true);
        }
    }
    useEffect(()=>{
        sortVM();
    }, [])
    return(
        <div className={statusVm ? "lxcc" : "lxcc notStart"}>
            <div className="name-ip">
                <p className="name">Название: {name}</p>
                <p className="ip">iPv6: {iPv6}</p>
                <p className="ip">iPv4: {iPv4}</p>
            </div>
            <div className="type-cont">
                <p className="name">Тип: {type}</p>
                <p className="ip">snapshots: {snapshots}</p>
                <p className="ip">Расположение: {location}</p>
            </div>
            <div className="status">
                <p>Статус{state}</p>
            </div>
            <div className="btnBlock">
                <IconButton className="startBtn" aria-label="delete" onClick={startVM}>
                    <PlayArrowIcon />
                </IconButton>
                <IconButton className="deleteBtn" aria-label="delete" onClick={destroyVM}>
                    <StopIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default LxcCart;
