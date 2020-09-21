import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { RecordsResponse } from './type';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import Filterss from '../../components/Header/Filters';

const BASE_URL = 'https://sds1-kharazam.herokuapp.com';

const Records = () => {
    const [recordsReponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then(response => setRecordsResponse(response.data))
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setActivePage(index);
    }

    return (
        <div className="page-container">
            <Filterss link="/charts" linkText="VER GRÁFICO"/>
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsReponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secundary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsReponse?.totalPages}
            />
        </div>
    );
}

export default Records;