import React, { useState } from 'react';
import style from './Home.module.css'
import { Button, Layout, Menu, Select } from 'antd';
import Ruler from 'rc-ruler';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ExportOutlined,
    UndoOutlined,
    RedoOutlined,
    HistoryOutlined,
    SendOutlined,
    UserAddOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import Elements from '../../Components/Elements/Elements';
import Library from '../../Components/Library/Library';
import Aside2 from '../../Components/Aside2/Aside2';
import Aside3 from '../../Components/Aside3/Aside3';

const { Option } = Select;
const { Header, Sider, Content } = Layout;

const Home = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [value, setValue] = useState(50);
    const [buttonType, setButtonType] = useState('elements');
    const [buttonTypeAside, setButtonTypeAside] = useState('1');

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    const handleDragChange = (e) => {
        setValue(e)
    }

    return (
        <>
            <Header className="d-flex-center site-layout-background site-layout-header" style={{ padding: 0 }}>
                {collapsed ? <MenuUnfoldOutlined className='trigger' onClick={() => toggle()} /> : <MenuFoldOutlined className='trigger' onClick={() => toggle()} />}
                <Button className={style.profile}>
                    <img src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" alt="" />
                    <div className={style.profileInfo}>
                        <strong>OMAR AU</strong>
                        <span>Company Header</span>
                    </div>
                </Button>
                <div style={{ width: '100%', height: '100%' }} className="d-flex-space-between">
                    <div className='d-flex-center' style={{ height: '100%' }}>
                        <Button type='primary' className={style.propButton}>
                            <ExportOutlined />
                            Export
                        </Button>
                        <div className='d-flex-center' style={{ height: '100%' }}>
                            <Button className={style.propButton} style={{ marginRight: '10px' }}><UndoOutlined /></Button>
                            <Button className={style.propButton} style={{ marginLeft: '10px' }}><RedoOutlined /></Button>
                        </div>
                        <Button className={style.propButton}><HistoryOutlined /></Button>
                    </div>
                    <div className='d-flex-center' style={{ height: '100%' }}>
                        <Select className={style.selectProp} defaultValue="Clients" style={{ width: '100%', maxWidth: 150, height: '70%' }}>
                            <Option value="Clients">Clients</Option>
                            <Option value="1">Client 1</Option>
                            <Option value="2">Client 2</Option>
                            <Option value="3">Client 3</Option>
                        </Select>
                        <Select className={style.selectProp} defaultValue="A" style={{ width: '100%', maxWidth: 150, height: '70%' }}>
                            <Option value="A">Agreement-A</Option>
                            <Option value="B">Agreement-B</Option>
                            <Option value="C">Agreement-C</Option>
                        </Select>
                    </div>
                </div>
                <Button icon={<UserAddOutlined />} className={style.propButton} type='primary'>Add Recipients</Button>
                <Button icon={<SendOutlined />} className={style.propButton} type='primary'>Send Document</Button>
            </Header>
            <Ruler
                value={value}
                onDrag={() => handleDragChange()}
                start={20}
                end={99}
                step={2}
                className='ruler'
            />
            <Layout style={{ height: 'calc(100vh - 64px - 85px)', backgroundColor: 'white' }}>
                <Sider
                    width={250}
                    style={
                        collapsed ?
                            {
                                overflow: 'auto',
                                height: 'calc(100vh - 88px)',
                                position: 'fixed',
                                left: 0,
                                top: '64px',
                                bottom: 0,
                                margin: '24px 0',
                                paddingRight: '0px',
                            }
                            :
                            {
                                overflow: 'auto',
                                height: 'calc(100vh - 88px)',
                                position: 'fixed',
                                left: 0,
                                top: '64px',
                                bottom: 0,
                                margin: '24px 0',
                                paddingRight: '5px',
                            }
                    }
                    theme='light'
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    collapsedWidth={0}
                >
                    <div className={style.asideHeader}>Pages</div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" className={style.antMenuItem}>
                            <div className={style.asidePages}>
                                <img src="https://colorlib.com/cdn-cgi/image/width=1200,height=876,quality=80,format=auto,onerror=redirect,metadata=none/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/unbounce-landing-page-templates.jpg" alt="" />
                            </div>
                        </Menu.Item>
                        <Menu.Item key="2" className={style.antMenuItem}>
                            <div className={style.asidePages}>
                                <img src="https://blog.hubspot.com/hs-fs/hubfs/landing-page-template-architecture.jpg?width=450&name=landing-page-template-architecture.jpg" alt="" />
                            </div>
                        </Menu.Item>
                        <Menu.Item key="3" className={style.antMenuItem}>
                            <div className={style.asidePages}>
                                <img src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/53666-original.jpg" alt="" />
                            </div>
                        </Menu.Item>
                        <Menu.Item key="4" className={style.antMenuItem}>
                            <div className={style.asidePages}>
                                <img src="https://blog.hubspot.com/hubfs/15%20Free%20Professionally-Designed%20Landing%20Page%20Templates-5.png" alt="" />
                            </div>
                        </Menu.Item>
                        <Menu.Item key="5" className={style.antMenuItem}>
                            <div className={style.asidePages}>
                                <img src="https://blog.hubspot.com/hubfs/15%20Free%20Professionally-Designed%20Landing%20Page%20Templates-5.png" alt="" />
                            </div>
                        </Menu.Item>
                        <Menu.Item key="6" className={style.antMenuItem}>
                            <div className={style.asidePages}>
                                <img src="https://blog.hubspot.com/hubfs/15%20Free%20Professionally-Designed%20Landing%20Page%20Templates-5.png" alt="" />
                            </div>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={collapsed ? { marginLeft: 0, height: '100%', backgroundColor: 'white' } : { marginLeft: 250, height: '100%', backgroundColor: 'white' }}>
                    <Content
                        className="site-layout-background"
                        style={
                            collapsed ?
                                {
                                    padding: 24,
                                    minHeight: 280,
                                    width: 'calc(100vw - 360px)',
                                }
                                :
                                {
                                    padding: 24,
                                    minHeight: 280,
                                    width: 'calc(100vw - 610px)',
                                }
                        }
                    >
                        Content
                    </Content>
                </Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 88px)',
                        position: 'fixed',
                        right: 0,
                        top: '64px',
                        bottom: 0,
                        margin: '24px 0',
                        paddingRight: '0px',
                    }}
                    width={360}
                    theme='light'
                    trigger={null}
                    collapsed={false}
                >
                    <div className="d-flex-space-between" style={{ height: '100%' }}>
                        <div className={style.asideColumn} style={{ textAlign: 'center' }}>
                            <Button type={buttonTypeAside === '1' ? 'primary' : 'default'} onClick={() => setButtonTypeAside('1')} className={style.asideColumnButton}>
                                <PlusOutlined />
                            </Button>
                            <Button type={buttonTypeAside === '2' ? 'primary' : 'default'} onClick={() => setButtonTypeAside('2')} className={style.asideColumnButton}>
                                <PlusOutlined />
                            </Button>
                            <Button type={buttonTypeAside === '3' ? 'primary' : 'default'} onClick={() => setButtonTypeAside('3')} className={style.asideColumnButton}>
                                <PlusOutlined />
                            </Button>
                        </div>
                        <div style={{ width: '300px' }}>
                            {buttonTypeAside === '1' ?
                                <>
                                    <div className="d-flex">
                                        <Button type={buttonType === 'elements' ? 'primary' : 'default'} onClick={() => setButtonType('elements')} className={style.asideButtons}>Elements</Button>
                                        <Button type={buttonType === 'content' ? 'primary' : 'default'} onClick={() => setButtonType('content')} className={style.asideButtons}>Content Library</Button>
                                    </div>
                                    {buttonType === "elements" ?
                                        <Elements />
                                        :
                                        buttonType === 'content' ?
                                            <Library />
                                            :
                                            null}
                                </>
                                :
                                buttonTypeAside === '2' ?
                                    <Aside2 />
                                    :
                                    buttonTypeAside === '3' ?
                                        <Aside3 />
                                        :
                                        null}
                        </div>
                    </div>
                </Sider>
            </Layout >
        </>
    )
}

export default Home