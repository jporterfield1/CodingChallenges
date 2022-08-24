/*Weekly Coding Challenge: Chess Pieces

Create a function that takes the name of a chess piece, its position and a target position. The function should return true if the piece can move to the target and false if it can't.

The possible inputs are "Pawn", "Knight", "Bishop", "Rook", "Queen" and "King".

Examples
canMove("Rook", "A8", "H8") ➞ true

canMove("Bishop", "A7", "G1") ➞ true

canMove("Queen", "C4", "D6") ➞ false

Notes
Do not include pawn capture moves and en passant.
Do not include castling.
Remember to include pawns' two-square move on the second rank!
Look for patterns in the movement of the pieces. 
*/
//==================================================================================================
function canMove(chessPiece, position, target) {
    position = position.toUpperCase();
    target = target.toUpperCase();

    let rowX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let posX = position.charCodeAt(0);
    let posY = parseInt(position.charAt(1));
    let tarX = target.charCodeAt(0);
    let tarY = parseInt(target.charAt(1));

    if ((!rowX.includes(position.charAt(0))) || ((!rowX.includes(target.charAt(0)))) ||
        posY < 1 || posY > 8 || tarY < 1 || tarY > 8) {
        return "Not a valid position.";
    }

    switch (chessPiece) {
        case "Pawn":
            if (posX == tarX) {
                if (posY + 1 == tarY || posY + 2 == tarY) {
                    return true;
                } return false;
            } return false;
            break;
        case "Rook":
            if (posX == tarX ^ posY == tarY) {
                return true;
            } return false;
            break;
        case "Knight":
            if ((((Math.abs(posX - tarX)) == 2) && (Math.abs(posY - tarY) == 1)) ||
                (((Math.abs(posX - tarX)) == 1) && (Math.abs(posY - tarY) == 2))) {
                return true;
            } return false;
            break;
        case "Bishop":
            if ((Math.abs(posX - tarX)) == (Math.abs(posY - tarY))) {
                return true;
            } return false;
            break;
        case "Queen":
            if ((posX == tarX ^ posY == tarY)) {
                return true;
            }
            if ((Math.abs(posX - tarX)) == (Math.abs(posY - tarY))) {
                return true;
            } return false;
            break;
        case "King":
            if (((Math.abs(posX - tarX)) <= 1) && ((Math.abs(posY - tarY)) <= 1)) {
                return true;
            } return false;
            break;

        default:
            return "Not a valid position."
            break;
    }
}
//Test Suite:
console.log("**Pawn Moves**");
console.log("forward 2, right 1 => " + canMove("Pawn", "C4", "D6"));
console.log("forward 1 => " + canMove("Pawn", "C4", "C5"));
console.log("forward 2 => " + canMove("Pawn", "C4", "C6"));
console.log("backward 2 => " + canMove("Pawn", "C4", "C2"));
console.log("backward 1 => " + canMove("Pawn", "C4", "C3"));
//=================================================================
console.log("--------------------------------------")
console.log("**Rook Moves**");
console.log("right 7 => " + canMove("Rook", "a8", "H8"));
console.log("Off the board => " + canMove("Rook", "A9", "H8"));
console.log("forward 5 => " + canMove("Rook", "A7", "A2"));
console.log("back 2 => " + canMove("Rook", "E5", "E7"));
console.log("right 1 => " + canMove("Rook", "D7", "E7"));
//=================================================================
console.log("--------------------------------------")
console.log("**Knight Moves**");
console.log("forward 6, right 6 => " + canMove("Knight", "A7", "G1"));
console.log("forward 1, right 2 => " + canMove("Knight", "A7", "C6"));
console.log("back 2, left 1 => " + canMove("Knight", "E5", "D7"));
console.log("right 2, back 1 => " + canMove("Knight", "E5", "G6"));
console.log("back 1 => " + canMove("Knight", "E5", "E6"));
console.log("--------------------------------------")
//===============================================================
console.log("**Bishop Moves**");
console.log("diagonal 6 => " + canMove("Bishop", "A7", "G1"));
console.log("diagonal 1 => " + canMove("Bishop", "E5", "F6"));
console.log("forward 4 => " + canMove("Bishop", "A7", "A3"));
console.log("offboard => " + canMove("Bishop", "J7", "B8"));
console.log("diagonal => " + canMove("Bishop", "D4", "B6"));
//===============================================================
console.log("--------------------------------------")
console.log("**Queen Moves**");
console.log("diagonal => " + canMove("Queen", "E5", "G7"));
console.log("forward 2 => " + canMove("Queen", "D4", "D6"));
console.log("left 2 => " + canMove("Queen", "F2", "D2"));
console.log("back 2, right 2 => " + canMove("Queen", "D4", "F3"));
console.log("offboard => " + canMove("Queen", "D9", "B6"));
//===============================================================
console.log("--------------------------------------")
console.log("**King Moves**");
console.log("diagonal 2 => " + canMove("King", "D4", "B6"));
console.log("forward 1 => " + canMove("King", "D4", "D5"));
console.log("back 1 => " + canMove("King", "D4", "D3"));
console.log("diagonal 1 => " + canMove("King", "E4", "F3"));
console.log("diagonal 1 => " + canMove("King", "E4", "F5"));
