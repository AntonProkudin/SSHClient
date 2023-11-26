import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import './style.scss'
import {useAuthInstance} from "../../utils/axios";
import {ICardsLXC} from "../../common/types/qemu";
import LxcCart from "./lxcCart";

const Lxc:React.FC = ():JSX.Element => {
    const [cards, setCards] = useState<ICardsLXC[]>([])
    const api = useAuthInstance()
    const [isClick, setIsClick] = useState('false');

    const getRecords = async () => {
        try {
            const response = await api.get('/RemoteVirt/StatusLXC') // Замените URL на ваш адрес API
            setCards([response.data]);
            console.log(response.data);
            console.log(cards);
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
        }
    };
    useEffect(() => {
        getRecords(); // Вызываем функцию для получения данных при монтировании компонента
    }, []);

    return(
        <div className="container">
            <div className="head">
                <h1>
                    LXC
                </h1>
                <div>
                    {
                        cards.map((cards, i)=>(
                               <LxcCart name={cards.name} state={cards.state} iPv4={cards.iPv4} iPv6={cards.iPv6} location={cards.location} type={cards.type} snapshots={cards.snapshots}/>
                            )
                        )}
                </div>
            </div>
        </div>
    )
}

export default Lxc;
