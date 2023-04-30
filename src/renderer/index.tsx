import { createRoot } from 'react-dom/client';
import App from './App';

// const puppeteer = require('puppeteer');

// https://medium.com/@alexanderruma/using-node-js-puppeteer-and-electronjs-to-create-a-web-scraping-app-with-a-desktop-interface-668493ced47d

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
