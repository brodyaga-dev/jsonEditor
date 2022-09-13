import React, {useState, useEffect, useRef} from 'react'
import { diff as DiffEditor } from "react-ace";
import ace from "ace-builds";
import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const defaultValue = [
  `// Use this tool to edit json code.
// Deletions will be highlighted on the left, insertions highlighted on the right.`,
  `// Use this too to show difference in code.
// Deletions will be highlighted on the left, insertions highlighted on the right.
// The diff highlighting style can be altered in CSS.
`
];

const Diff = ({
    json,
    setJson
  }) => {
  const [state, setState] = useState(defaultValue)

  useEffect(() => {
    console.log('Diff --->', json)
    setState([state[0], JSON.stringify(json, null, 2)])

  }, [json])

  const onChange = (data) => { 
    console.log('onChange')
    console.log(data)
    setState(data)

    if (isJsonString(data[0])) {
      console.log('DATA0 - is JSON')
      let json = JSON.parse(data[0])

      setState([JSON.stringify(json, null, 2), data[1]])
     }

    if (isJsonString(data[1])) { 
      console.log('DATA1 - is JSON')
      let json = JSON.parse(data[1])

      setJson(json)
    }
  }
  const isJsonString =(str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  return (
    <DiffEditor
    value={state}
    height="1000px"
    width="1600px"
    mode="json"
    fontSize={13}
    onChange={onChange}
    theme = "github"
  />
  )
}

export default Diff