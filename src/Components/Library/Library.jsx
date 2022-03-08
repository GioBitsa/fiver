import React from 'react';
import style from './Library.module.css';
import { Button, Input } from 'antd';
import {
    FundProjectionScreenOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const Library = () => {
    return (
        <>
            <div style={{ paddingBottom: '20px', borderLeft: '1px solid #c5c5c5', borderBottom: '1px solid #c5c5c5' }}>
                <div className={style.asideHeader}>Content Library list:</div>
                <div className='d-flex-column-center'>
                    <div className={style.inputContainer}>
                        <Input prefix={<SearchOutlined />} className={style.input} placeholder='Search for element' />
                    </div>
                    <div className={style.container}>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                        <Button className={style.button}>
                            <div className="d-flex-center" style={{ justifyContent: 'flex-start' }}>
                                <div className={style.icon}>
                                    <FundProjectionScreenOutlined />
                                </div>
                                <div className="d-flex-column">
                                    <div className={style.desc}>
                                        <p>Page</p>
                                        <p>Proposal template</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Library