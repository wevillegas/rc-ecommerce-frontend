import { Divider, List } from 'antd';
import React from 'react'

export const ProductList = ({productsDBtoList}) => {
    return (
        <>
            <h1>Lista de Productos</h1>
            <Divider orientation="left">Large Size</Divider>
            {/* <List
                size="large"
                header={<div>Product list</div>}
                footer={<div>Pie de pagina de la lista de productos</div>}
                bordered
                dataSource={productsDBtoList}
                renderItem={product => 
                <List.Item>
                    <span className='text-red'>{product._id}</span>
                    {product.name}
                </List.Item>}
            /> */}

            <ul>
                {productsDBtoList.map(product => <li>{product.name}</li>)}
            </ul>



            {/* <List
                itemLayout="vertical"
                size="large"
                // pagination={{
                //     onChange: page => {
                //         console.log(page);
                //     },
                //     pageSize: 3,
                // }}
                // dataSource={listData}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconContext icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />, */}

        </>
    )
}

