"""Modulo"""
import os

# Dimensiones del tablero
WIDTH, HEIGHT = 10, 20

# Definición de las piezas (solo algunas para simplificar)
PIECES = {
    'I': [[1, 1, 1, 1]],
    'O': [[1, 1],
          [1, 1]],
    'T': [[0, 1, 0],
          [1, 1, 1]],
    # Agrega más piezas según sea necesario
}

# Función para crear un tablero vacío
def create_board():
    """crear"""
    current_piece = PIECES['O']
    print(current_piece)
    return [[0 for _ in range(WIDTH)] for _ in range(HEIGHT)]


# Función para imprimir el tablero
def print_board(board):
    """board"""
    os.system('cls')
    for row in board:
        print(' '.join(['#' if cell else '.' for cell in row]))


# Función para agregar una pieza al tablero
def add_piece(board, piece, x, y):
    """piece"""
    for i, row in enumerate(piece):
        for j, cell in enumerate(row):
            if cell:
                board[y + i][x + j] = cell


# Función para verificar si la posición es válida
def is_valid_position(board, piece, x, y):
    """position"""
    for i, row in enumerate(piece):
        for j, cell in enumerate(row):
            if cell:
                if x + j < 0 or x + j >= WIDTH or y + i >= HEIGHT or board[y + i][x + j]:
                    return False
    return True

# tablero = create_board()
create_board()

# print_board(tablero)
