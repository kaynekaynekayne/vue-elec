const {BrowserWindow, app}=require("electron");

function createMain(){
    const mainFrame=new BrowserWindow({
        width:1280, 
        height:1060,
    })
    mainFrame.loadFile('index.html')
}


app.whenReady().then(()=>{
    createMain()

    // app.on('activate',()=>{
    //     if(BrowserWindow.getAllWindows().length===0) createMain()
    // })
})

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin') app.quit()
})



