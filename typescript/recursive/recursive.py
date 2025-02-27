def recursive(num):
    if(num <= 1) :
        return 1 
    re =recursive(num - 1)
    print("re => ",re , "num => ",num , "num and re ->",num * re)
    return num * re

print(recursive(5))

def factorial_recursive(n):
    if n == 0 or n == 1:  # Base case
        return 1
    else:
        return n * factorial_recursive(n - 1)  # Recursive call

# Usage
result = factorial_recursive(5)
print(f"Factorial (Recursive): {result}")


def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
print("fb => ",fibonacci(13))

