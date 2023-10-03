Main Technologies Used:
- Next.js
- Material UI

Routes: 
- / -> The main menu of the game
- /game/[level] -> The level can be either easy, medium or hard.


Game Solution:
I have created two matrixes, the truthState and the uncovered matrix

In the beginning of the game they will have the following values:

truthState      uncoveredMatrix
[0, 6, 2, 1]    [false, false, false, false]
[3, 4, 0, 7]    [false, false, false, false]
[5, 5, 1, 4]    [false, false, false, false]
[6, 7, 2, 3]    [false, false, false, false]

I also have two state variables el1 & el2 that will store the row and column of the values clicked by the user
The game logic is going to be the following:
1. The 1st element clicked will store the row and col values in el1 (If it is valid element selected)
2. The 2nd element clicked will store the row and col values in el2 (If it is valid element selected)
3. If we have values in el1 & el2 we will check if they contain the same value in the truthState
  - If yes, they corresponding row and col values for both el1 & el2 in uncoveredMatrix will turn into true
  - If no, after 1s they will hide again
4. el1 & el2 values will clear and we go back to step no.1 

The game ends:
1. Won: If the uncoveredMatrix does not contain any false value - This is checked every second
2. Lost: If 60s passes

