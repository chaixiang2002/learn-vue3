// import {app,BrowserWindow} from 'electron'
// import path from 'path'
// const createWindow=()=>{
//     const win =new BrowserWindow({
//         webPreferences:{
//             nodeIntegration:true,
//             contextIsolation:false
//         }
//     })
//     // console.log(process)
//     console.log(app.isPackaged,'isPackage===>')
//     console.log(process.env)
//     if(process.env.NODE_ENV!='devlopment'){
//         win.loadFile(path.join(__dirname,"./index.html"))//loadFile  ../dist/index.htm
//     }else{
//         win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)///
//     }

    
// }

// app.whenReady().then(createWindow)
import { app, BrowserWindow } from "electron";
import * as path from "path";

// 本地启动的vue项目路径
const vueProjectAddress = "http://localhost:5173"
/**
 * 创建一个新的窗口
 */
const createWindow = () =>{
  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: false, // 是否开启隔离上下文
      nodeIntegration: true, // 渲染进程使用Node API
    },
  });
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    win.loadURL(vueProjectAddress);
  }
};
// 打开窗口
app.whenReady().then(() => {
  createWindow(); // 创建窗口
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
// 关闭窗口
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
