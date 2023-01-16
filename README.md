# JumpTo

This extension adds the ability to move the cursor a specified number of lines up or down by either typing a positive or negative number.

It adds, by default, a binding to `Ctrl+Cmd+G` on Mac OS and `Ctrl+Alt+G` on Windows and Linux, so it is similar to the "go to line" command that uses `Ctrl+G`.

## Usage

Open the command palette and find the command "Go to Line from here" and type in the number of lines you wish the cursor to skip.

If you are on a document with 100 lines, and the cursor is at line 1, typing in "10" and confirming will leave the cursor at line 11 (10+1). Doing the opposite, by typing -10, will return the cursor to the original line.

Typing negative numbers that lead to an non-existing position in the file (a negative line) will leave the cursor at the first line. Likewise, a number that is greater than that of the total line count will leave the cursor at the last line of the file.
