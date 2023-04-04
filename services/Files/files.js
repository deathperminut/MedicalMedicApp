
async function createFile(URL){
    let response = await fetch(URL);
    let data = await response.blob();
    data.name = "test.png";
    data.type = "image/png";
    return data;
}

export {createFile};