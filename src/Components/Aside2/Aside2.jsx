import React from 'react';
import style from './Aside2.module.css'
import { Button, Input } from 'antd';
import {
    UserOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const Aside2 = () => {
    return (
        <>
            <div className={style.asideHeader}>Client Recipients</div>
            <div style={{ borderLeft: '1px solid #c5c5c5', height: '100%', justifyContent: 'flex-start' }} className='d-flex-column-center'>
                <div className={style.inputContainer}>
                    <Input prefix={<SearchOutlined />} className={style.input} placeholder='Search by name or email or group' />
                </div>
                <div className={style.container}>
                    <div className={style.item}>
                        <div className={style.header}>Sender:</div>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <UserOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Mohamed Ali Ibrahem</p>
                                        <p>mymail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <UserOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Mohamed Ali Ibrahem</p>
                                        <p>mymail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className={style.item}>
                        <div className={style.header}>Recipients List:</div>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <UserOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Mohamed Ali Ibrahem</p>
                                        <p>mymail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <UserOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Mohamed Ali Ibrahem</p>
                                        <p>mymail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <UserOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Mohamed Ali Ibrahem</p>
                                        <p>mymail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <UserOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Mohamed Ali Ibrahem</p>
                                        <p>mymail@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <Button style={{ padding: '10px 0', fontWeight: 'bold' }} className={style.button}>Add Recipients</Button>
                </div>
            </div>
        </>
    )
}

export default Aside2