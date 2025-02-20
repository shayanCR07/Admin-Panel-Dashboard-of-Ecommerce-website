import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy'
import { Header } from '../components'


const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent height="450px">
        <EditorData />
         <Inject services={[HtmlEditor, Toolbar, QuickToolbar, Link, Image]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
