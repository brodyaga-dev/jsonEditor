import React, {useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import JsonView from './components/JsonView'
import Diff from './components/Diff'

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import '@elastic/eui/dist/eui_theme_light.css';

import {
  EuiProvider,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';

function App() {
  const [json, setJson] = useState({})

  useEffect(() => {
    console.log('<------App-JSON--->', json)
  }, [json])
  return (
    <EuiProvider colorMode="light">
      <EuiHeader position='fixed'>
        <EuiHeaderSectionItem border="right">
          D8
        </EuiHeaderSectionItem>

        <EuiHeaderSectionItem>
          <EuiHeaderLinks aria-label="App navigation links example">
            <EuiHeaderLink iconType="help">JsonEditor</EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeader>
    <SplitterLayout primaryIndex={1} secondaryInitialSize={450} style={{paddingTop: '40px'}}>
        <div style={{ padding: '10px 20px', fontSize: '16px' }}>
          <JsonView json={json} setJson={setJson}></JsonView>
        </div>
        <div>
          <Diff json={json} setJson={setJson}></Diff>
        </div>
      </SplitterLayout>
    </EuiProvider>
  );
}

export default App;
