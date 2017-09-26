import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {Layout} from 'antd';
import Breadcrumb from '../component/breadcrumb/index';
import Activities from '../component/activities/index';

const {Sider, Content} = Layout;
const Router = () => {
    return (
            <HashRouter>
                <Layout>
                    <Sider><Breadcrumb/></Sider>
                    <Content>
                        <Route path="/" component={Activities}/>
                    </Content>
                </Layout>
            </HashRouter>
    );
};
export default Router;