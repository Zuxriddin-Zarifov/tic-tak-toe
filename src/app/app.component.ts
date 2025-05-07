import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'tic-tak-toe';
  public nextPlayer = 'x';
  public board: string[] = Array(9).fill(' ');
  public winner: string = ' ';
  public gameOver = false;

  public resetGame() {
    this.board = Array(9).fill(' ');
    this.winner = ' ';
    this.gameOver = false;
    this.nextPlayer = 'x';
  }

  public clickButton(index: number) {
    if (this.board[index] === ' ' && !this.gameOver) {
      this.board[index] = this.nextPlayer;
      console.log(this.board[index]);
      console.log(this.nextPlayer);
      this.checkWinner();
      if (!this.gameOver) {
        this.nextPlayer = this.nextPlayer === 'x' ? 'o' : 'x';
      }
    }
  }

  public checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a] === this.board[b] && this.board[a] === this.board[c] && this.board[a] !== ' ') {
        this.winner = this.board[a];
        this.gameOver = true;
        return;
      }
    }

    if (!this.board.includes(' ')) {
      this.winner = 'Draw';
      this.gameOver = true;
    }
  }
}