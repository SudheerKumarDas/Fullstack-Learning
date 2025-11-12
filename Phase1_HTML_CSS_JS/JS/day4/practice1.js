function downloadFile(url,callback){
    console.log("download from " + url);
    setTimeout(()=>{
        callback();
        console.log("download Completed");
        
    },2000);
}

function processFile(){
    console.log("Processing file ...");
}

downloadFile("https://example.com/file",processFile);