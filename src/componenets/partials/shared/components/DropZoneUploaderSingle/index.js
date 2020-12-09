import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

function Index(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      if (acceptedFile.length)
        props.setFile(
          Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0]),
          })
        );
    },
  });

  const prevImage = (
    <div>
      <img src={props.prevImageUrl} />
    </div>
  );

  const thumbs = (
    <div key={props.file?.name}>
      <div>
        <img src={props.file?.preview} />
      </div>
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
      {prevImage}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>فایل خود را اضافه کنید</p>
      </div>

      <div>{thumbs}</div>
    </section>
  );
}

export default Index;
