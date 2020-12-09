import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { notificationAlert } from "../../../../../utils/shared";
import Axios from "axios";

function Index(props) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleFileUpload = (e) => {
    setUploading(true);

    Promise.all([
      ...files.map((item, index) => {
        return new Promise((resolve, reject) => {
          let data = new FormData();

          data.append("session_id", props.sessionID);
          data.append("image", item);
          // for (var key of data.entries()) {
          //   console.log(key[0] + ", " + key[1]);
          // }

          Axios({
            url: props.theURL,
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
            method: "POST",
            data: data,
          }).then((res) => {
            resolve({
              success: res.data.success,
              err: res.data.err,
              message: res.data.message,
              fileName: item.name,
            });
          });
        });
      }),
    ])
      .then((res) => {
        res.map((item, index) => {
          notificationAlert(
            res.success === false
              ? `فایل ${item.fileName} با موفقیت آپلود نشد.`
              : `فایل ${item.fileName} با موفقیت آپلود شد.`,
            item.message,
            item.success === false ? "error" : "success"
          );
        });
      })
      .finally(() => {
        setFiles([]);
        setUploading(false);
      });
  };

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>فایل خود را اضافه کنید</p>
      </div>

      {uploading ? (
        <h6>uploading...</h6>
      ) : (
          <>
            {files.length ? (
              <button onClick={handleFileUpload}>upload</button>
            ) : (
                ""
              )}
            <div>{thumbs}</div>
          </>
        )}
    </section>
  );
}

export default Index;
