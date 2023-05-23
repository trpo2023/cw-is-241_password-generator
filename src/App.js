import { useState } from 'react';
import { Layout, theme, Typography, Col, Row, Slider, InputNumber, Switch, Space,  Button, ConfigProvider, Modal, Divider } from 'antd';
import './App.css';
import { gen_pass } from './scripts/gener';

const { Content } = Layout;
const { Title, Text } = Typography;
const minPasswordLen = 4;
const minPasswordCount = 1;

function App() {
  const {token: {colorBgContainer}} = theme.useToken(); 
  const [passwordLen, setPasswordLen] = useState(minPasswordLen);
  const onChangePasswordLen = (newValue) => {
    setPasswordLen(newValue);
  };
  const [isCapital, setIsCapital] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isSpecial, setIsSpecial] = useState(true);
  const [isNumber, setIsNumber] = useState(true);

  const [passwordCount, setPasswordCount] = useState(minPasswordCount);
  const onChangePasswordCount = (newValue) => {
    setPasswordCount(newValue);
  };

  const toggleCheck = () => { 
    if (isCapital) return true;
    if (isLowercase) return true;
    if (isSpecial) return true;
    if (isNumber) return true;
    return false;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const getPassword = () => {
    let pass_arr = [];
    for (let i = 0; i < passwordCount; i++) {
      pass_arr.push(gen_pass(passwordLen, isNumber, isLowercase, isSpecial, isCapital));
    }
    return (pass_arr.map((item) => {
      return (<Text>{item}</Text>)
    })) ;
  };

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#923B2F',
        colorBgLayout: '#DFD5D2',
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
              color: '#923B2F',
              textAlign: 'center',
            }}
          >PASSWORD GENERATOR</Title>
        </div>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 670,
            padding: '10px 50px',
          }}>
          <Title level = {3}
            style={{
              color: '#322525',
            }}
          >Выберите длину пароля</Title>
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
          <Title level={3} 
            style={{
              color: '#322525',
            }}
          >Выберите то, что будет включать пароль:</Title>
          <div> 
            <Col>
              <Row className="inp">
                <Space>
                  <Switch defaultChecked onChange={()=>{setIsCapital(!isCapital)}}/>
                  <Text className="check">Заглавные буквы</Text>
                </Space>
              </Row>
              <Row className="inp">  
                <Space>
                  <Switch defaultChecked onChange={()=>{setIsLowercase(!isLowercase)}}/>
                  <Text className="check">Строчные буквы</Text>
                </Space>
              </Row>
              <Row className="inp">
                <Space>
                  <Switch defaultChecked onChange={()=>{setIsSpecial(!isSpecial)}}/>
                  <Text className="check">Специальные символы</Text>
                </Space>
              </Row>
              <Row className="inp">
                <Space>
                  <Switch defaultChecked onChange={()=>{setIsNumber(!isNumber)}}/>
                  <Text className="check">Цифры</Text>
                </Space>
              </Row>
            </Col>
          </div>
          <Title level={3}
            style={{
              color: '#322525',
            }}
          >Выберите количество предлагаемых паролей</Title>
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
          <div
            style = {{
              padding: 30,
              textAlign: 'center',
            }}          
          >
            <Button type="primary" className="butt" disabled={!toggleCheck()} onClick={showModal}>Сгенерировать</Button>
            <Divider />
            {!toggleCheck() ? <Text type="danger">Выберите хотя бы один из вариантов</Text> : ''}
          </div>
        </div>
        <Modal title="Предалагаемые пароли:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Space 
              direction="vertical" 
              size="small"
            >
              {getPassword()}
            </Space>
        </Modal>
      </Content>
      
    </Layout>
    </ConfigProvider>
  );
}

export default App;
