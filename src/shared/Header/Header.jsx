import React from 'react'
import { PageHeader } from 'antd'
import "./Header.css"

export const Header = ({user}) => {
    return (
        <PageHeader
            className="ant-page-header"
            onBack={() => null}
            title="Title"
            subTitle={user.role === "ADMIN_ROLE" ? "Admin Menu" : "User menu"}
        />
    )
}
