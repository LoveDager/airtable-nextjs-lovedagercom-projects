import React from 'react';
import Head from 'next/head';

function Layout({ children }) {
    return (
    <main>
        <Head>
            <meta charSet="utf-8" />
            <title>Artcore - Projects 2 Columns</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width" />

            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,300,100" />
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,300italic,300,500,500italic,700,900" />

            <link rel="stylesheet" href="css/bootstrap.css" />
            <link rel="stylesheet" href="css/font-awesome.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/templatemo-misc.css" />
            <link rel="stylesheet" href="css/templatemo-style.css" />
        </Head>

        <header className="site-header container-fluid">
            <div className="top-header">
                <div className="logo col-md-6 col-sm-6">
                    <h1><a href="/"><em>Who the hell is </em>Love Dager</a></h1>
                    <span>Portfolio</span>
                </div> 
                <div className="social-top col-md-6 col-sm-6">
                    <ul>
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-flickr"></a></li>
                        <li><a href="#" className="fa fa-rss"></a></li>
                    </ul>
                </div> 
            </div> 
        </header> 

        <div className="content-wrapper">
            <div className="inner-container container">
                <div className="row">
                    <div className="section-header col-md-12">
                        <h2>Projects</h2>
                        <span>Subtitle Goes Here</span>
                    </div> 
                </div> 
                {children}

            </div> 
        </div>
    </main>
    );
  }
  
  export default Layout;
  