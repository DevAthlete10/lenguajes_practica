"""Modulos"""
import time
import random
from tablero import create_board, PIECES, print_board, add_piece,WIDTH, is_valid_position

# Main loop del juego
print(__name__)
def main():
    """MAIN"""
    board = create_board()
    current_piece = random.choice(list(PIECES.values()))
    piece_x, piece_y = WIDTH // 2, 0

    while True:
        print_board(board)
        if is_valid_position(board, current_piece, piece_x, piece_y + 1):
            piece_y += 1
        else:
            add_piece(board, current_piece, piece_x, piece_y)
            current_piece = random.choice(list(PIECES.values()))
            piece_x, piece_y = WIDTH // 2, 0

        time.sleep(0.5)

if __name__ == "__main__":
    main()
