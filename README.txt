{author : HARI KRISHNA }
-JAVASCRIPT

@TIC-TAC-TOE

GENERAL NOTES
======================================
- Application is browser compatible 
- Complete application is built in JavaScript.
- Application is 2 player Game. 
- Players can set the names / have the default values. 
- Winner is determined using the binary system.
  Each box is set with a value.
  Addition of the values in the combination is the win value.
  8 possible combinations (3, vertical, 3 horizontal, 2 diagonol).
  [7, 56, 73, 84, 146, 273 , 292, 448] are the winning values.
  As the user selects, each box is assigned with a value to keep a count looping through the win values. 
- Displays the game status, winner container(green) and game draw container(red).
- Status container is provided with a button to reset the game which clears the board to start a new game.

WINNING CONCEPT
==========================================


                          BINARY SYSTEM
                          =============

           273   _______________________________
                 |         |         |         |
                 |         |         |         |
                 |   1     |    2    |    4    |  7
                 |_________|_________|_________|
                 |         |         |         |
                 |         |         |         |
                 |    8    |   16    |   32    |  56
                 |_________|_________|_________|
                 |         |         |         |
                 |         |         |         |
                 |   64    |   128   |   256   | 448
                 |_________|_________|_________|
             84      73        146       292    


