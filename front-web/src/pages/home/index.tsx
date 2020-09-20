import React from 'react';
import './style.css';
import { ReactComponent as GamerImage } from '../../assets/GAMER.svg';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { Link } from 'react-router-dom';


const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">Quais jogos a galera gosta mais?</h1>
            <h3 className="home-text-subtitle"> Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!</h3>
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                        QUERO SABER QUAIS SÃO
                    </button>
                    <div className="home-btn-icon">
                        <Arrow />
                    </div>
                </div>
            </Link>
        </div>
        <GamerImage className="home-image"/>
    </div>
);

export default Home;