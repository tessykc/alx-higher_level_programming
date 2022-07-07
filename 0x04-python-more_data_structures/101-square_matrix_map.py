#!/usr/bin/python3
def square_matrix_map(matrix=[]):
    return list(map(lambda x: (lambda i: i**2, x)), matrix)
