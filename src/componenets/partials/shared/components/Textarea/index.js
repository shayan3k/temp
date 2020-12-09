import React from "react";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "ckeditor5-classic-with-mathtype";
//// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//// import MathType from "@wiris/mathtype-ckeditor5/src/plugin";

import CKEditor from "ckeditor4-react";

function Textarea({ ...props }) {
  return (
    <CKEditor
      // data="<p>Hello from CKEditor 4!</p>"
      data={props.message}
      onChange={(e) => props.setMessage(e.editor.getData())}
      config={{
        contentsLangDirection: "rtl",
      }}
    />
    // <CKEditor
    //   data={props.message}
    //   onChange={(event, editor) => props.setMessage(editor.getData())}
    //   // editor={ClassicEditor}
    //   config={{
    //     toolbar: {
    //       items: [
    //         "heading",
    //         "MathType",
    //         "ChemType",
    //         "|",
    //         "bold",
    //         "italic",
    //         "link",
    //         "bulletedList",
    //         "numberedList",
    //         "imageUpload",
    //         "mediaEmbed",
    //         "insertTable",
    //         "blockQuote",
    //         "undo",
    //         "redo",
    //       ],
    //     },
    //   }}
    // />
  );
}
export default Textarea;
