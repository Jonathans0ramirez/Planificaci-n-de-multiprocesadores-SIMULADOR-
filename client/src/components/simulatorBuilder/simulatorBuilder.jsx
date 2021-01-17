import React, { useState } from 'react';
import {
    Form,
    InputNumber,
    Button,
    Space,
    Select
} from 'antd';
import {
    simulatorModes,
    params
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
    const [needValue, setNeedValue] = useState(true);

    const callApi = async ({ params }, mode) => {
        const req = params.filter((value, index, self) =>
            index === self.findIndex(t => (
                t.option === value.option
            ))
        );
        const options = [];
        req.forEach(jv => {
            options.push(jv.option);
            jv.value && options.push(jv.value);
        });

        mode === "Cache" ? options.push("-C", "-c", "-t") : options.push("-S", "-T", "-t");

        const response = await fetch('/api/execute-script', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ params: options }),
        });

        let body = await response.text();
        if (!response.ok) {
            body = new Error("HTTP Error");
        }

        return body;
    };

    const onFinish = (values, mode) => {
        setStatus('Running');
        callApi(values, mode)
            .then(res => {
                setStatus('Ready');
                setOutputText(res.replace(/<br[^>]*>/gi, "\n> "));
            })
            .catch(err => {
                setStatus('Error');
                setOutputText("");
            });
    };

    const handleChange = () => {
        setStatus('Ready');
        form.setFieldsValue({ params: [] });
    };

    const checkValues = (e, mode) => {
        const { needValue } = params[mode].find(param => param.value === e);
        setNeedValue(needValue);
    }

    return (
        <Form
            form={form}
            name="dynamic_form_nest_item"
            onFinish={(e) => onFinish(e, form.getFieldValue('simulatorModes'))}
            autoComplete="off"
        >
            <Item
                name="simulatorModes"
                label="Modo"
                rules={[{ required: true, message: 'No has seleccionado ningún modo.' }]}
            >
                <Select
                    options={simulatorModes}
                    onChange={handleChange}
                    allowClear
                />
            </Item>
            <List name="params">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(field => (
                            <Space key={field.key} align="baseline">
                                <Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.simulatorModes !== curValues.simulatorModes || prevValues.params !== curValues.params
                                    }
                                >
                                    {() => (
                                        <Item
                                            {...field}
                                            label="Argumento"
                                            name={[field.name, 'option']}
                                            fieldKey={[field.fieldKey, 'option']}
                                            rules={[{ required: true, message: 'No has seleccionado ningún argumento.' }]}
                                        >
                                            <Select
                                                onChange={(e) => checkValues(e, form.getFieldValue('simulatorModes'))}
                                                disabled={!form.getFieldValue('simulatorModes')}
                                                style={{ width: 130 }}
                                            >
                                                {(params[form.getFieldValue('simulatorModes')] || []).map(item => (
                                                    <Option key={item.value} value={item.value}>
                                                        {item.label}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Item>
                                    )}
                                </Item>
                                {
                                    needValue && <Item
                                        {...field}
                                        label="Valor"
                                        name={[field.name, 'value']}
                                        fieldKey={[field.fieldKey, 'value']}
                                        rules={[{ required: true, message: 'No has seleccionado ningún valor.' }]}
                                    >
                                        <InputNumber disabled={!form.getFieldValue('simulatorModes')} />
                                    </Item>
                                }

                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Agregar parametro
                  </Button>
                        </Item>
                    </>
                )}
            </List>
            <Item>
                <Button type="primary" shape="round" size='large' htmlType="submit">
                    Enviar
            </Button>
            </Item>
        </Form>
    );
}

export default SimulatorBuilder
