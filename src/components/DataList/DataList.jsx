import { useState, useEffect, useId } from "react";

const DataList = () => {
    const generateId = useId(); //для генерации id использую хук useId
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch("https://67ab24cd65ab088ea7e8d8d7.mockapi.io/pizza_place") //использую свой список мокковых данных с портала mockapi
            .then((responce) => responce.json())
            .then((json) => setDatas(json))
            .catch((error) => console.error(`Возинкла ошибка: ${error}`))
    }, [])

    return (
        <>
            <h3>Список:</h3>
            {datas.map((data, id) => {
                const dataId = `${generateId}${id}`;
                return <ul key={dataId}>
                    <li>{data.name}</li>
                </ul>
            })}
        </>
    )
}

export default DataList;