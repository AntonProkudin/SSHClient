import React, {useEffect, useState} from 'react';
import {Box, IconButton} from "@mui/material";
import './style.scss'
import {ICards} from "../../../common/types/qemu";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import {useAuthInstance} from "../../../utils/axios";
const ListBlock:React.FC<ICards> = ({name, state} ):JSX.Element => {
    const [statusVm, setStatusVm] = useState<boolean>(false);
    const api = useAuthInstance()
    const startVM = async () => {
        try {
            const recordData = {
                name: name,
            }
            const response = await api.post('/RemoteVirt/StartVCL',recordData)
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
            const response = await api.post('/RemoteVirt/DestroyVCL', recordData)
            window.location.reload();
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
        }
    }
    const sortVM = async()=>{
        if (state=="running"){
            setStatusVm(true);
        }
    }
    useEffect(()=>{
            sortVM();
    }, [])
    return(
        <div className={statusVm ? "card" : "card notStart"}>
            <div className="name-block">
                <p>Название: {name}</p>
            </div>
            <div className="state-block">
                <p>Статус:{state}</p>
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

export default ListBlock;
