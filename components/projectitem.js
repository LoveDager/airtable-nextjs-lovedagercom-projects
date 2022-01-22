import React from 'react';
import Head from 'next/head';

function Projectitem2({ name, oneliner, images, description, status, link }) {
    return (
        <div className="col-md-6 col-sm-6 project-item">
            <div className="project-thumb">
                <img src={images[0]} alt={name} />
                <div className="overlay-b">
                    <div className="overlay-inner">
                        <a href={link} className="fa fa-expand" title={name}></a>
                    </div>
                </div>
            </div>
            <div className="box-content project-detail">
                <h2><a href={link}>{name}</a></h2>
                <p>{oneliner}</p>
            </div>
        </div> 
    );
}

function Projectitem3({ name, oneliner, images, description, status, link }) {
    return (
        <div className="col-md-4 project-item">
            <div className="project-thumb">
                <img src={images[0]} alt={name} />
                <div className="overlay-b">
                    <div className="overlay-inner">
                        <a href={link} className="fa fa-expand" title={name}></a>
                    </div>
                </div>
            </div>
            <div className="box-content project-detail">
                <h2><a href={link}>{name}</a></h2>
                <p>{oneliner}</p>
            </div>
        </div>
    );
}

export { Projectitem2, Projectitem3 };