import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../Styles/DescriptionEditor.css";

const DescriptionEditor = ({ value, onChange }) => {
  const [editorKey, setEditorKey] = useState(1);
  const MAX_WORDS = 1500;

  const handleEditorChange = (content, editor) => {
    const words = content.split(" ");
    if (words.length <= MAX_WORDS) {
      onChange(content);
    }
  };

  const handleReset = () => {
    setEditorKey(editorKey + 1);
    onChange("");
  };

  return (
    <div className="editor-container">
      <Editor
        apiKey="<YOUR_API_KEY>"
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          width: 400,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
        }}
        key={editorKey}
      />
      <div className="word-count">
        {MAX_WORDS - value.split(" ").length} words remaining
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default DescriptionEditor;
