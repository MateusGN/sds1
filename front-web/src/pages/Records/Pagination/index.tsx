import React from 'react';
import './style.css';

type Prosp = {
    totalPages?: number;
    goToPage: Function;
    activePage: number;
}

const Pagination = ({ totalPages = 1, goToPage, activePage }: Prosp) => {
    const paginationItems = Array.from(Array(totalPages).keys());
    return (
        <div className="pagination-container">
            {paginationItems.map(item => (
                <button className={`pagination-item ${activePage === item ? 'active':'inactive'}`} onClick ={()=> goToPage(item)} key={item}>
                    {item + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;