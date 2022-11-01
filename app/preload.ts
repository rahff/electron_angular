import {contextBridge, ipcRenderer } from "electron";


contextBridge.exposeInMainWorld("electronApi", {
    fileSystemAdapter: {
        saveFile: (payload: {filename: string, content: string}) => ipcRenderer.invoke('file:save', payload)
    }
})