import axios from 'axios';

import { IResponse } from './response.interfaces.js';

const URL: string = 'https://dummyjson.com/users'

async function getUsers(url: string): Promise<void> {
    try {
        //Не нашел способа присвоить тип при деструктуризации
        // let {data} = await axios.get(url);
        let res = await axios.get(url);
        let data: IResponse = res.data;
        console.log(data.users)
    }
    catch(e) {
        if (axios.isAxiosError(e)) {
            console.log(e.message)
        }
        else {
            if (e instanceof Error) {
                console.log(e.message)
            }
        }

    }
}

getUsers(URL)