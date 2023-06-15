# AddTime
## Node.js script
This script will allow you to add or subtract time directly from the command line. To use it, you'll need to have node.js installed.

Download this folder, then open the command line on the downloaded folder and  write ```npm install``` so that the dependencies (prompt-sync) will automatically be downloaded. Then, run it by writing ```node script.js```

To add a time, just write the number and press enter. If you want to add minutes/hours instead of seconds, look at the command section below.
### Commands
You can activate commands by writing, before your number (if it's necessary, otherwise only the command), one or two letters. While the script automatically writes the available commands in the console, you can find a table of them below.
| Command | What it does |
| --- | --- | 
| H | Add an hour (follow it by a number, without a space!) |
| M | Add a minute (follow it by a number, without a space!) |
| Q | Exit the process |
| OM | Give output in minutes |
| OH | Give output in hours
| O(anything else) | Give output in seconds
| S (or nothing) | Add a second
