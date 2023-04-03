import React from "react";


async function createFile(URL){
    let response = await fetch(URL);
    let data = await response.blob();
    let metadata = {
      type: 'image/png'
    };
    let file = new File([data], "test.png", metadata);
    return file;

}

export {createFile};