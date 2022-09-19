import React, { useState, useEffect } from "react";

function UploadImage() {
  const [file, setFile] = useState();

  function handleChanges(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="d-flex flex-column">
      <h4>
        Please select the <b>Image</b> to upload
      </h4>
      <input
        className=""
        type="file"
        multiple
        accept="image/*"
        onChange={handleChanges}
      ></input>
      <img src={file} width="700" height="500"></img>
    </div>
  );
}

export default UploadImage;
