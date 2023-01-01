class TicTacToe {
  constructor(row, col) {
    let createTable = document.getElementById("table");
    this.row = row;
    this.col = col;

    for (let i = 0; i < row; i++) {
      let newRow = createTable.insertRow(i);
      for (let b = 0; b < col; b++) {
        let newCell = newRow.insertCell(b);
        let createButton = document.createElement("button");
        createButton.id = "knop";
        createButton.value = `${i}${b}`;
        let addButton = createButton.classList.add(`${i}${b}`);
        let cellContent = newCell.appendChild(createButton);
      }
    }
  }

  addEvents() {
    const knoppen = document.querySelectorAll("button");
    const btnsArr = Array.from(knoppen);
    let xOfO = 0;

    for (let i = 0; i < btnsArr.length; i++) {
      btnsArr[i].addEventListener("click", () => {
        if (btnsArr[i].innerHTML == "") {
          if (xOfO % 2 == 0) {
            btnsArr[i].innerHTML = "X";
            xOfO++;
          } else {
            btnsArr[i].innerHTML = "O";
            xOfO++;
          }
        } else {
        }
        this.check(btnsArr);
      });
    }
  }

  makeCombinations() {
    let possibleCombinations = [];

    for (let i = 0; i < this.row; i++) {
      let tempPush = [];
      for (let b = 0; b < this.col; b++) {
        tempPush.push(i, b);
      }
      possibleCombinations.push(tempPush);
    }

    for (let i = 0; i < this.row; i++) {
      let tempPush = [];
      for (let b = 0; b < this.col; b++) {
        tempPush.push(i, b);
      }
      possibleCombinations.push(tempPush);
    }

    let tempPushDiag0 = [];

    for (let b = 0, i = 0; b < this.row, i < this.col; b++, i++) {
      tempPushDiag0.push(i, b);
    }

    possibleCombinations.push(tempPushDiag0);

    let tempPushDiag1 = [];

    for (let b = this.row - 1, i = 0; b < 1000, i < this.col; b--, i++) {
      tempPushDiag1.push(i, b);
    }

    possibleCombinations.push(tempPushDiag1);

    return possibleCombinations;
  }

  check(aap) {
    let bordContent = [];
    let g = 0;
    const combos = this.makeCombinations();

    for (let i = 0; i < this.col; i++) {
      let tempArray = [];
      for (let b = 0; b < this.row; b++) {
        tempArray.push(aap[g].innerHTML);
        g++;
      }
      bordContent.push(tempArray);
    }

    for (let a = 0; a < combos.length; a++) {
      let v = 1;
      let o = 0;
      let x = 0;
      for (let z = 0; z < combos[a].length; z += 2) {
        let content = bordContent[combos[a][z]][combos[a][v]]
        if (content == "X") {
          x++;
          if (x == this.row) {
            console.log("X WINT")
          }
        } else if (content == "O") {
          o++;
          if (o == this.row) {
            console.log("O WINT")
          }

        }
        v += 2;
      }
    }
  }
}

const size = 3;

let TTT = new TicTacToe(size, size);
TTT.addEvents();
