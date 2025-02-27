# def fibonacci(n):
#     if n <= 1 :
#         return 1
    
#     a = 0 
#     b = 1 

#     for i in range(2,n + 1) :
#         fib = a + b 
#         a = b
#         b = fib

#     return b

# print("fibonacci => ",fibonacci(80))

from functools import lru_cache



@lru_cache(maxsize=None)
def fibonacciMeno(n):
    if n <= 1:
        return n
    return fibonacciMeno(n - 1) + fibonacciMeno(n - 2)

print("fibonacciMeno(80) =", fibonacciMeno(80))
