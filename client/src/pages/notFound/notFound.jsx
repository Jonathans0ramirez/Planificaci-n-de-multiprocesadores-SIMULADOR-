import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const NotFound = () => {
    const history = useHistory();

    return (
        <Result
            status="404"
            title="404"
            subTitle="La página no existe."
            extra={
                <Button
                    type="primary"
                    shape="round"
                    icon={<HomeOutlined />}
                    onClick={() =>
                        history.replace("/")
                    }
                />
            }
        />
    )
}

export default NotFound;