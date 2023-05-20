import { useState } from 'react';
import { Layout, theme, Typography, Col, Row, Slider, InputNumber, Switch, Space, Divider, Button, ConfigProvider } from 'antd';
import './App.css';
import { gen_pass } from './scripts/gener';

const { Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const {token: {colorBgContainer}} = theme.useToken(); 
  const [passwordLen, setPasswordLen] = useState(4);
  const onChangePasswordLen = (newValue) => {
    setPasswordLen(newValue);
  };
  const [isCapital, setIsCapital] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isSpecial, setIsSpecial] = useState(true);
  const [isNumber, setIsNumber] = useState(true);

  const [passwordCount, setPasswordCount] = useState(1);
  const onChangePasswordCount = (newValue) => {
    setPasswordCount(newValue);
  };

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#820014',
      },
    }}
    >
  
    <Layout>
      <Content
        style={{
          padding: '0 250px',
        }}
      >
        <div>
          <Title 
            style={{
              color: '#820014',
            }}
          >PASSWORD GENERATOR</Title>
        </div>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 400,
            padding: 50,
          }}>
          <Title level={3}>Выберите длину пароля</Title>
          <Row>
            <Col span={12}>
              <Slider
                min={4}
                max={20}
                onChange={onChangePasswordLen}
                value={passwordLen}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={4}
                max={20}
                style={{
                  margin: '0 16px',
                }}
                value={passwordLen}
                onChange={onChangePasswordLen}
              />
            </Col>
          </Row>
          <Title level={3}>Выберите то, что будет включать пароль:</Title>
          <Space>
            <Switch defaultChecked onChange={()=>{setIsCapital(!isCapital)}}/>
            <Text>Заглавные буквы</Text>
          </Space>
          <Divider />
          <Space>
            <Switch defaultChecked onChange={()=>{setIsLowercase(!isLowercase)}}/>
            <Text>Строчные буквы</Text>
          </Space>
          <Divider />
          <Space>
            <Switch defaultChecked onChange={()=>{setIsSpecial(!isSpecial)}}/>
            <Text>Специальные символы</Text>
          </Space>
          <Divider />
          <Space>
            <Switch defaultChecked onChange={()=>{setIsNumber(!isNumber)}}/>
            <Text>Цифры</Text>
          </Space>
          <Title level={3}>Выберите количество предлагаемых паролей</Title>
          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={10}
                onChange={onChangePasswordCount}
                value={passwordCount}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={10}
                style={{
                  margin: '0 16px',
                }}
                value={passwordCount}
                onChange={onChangePasswordCount}
              />
            </Col>
          </Row>
          <Button type="primary" onClick={()=>{console.log(gen_pass(passwordLen, isNumber, isLowercase, isSpecial, isCapital))}}>Сгенерировать</Button>
        </div>
      

      </Content>
      
    </Layout>
    </ConfigProvider>
  );
}

export default App;
