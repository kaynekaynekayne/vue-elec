const {BrowserWindow, app}=require("electron");

function createMain(){
    const mainFrame=new BrowserWindow({
        //BrowserWindow()
        //브라우저 윈도우를 생성하고 제어하는 객체
        width:1280, 
        height:1060,
    })
    mainFrame.loadFile('index.html')
    //loadFile()
    //새로운 윈도우를 생성했을 때 보여질 html 파일
}

// app 객체: electron의 생명주기를 관리한다
// app 객체를 통해 앱의 라이프 사이클 관련 신호를 받을 수 있다

// app의 준비가 완료됐을 때 이를 감지할 수 있음
app.whenReady().then(()=>{
    createMain()
    // app.on('activate',()=>{
    //     if(BrowserWindow.getAllWindows().length===0) createMain()
    // })
})

// window-all-closed: 윈도우들이 모두 닫혔을 때 발생하는 이벤트
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin') app.quit()
})



