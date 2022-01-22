import React from 'react';
import Head from 'next/head';

function Gridview2({ children }) {
    return (
        <div class="projects-holder-2 row">
            <div class="projects-holder col-md-12 col-sm-12">
                <div class="row">
                    {children}
                </div> 
            </div> 
        </div>
    );
}

function Gridview3({ children }) {
    return (
        <div class="projects-holder-3">
            <div class="projects-holder">
                <div class="row">
                    {children}
                </div>
            </div>
        </div>
    );
}

export { Gridview3, Gridview2 };
