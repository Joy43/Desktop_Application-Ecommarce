import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  ping: () => "Hello from Electron Preload!",
});
