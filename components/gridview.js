import React from 'react';
import Head from 'next/head';

function Gridview2({ children }) {
    return (
        <div className="projects-holder-2 row">
            <div className="projects-holder col-md-12 col-sm-12">
                <div className="row">
                    {children}
                </div> 
            </div> 
        </div>
    );
}

function Gridview3({ children }) {
    return (
        <div className="projects-holder-3">
            <div className="projects-holder">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    );
}

export { Gridview3, Gridview2 };
