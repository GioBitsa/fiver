import React, { useState } from 'react';
import style from './Aside3.module.css'
import { Divider, Input, Menu } from 'antd';
import { SearchOutlined, } from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Aside3 = () => {

    const [openKeys, setOpenKeys] = useState(['sub1', 'sub2', 'sub4']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <>
            <div className={style.asideHeader}>Variables</div>
            <div style={{ borderLeft: '1px solid #c5c5c5', height: '100%', justifyContent: 'flex-start' }} className='d-flex-column-center'>
                <div className={style.inputContainer}>
                    <Input prefix={<SearchOutlined />} className={style.input} placeholder='Search for element' />
                </div>
                <div className={style.container}>
                    <Menu className={style.menu} mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: '100%' }}>
                        <SubMenu key="sub1" title="System Variables">
                            <Divider className={style.divider} />
                            <Menu.Item key="1">Client name</Menu.Item>
                            <Menu.Item key="2">Client email</Menu.Item>
                            <Menu.Item key="3">Client company</Menu.Item>
                            <Menu.Item key="4">Client phone</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <Menu className={style.menu} mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: '100%' }}>
                        <SubMenu key="sub2" title="User Variables">
                            <Divider className={style.divider} />
                            <Menu.Item key="5">Client Properties</Menu.Item>
                            <Menu.Item key="6">Client Properties</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Client Properties</Menu.Item>
                                <Menu.Item key="8">Client Properties</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                    <Menu className={style.menu} mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: '100%' }}>
                        <SubMenu key="sub4" title="Sender Variables">
                            <Divider className={style.divider} />
                            <Menu.Item key="9">Client Properties</Menu.Item>
                            <Menu.Item key="10">Client Properties</Menu.Item>
                            <Menu.Item key="11">Client Properties</Menu.Item>
                            <Menu.Item key="12">Client Properties</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default Aside3