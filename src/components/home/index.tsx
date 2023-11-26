import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import './style.scss'
import {useAuthInstance} from "../../utils/axios";
import {ICards} from "../../common/types/qemu";
import ListBlock from "./listblock";

const Home:React.FC = ():JSX.Element => {
    const [cards, setCards] = useState<ICards[]>([])
    const api = useAuthInstance()
    const [isClick, setIsClick] = useState('false');

    const getRecords = async () => {
        try {
            const response = await api.get('/RemoteVirt/StatusVCL') // Замените URL на ваш адрес API
            setCards(response.data);
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
                        QEMU
                    </h1>
                    <div>
                    {
                        cards.map((cards, i)=>(
                            <ListBlock name={cards.name} state={cards.state}/>
                        )
                        )}
                    </div>
                </div>
        </div>
   )
}

export default Home;
