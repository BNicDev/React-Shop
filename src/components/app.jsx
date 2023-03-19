import React from 'react';
import Layout from '../containers/layout';
import Login from '../containers/login';
import '../styles/global.css'


const app = () =>{
    return(
        <Layout>
            <Login/>
        </Layout>
    );
}

export default app;