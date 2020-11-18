import React from 'react';
import Link from './elements/Link';
import CardSaya from './components/Card';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Layout>
      <Header style={{background:'#696969'}}>
        <Text style={{Width: '120px', Height: '23px', fontFamily: 'Roboto', fontSize: '20px', color: '#FFFFFF'}}>
          Kelompok 28
        </Text>
        <div style={{float: 'right'}}>
          <Link>Link</Link>
          <Link>Link</Link>
          </div>
        </Header>
        <Content style={{background:'#DCDCDC', height:'91.2vh'}}>
          <CardSaya />
        </Content>
      </Layout>
  )
}

export default App;