import React from 'react'
import { Layout } from 'antd';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';
import { Sidebar } from './shared/Sidebar/Sidebar';
import { Products } from './pages/Products/Products';
import { ProductsFromDB } from './constants/productsFromDB'
const { Footer, Sider, Content } = Layout;


export const App = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const anotherInfo = 'Cualquier otra cosa'
    const products = ProductsFromDB
    return (
        <>
            <Layout>
                <Header user={user} role={user.role}/>
                <Layout className='full-height'>
                    <Sider>
                        <Sidebar user={user} />
                    </Sider>
                    <Content>
                        <Home usuario={user} other={anotherInfo}></Home>
                        <Products productsDB={products} />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
}
