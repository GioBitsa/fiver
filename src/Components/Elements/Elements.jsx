import React from 'react';
import style from './Elements.module.css';
import { Button } from 'antd';
import {
    FundProjectionScreenOutlined,
} from '@ant-design/icons';

const Elements = () => {
    return (
        <>
            <div style={{ paddingBottom: '20px', borderLeft: '1px solid #c5c5c5', borderBottom: '1px solid #c5c5c5' }}>
                <div className={style.asideHeader}>Pages</div>
                <div className={style.gridContainer}>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Sections
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Heading
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Image
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Video
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Text Block
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            List
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Pricing Table
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Contents Table
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Google Maps
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Icon
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Divider
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Spacer
                        </div>
                    </Button>
                </div>
            </div>
            <div style={{ paddingBottom: '20px', borderLeft: '1px solid #c5c5c5', borderBottom: '1px solid #c5c5c5' }}>
                <div className={style.asideHeader}>Dynamic Fields</div>
                <div className={style.gridContainer}>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Text Field
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Date
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Checkbox
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            DropDown
                        </div>
                    </Button>
                    <Button className={style.gridButton}>
                        <div className="d-flex-column-center">
                            <FundProjectionScreenOutlined />
                            Signature
                        </div>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Elements