function display_board(width_val){
    document.querySelector(".form").style.display = "none";
    document.querySelector(".container").style.display = "block";
    const grid_display = document.querySelector(".grid"); 
    const score_display = document.getElementById("score");

    let width = width_val;
    let squares_array = [];
    let score = 0;
    if(width == 3){
        grid_display.style.width = "360px";
        grid_display.style.height = "360px";
        document.title = "64";
    }
    else if(width == 4){
        document.title = "256";
    }
    else if(width == 5){
        grid_display.style.width = "600px";
        grid_display.style.height = "600px";
        document.title = "2048";
    }

    function generate_num(){
        let random_num = Math.floor(Math.random() * squares_array.length);
        if(squares_array[random_num].innerHTML == 0){
            squares_array[random_num].innerHTML = 2;
            check_for_color();
        }
        else{
            generate_num();
        }
    }

    function createBoard(){
        for(let i = 0; i < width * width; i++){
            let sqr = document.createElement('div');
            sqr.innerHTML = 0;
            sqr.style.textAlign = "center";
            grid_display.appendChild(sqr);
            squares_array.push(sqr);
        }
        generate_num();
        generate_num();
    }
    createBoard();

    function check_for_color(){
        for(let i = 0; i < squares_array.length; i++){
            switch(squares_array[i].innerHTML){
                case "0":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(222, 221, 221)";
                    break;
                case "2":
                    grid_display.childNodes[i].style.backgroundColor = "lightsalmon";
                    break;
                case "4":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(234, 114, 70)";
                    break;
                case "8":
                    grid_display.childNodes[i].style.backgroundColor = "orangered";
                    break; 
                case "16":
                    grid_display.childNodes[i].style.backgroundColor = "red";
                    break;
                case "32":
                    grid_display.childNodes[i].style.backgroundColor="rgb(223, 2, 2)";
                    break;
                case "64":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(237, 9, 77)";
                    break;
                case "128":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(244, 52, 110)";
                    break;
                case "256":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(248, 118, 157)";
                    break;
                case "512":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(186, 100, 126)";
                    break;
                case "1024":
                    grid_display.childNodes[i].style.backgroundColor = "rgb(252, 173, 197)";
                    break;
                case "2048":
                    grid_display.childNodes[i].style.backgroundColor = "turquoise";
                    break;
                default:
                    break;
            }
        }
    }

    // Swipe Right
    function move_right(){
        for(let i = 0; i < width * width; i++){
            if(i % width === 0){
                if(width === 3){
                    var totalOne = squares_array[i].innerHTML;
                    var totalTwo = squares_array[i + 1].innerHTML;
                    var totalThree = squares_array[i + 2].innerHTML;
                    var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree)];
                }
                else if(width === 4){
                    var totalOne = squares_array[i].innerHTML;
                    var totalTwo = squares_array[i + 1].innerHTML;
                    var totalThree = squares_array[i + 2].innerHTML;
                    var totalFour = squares_array[i + 3].innerHTML;
                    var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                }
                else if(width === 5){
                    var totalOne = squares_array[i].innerHTML;
                    var totalTwo = squares_array[i + 1].innerHTML;
                    var totalThree = squares_array[i + 2].innerHTML;
                    var totalFour = squares_array[i + 3].innerHTML;
                    var totalFive = squares_array[i + 4].innerHTML;
                    var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
                }
                let filteredRow = row.filter(num => num);
                let missing = width - filteredRow.length;
                let zeroes = Array(missing).fill(0);
                let newRow = zeroes.concat(filteredRow);
                for(let j = 0; j < width; j++){
                    squares_array[i + j].innerHTML = newRow[j];
                }
            }
        }
    }

    // Swipe Left
    function move_left(){
        for(let i = 0; i < width * width; i++){
            if(i % width === 0){
                if(width === 3){
                    var totalOne = squares_array[i].innerHTML;
                    var totalTwo = squares_array[i + 1].innerHTML;
                    var totalThree = squares_array[i + 2].innerHTML;
                    var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree)];
                }
                else if(width === 4){
                    var totalOne = squares_array[i].innerHTML;
                    var totalTwo = squares_array[i + 1].innerHTML;
                    var totalThree = squares_array[i + 2].innerHTML;
                    var totalFour = squares_array[i + 3].innerHTML;
                    var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                }
                else if(width === 5){
                    var totalOne = squares_array[i].innerHTML;
                    var totalTwo = squares_array[i + 1].innerHTML;
                    var totalThree = squares_array[i + 2].innerHTML;
                    var totalFour = squares_array[i + 3].innerHTML;
                    var totalFive = squares_array[i + 4].innerHTML;
                    var row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
                }
                let filteredRow = row.filter(num => num);
                let missing = width - filteredRow.length;
                let zeroes = Array(missing).fill(0);
                let newRow = filteredRow.concat(zeroes);

                for(let j = 0; j < width; j++){
                    squares_array[i + j].innerHTML = newRow[j];
                }
            }
        }
    }

    // Swipe Down
    function move_down(){
        for(let i = 0; i < width; i++){
            if(width === 3){
                var totalOne = squares_array[i].innerHTML;
                var totalTwo = squares_array[i + width].innerHTML;
                var totalThree = squares_array[i + width * 2].innerHTML;
                var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree)];
            }
            else if(width === 4){
                var totalOne = squares_array[i].innerHTML;
                var totalTwo = squares_array[i + width].innerHTML;
                var totalThree = squares_array[i + width * 2].innerHTML;
                var totalFour = squares_array[i + width * 3].innerHTML;
                var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
            }
            else if(width === 5){
                var totalOne = squares_array[i].innerHTML;
                var totalTwo = squares_array[i + width].innerHTML;
                var totalThree = squares_array[i + width * 2].innerHTML;
                var totalFour = squares_array[i + width * 3].innerHTML;
                var totalFive = squares_array[i + width * 4].innerHTML;
                var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
            }
            let filteredColumn = column.filter(num => num);
            let missing = width - filteredColumn.length;
            let zeroes = Array(missing).fill(0);
            let newColumn = zeroes.concat(filteredColumn);
            for(let j = 0; j < width; j++){
                squares_array[i + width * j].innerHTML = newColumn[j];
            }
        }
    }

    // Swipe Up
    function move_up(){
        for(let i = 0; i < width; i++){
            if(width === 3){
                var totalOne = squares_array[i].innerHTML;
                var totalTwo = squares_array[i + width].innerHTML;
                var totalThree = squares_array[i + width * 2].innerHTML;
                var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree)];
            }
            else if(width === 4){
                var totalOne = squares_array[i].innerHTML;
                var totalTwo = squares_array[i + width].innerHTML;
                var totalThree = squares_array[i + width * 2].innerHTML;
                var totalFour = squares_array[i + width * 3].innerHTML;
                var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
            }
            else if(width === 5){
                var totalOne = squares_array[i].innerHTML;
                var totalTwo = squares_array[i + width].innerHTML;
                var totalThree = squares_array[i + width * 2].innerHTML;
                var totalFour = squares_array[i + width * 3].innerHTML;
                var totalFive = squares_array[i + width * 4].innerHTML;
                var column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
            }
            let filteredColumn = column.filter(num => num);
            let missing = width - filteredColumn.length;
            let zeroes = Array(missing).fill(0);
            let newColumn = filteredColumn.concat(zeroes);
            for(let j = 0; j < width; j++){
                squares_array[i + width * j].innerHTML = newColumn[j];
            }
        }
    }

    function add_row(){
        for(let i = 0; i < (width * width) - 1; i++){
            if(((i+1) % width != 0) && (squares_array[i].innerHTML === squares_array[i+1].innerHTML)){
                let add_total = parseInt(squares_array[i].innerHTML) + parseInt(squares_array[i + 1].innerHTML);
                squares_array[i].innerHTML = add_total;
                squares_array[i + 1].innerHTML = 0;
                score += add_total;
                score_display.innerHTML = score;
            }
        }
    }

    function add_column(){
        for(let i = 0; i < width * (width - 1); i++){
            if(squares_array[i].innerHTML === squares_array[i + width].innerHTML){
                let add_total = parseInt(squares_array[i].innerHTML) + parseInt(squares_array[i + width].innerHTML);
                squares_array[i].innerHTML = add_total;
                squares_array[i + width].innerHTML = 0;
                score += add_total;
                score_display.innerHTML = score;
            }
        }
    }

    function key_control(e){
        if(e.keyCode == 39){
            key_right();
        }
        else if(e.keyCode == 37){
            key_left();
        }
        else if(e.keyCode == 38){
            key_up();
        }
        else if(e.keyCode == 40){
            key_down();
        }
        check_for_game_over();
        check_for_win();
    }

    document.addEventListener('keyup', key_control);

    function key_right(){
        move_right();
        add_row();
        move_right();
        generate_num();
    }

    function key_left(){
        move_left();
        add_row();
        move_left();
        generate_num();
    }

    function key_down(){
        move_down();
        add_column();
        move_down();
        generate_num();
    }

    function key_up(){
        move_up();
        add_column();
        move_up();
        generate_num();
    }

    // check for Win
    function check_for_win(){
        for(let i = 0; i < squares_array.length; i++){
            if(width == 3){
                if(squares_array[i].innerHTML == 64){
                    alert("You Win");
                    document.removeEventListener('keyup', key_control);
                }
            }
            else if(width == 4){
                if(squares_array[i].innerHTML == 256){
                    alert("You Win");
                    document.removeEventListener('keyup', key_control);
                }
            }
            else if(width == 5){
                if(squares_array[i].innerHTML == 2048){
                    alert("You Win");
                    document.removeEventListener('keyup', key_control);
                }
            }
        }
    }

    function check_for_game_over(){
        let zero = 0;
        for(let i = 0; i < squares_array.length; i++){
            if(squares_array[i].innerHTML == 0){
                zero++;
            }
        }
        if(zero === 0){
            alert("You Lose");
            document.removeEventListener('keyup', key_control);
        }
    }
}