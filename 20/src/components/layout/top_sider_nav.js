import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {HashRouter as Router,Route,Link} from 'react-router-dom'
export default class Top_Sider_Nav extends React.Component
{
    render()
    {
        return <Router>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />User Manage</span>}>
                                <Menu.Item key="1"><Link to="/users/add">Add User</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/users/list">User List</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />Message Manage</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Route exact path="/" component={()=>{
                                return <div>
                                    <h2>test home</h2>
                                </div>
                            }} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    }
}