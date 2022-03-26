import { ContainerOutlined, DesktopOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

export const Sidebar = () => {
    return (
        <div>
            {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button> */}
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                // inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Product list
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                    Order list
                </Menu.Item>
                <Menu.Item key="4" icon={<ContainerOutlined />}>
                    Admin Product
                </Menu.Item>
            </Menu>
        </div>
    )
}
