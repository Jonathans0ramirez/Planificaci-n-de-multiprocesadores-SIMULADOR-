import React from 'react';
import {
    Form,
    Input,
    Button,
    Space,
    Select
} from 'antd';
import {
    simulatorModes,
    sights
} from '../../assets/data';
import {
    MinusCircleOutlined,
    PlusOutlined
} from '@ant-design/icons';

const { Option } = Select;
const {
    Item,
    List
} = Form;

const SimulatorBuilder = ({ setStatus, setOutputText }) => {
    const [form] = Form.useForm();

    const callApi = async () => {
        const response = await fetch('/api/execute-script', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ params: '-h' }),
        });

        let body = await response.text();
        if (!response.ok) {
            body = new Error("HTTP Error");
        }

        return body;
    };

    const onFinish = values => {
        console.log('Received values of form:', values);
        setStatus('Running');
        callApi()
            .then(res => {
                setStatus('Ready');
                setOutputText(res.replace(/<br[^>]*>/gi, "\n"));
            })
            .catch(err => {
                setStatus('Error');
                setOutputText("");
            });
    };

    const handleChange = () => {
        setStatus('Ready');
        form.setFieldsValue({ sights: [] });
    };

    return (
        <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
            <Item name="simulatorModes" label="Mode" rules={[{ required: true, message: 'Missing mode' }]}>
                <Select options={simulatorModes} onChange={handleChange} />
            </Item>
            <List name="sights">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(field => (
                            <Space key={field.key} align="baseline">
                                <Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.simulatorModes !== curValues.simulatorModes || prevValues.sights !== curValues.sights
                                    }
                                >
                                    {() => (
                                        <Item
                                            {...field}
                                            label="Option"
                                            name={[field.name, 'sight']}
                                            fieldKey={[field.fieldKey, 'sight']}
                                            rules={[{ required: true, message: 'Missing sight' }]}
                                        >
                                            <Select disabled={!form.getFieldValue('simulatorModes')} style={{ width: 130 }}>
                                                {(sights[form.getFieldValue('simulatorModes')] || []).map(item => (
                                                    <Option key={item.value} value={item.value}>
                                                        {item.label}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Item>
                                    )}
                                </Item>
                                <Item
                                    {...field}
                                    label="Value"
                                    name={[field.name, 'price']}
                                    fieldKey={[field.fieldKey, 'price']}
                                    rules={[{ required: true, message: 'Missing price' }]}
                                >
                                    <Input />
                                </Item>

                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add sights
                  </Button>
                        </Item>
                    </>
                )}
            </List>
            <Item>
                <Button type="primary" htmlType="submit">
                    Submit
            </Button>
            </Item>
        </Form>
    );
}

export default SimulatorBuilder
