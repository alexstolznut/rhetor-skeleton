import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
    EditorContainer,
    Editor,
    InlineToggleButton,
    EditorToolbar,
    ToggleButtonGroup,
} from 'draft-js-wysiwyg';
import { EditorState } from 'draft-js';
import {
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon
  } from '@material-ui/icons';
import 'draft-js/dist/Draft.css';

const EditArticle = () => {

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty()
      );

    return (
        <EditorContainer
      editorState={editorState}
      onChange={setEditorState}
    >
      <EditorToolbar>
        <ToggleButtonGroup size='small'>
          <InlineToggleButton value="BOLD">
            Bold
          </InlineToggleButton>
          <InlineToggleButton value="ITALIC">
            Italic
          </InlineToggleButton>
          <InlineToggleButton value="STRIKETHROUGH">
            Strikethrough
          </InlineToggleButton>
          <InlineToggleButton value="UNDERLINE">
            Underline
          </InlineToggleButton>
        </ToggleButtonGroup>
        {/* <Button variant="text" onClick={onSaveArticleClick}>Save</Button> */}
      </EditorToolbar>
      <Editor placeholder='Enter some text..' />
    </EditorContainer>
    )


}

export default EditArticle;
