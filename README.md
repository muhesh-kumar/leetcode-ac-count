# leetcode-ac-count

<p align="center">
  <img src="./icons/icon128.png" width="45px" height="40px"
</p>

A web extension that displays *solved count for each difficulty of any tag in leetcode.com*

![preview image](./images/preview.jpg)

## Why [leetcode-ac-count](https://addons.mozilla.org/en-US/firefox/addon/leetcode-ac-count/)?
* Oftentimes when we are solving problems *topic-wise*, we want to know how many problems we have solved for each difficulty type(Easy, Medium and Hard). This is where leetcode-ac-count comes to help. It hides the default ***You have solved x/y problems.*** line and displays three lines showing how many unlocked, locked and total number of problems we have solved under the current topic(tag) we are in.
* This information helps us not to get stuck on any single difficulty level and reminds us to move on to the next difficulty level once we have solved a certain amount of problems in the current difficulty level we are solving.

## [Installation (for Mozilla Firefox)](https://addons.mozilla.org/en-US/firefox/addon/leetcode-ac-count/)
* As of now the extension is only available in the [Firefox Browser Add Ons](https://addons.mozilla.org/en-US/firefox/addon/). But, the extension is built to support both Mozilla Firefox and Google Chrome.
* For installing on Google Chrome, refer the below section

## Installation (from source)

1. Go to a location where you wish to save this repository
```bash
cd preferred_directory
```

2. Clone the repository
```bash
git clone git@github.com:muhesh-kumar/leetcode-ac-count.git
```
<p align="center"><strong>(or)</strong></p>

```bash
git clone https://github.com/muhesh-kumar/leetcode-ac-count.git
```

### Install on Google Chrome
1. On the search bar, enter **chrome://extensions/**
2. Click on **Load Unpacked**
3. Go to *preferred_directory*
4. Click on **Select Folder**
5. Enable the extension

### Install on Mozilla Firefox
1. On the search bar, enter **about:debugging#/runtime/this-firefox**
2. Click on **Load Temporary Add-on..**
3. Go to *preferred_directory*
4. Click on **any file inside** *preferred_directory*
5. Click on **Open**

## Usage
1. Click on any problem tag in leetcode.com/problemset/all
2. After the tag's page(for example: leetcode.com/tag/stack) loads, the solved count status will be displayed within 10 seconds.

> ***NOTE***: 
> Updates will be visible only after refreshing the page.
> The extension works on both of the old and new UI of LeetCode.

## Possible issues
* As of now, the maximum wait time of the extension to display the solved count stats is 10 seconds. However, if you have a slow network connection or the page load itself took more than 10 seconds to load, the extension won't display the solved count stats. In that case, refresh the page again and wait for the extension to load(fixes for such issues might be made in the future)

## For Developers

### Development Environment
* Operating System: Windows 11, WSL 1
* node: v16.14.0
* npm: 6.13.7

### Build Script
```bash
rm package-lock.json && npm i # if the next line doesn't work, run this line and again run the following lines
npm install # to install dev dependencies
npm run start # to bundle the source files into bundle.js
```