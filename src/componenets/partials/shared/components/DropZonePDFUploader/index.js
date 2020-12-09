import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
function Index(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFile) => {
      if (acceptedFile.length)
        props.setFile(
          Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0]),
          })
        );
    },
  });

  const thumbs = (
    <div key={props.file?.name}>
      {props.file?.name ? (
        <div className="alert alert-info text-center">{props.file?.name}</div>
      ) : (
          ""
        )}
    </div>
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(props.file.preview);
    },
    [props.file]
  );

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        {props.file?.name ? (
          thumbs
        ) : (
            <p>فایل خود را اضافه کنید</p>
          )}
      </div>
    </section>
  );
}

export default Index;
