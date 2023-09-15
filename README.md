# Better-Blackboard

Better Blackboard is a very simple Chrome Extension for the Blackboard website

## Installation
1. Download the main.crx file in this repo
2. Go to chrome://extensions
3. Click on the toggle developer mode button in the top right
<img src="/imgs/Screenshot 2023-09-15 092816.png" alt="Dev Mode Toggle">
4. Click the "Load unpacked" button on the top left
<img src="/imgs/Screenshot 2023-09-15 121109.png" alt="Load Unpacked">
5. Locate your download of the "main" folder, and click "Select Folder"
<img src="/imgs/Screenshot 2023-09-15 121346.png" alt="Dev Mode Toggle">

## Setup

1. Go into Blackboard and press <code>FN + F12</code> to open the inspect window on the right or bottom of your screen
2. Click on "console" at the top of the new window which will take you to the console tab
3. Copy the code below and paste it into the bottom of the console
   
<code>localStorage.setItem("class1", "");</code> 
<code>localStorage.setItem("class2", "");</code> 
<code>localStorage.setItem("class3", "");</code> 
<code>localStorage.setItem("class4", "");</code> 
<code>localStorage.setItem("class5", "");</code> 
<code>localStorage.setItem("class6", "");</code> 
<code>localStorage.setItem("class7", "");</code> 
<code>localStorage.setItem("class8", "");</code> 
<code>localStorage.setItem("class9", "");</code> 

4. Now go to the "Application" tab at the top of the inspect window
5. If you dont see it then click the <code>>></code> symbol and find it in the dropdown menu (ignore this if you are there already)
6. Now for your first period, go to that classes BB page and copy the url at the top of the screen
7. Go back to the inpect window and find class1 double click the blank box to the right of it
8. Paste the copied url into that boxand repeat for all other classes (leave your lunch period blank)

# Use
you can press the keys #1-9 to go to the class with that period, or you can just press enter to go to whatever class you are currently in automatically!
