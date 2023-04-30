import React from 'react';

const Home = () => {
  const handleButtonClick = () => {
    const url = 'https://example.com'; // Example URL
    window.electron.ipcRenderer.sendMessage('startScraping', [url]);
  };

  return (
    <div class=" flex flex-col">
      <div class="flex flex-1 max-h-[50vh] overflow-y-auto">
        <div class="w-1/4 bg-gray-100 border border-black rounded-lg">
          <h2 class="text-lg font-semibold">Statistics</h2>
          <div class="mt-4">
            <div class="flex justify-between">
              <span class="font-semibold">Players won:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Players lost:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Players sold:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Players relisted:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Current coins:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Projected profit:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Total cycles:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Requests made:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Bids made:</span>
              <span>0</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Current selling:</span>
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="w-1/4 bg-gray-100 border border-black rounded-lg">
          <div class="text-lg font-semibold">Settings</div>
          <div class="mt-4">
            <div class="flex justify-between">
              <span class="font-semibold">Sleep time:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Num cycles:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Expiration cutoff mins:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Margin:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Undercut on list:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Undercut on relist:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Futbin max price:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold">Platform:</span>
              <select class="border border-gray-300 rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-1/4 bg-gray-100">
          <h2 class="text-lg font-semibold">Filters</h2>
        </div>
        <div class="w-1/4 bg-gray-100">
          <h2 class="text-lg font-semibold">Buttons</h2>
          <div className="flex">
            <button
              onClick={handleButtonClick}
              class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">hello</div>
    </div>
  );
};

export default Home;
