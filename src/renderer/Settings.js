import React from 'react';

const Settings = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-8 text-left">Settings</h1>
      <div class="w-2/4 bg-gray-100">
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
    </div>
  );
};

export default Settings;
