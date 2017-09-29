import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {Layout} from 'antd';
import Breadcrumb from '../component/breadcrumb/index';
import Activities from '../component/activities/index';

const {Sider, Content,Header} = Layout;
const Router = () => {
    return (
            <HashRouter>
                <Layout className="app-container">
                    <Layout className="header-layout">
                        <Header/>
                    </Layout>
                    <Layout className="main-wrapper">
                        <Sider className="side-bar">
                            <Breadcrumb/>
                        </Sider>
                        <Content className="main-content">
                            <Route path="/" component={Activities}/>
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>
    );
};
export default Router;