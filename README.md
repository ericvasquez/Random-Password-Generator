# Random-Password-Generator
This application creates a random password based on the user-selected criteria.

Once the user clicks the "Generate" button, they will go through a series of prompts.

The user will first be asked how many characters to include in the password. The only acceptable values are between 8 and 122. If the user types in anything else, leaves the space blank, or clicks cancel, the input is not taken in and they are asked again until an acceptable value is given.

The user will then be asked to confirmn whether to include Lower Case, Upper Case, Numbers, and/or Special Characters. If at lease 1 is not chosen, The user will continue to be prompted.

When all conditions are met, the password will be displayed.


HOW THIS WORKS:
Based off the criteria given by the user, 1 array is made with all the values referencing those UniCode characters. 97-122 for lower case characters, 65-90 for upper case characters, 48-57 for numbers 0-9, and 33-47 for special characters.

Then, based off the length given, the array will loop that many times and randomly select values within that array and then convert them to the characters referenced using String.fromCharCode and join them into a new array which is then showed to the user.


