let seconds = 0;
let output = 0;
console.log("AddTime | Simple time calculator");
console.log("Put one of the following indicators, and then the number you want to add");
console.table({
    commands: [
        "H", "M", "Q", "OM", "OH", "S (or nothing)"
    ],
    help: [
        "Add an hour", "Add a minute", "Exit process", "Give output in minutes", "Give output in hours", "Add seconds"
    ]
})
function logicPrompt(prompt) {
    if (!prompt.match(/^\d/) && prompt.length < 2 && prompt !== "q") return; // If prompt isn't a number or it's too short and it isn't the command to exit the process, don't add anything.
    switch (prompt.substring(0, 1)) {
        case "h": // Hours
            seconds += parseInt(prompt.substring(1)) * 3600;
            break;
        case "m": // Minutes
            seconds += parseInt(prompt.substring(1)) * 60;
            break;
        case "q": // Quit process
            require("process").exit();
            break;
        case "o": // Change output
            switch (prompt.substring(1, 2)) {
                case "m": // in minutes
                    output = 1;
                    break;
                case "h": // in hours
                    output = 2;
                    break;
                default: // in seconds
                    output = 0;
                    break;
            }
        default:
            if (prompt.match(/^\d/)) seconds += parseInt(prompt); else if (prompt.substring(0, 1).match(/^\d/)) seconds += parseInt(prompt.substring(1)); // If it starts with a number, add it as seconds. If there's a letter before that, don't consider it and add it as seconds.
            break;
    }

}
let prompt = require("prompt-sync")();
function askPrompt() {
    logicPrompt(prompt("").toLowerCase()); // Add the time
    switch (output) {
        case 0: // Output in seconds
            console.log(`${seconds} seconds`);
            break;
        case 1: // Output in minutes
            console.log(`${Math.floor(seconds / 60)} minutes and ${parseInt(seconds) - (Math.floor(parseInt(seconds) / 60) * 60)} seconds [${seconds} seconds...]`);
            break;
        case 2: // Output in hours
            console.log(`${Math.floor(seconds / 3600)} hours, ${Math.floor((seconds - (Math.floor(seconds / 3600) * 3600)) / 60)} minutes and ${seconds - (Math.floor(seconds / 60) * 60)} seconds [${seconds} seconds...]`);
            break;
    }
    askPrompt();
}
askPrompt();