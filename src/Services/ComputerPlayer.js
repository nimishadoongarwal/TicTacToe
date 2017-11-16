function ComputerPlayer(squares, count){
    let i = Math.floor(Math.random() * 9) + 0 ;
    let isNotAvailable = squares[i] ? true : false;
    while(isNotAvailable){
        i= Math.floor(Math.random() * 9) + 0 ;
        isNotAvailable = squares[i] ? true : false;
    }
    return i;
}

export default ComputerPlayer;