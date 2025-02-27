#O(1) constant time

def addUp(num):
    sum = int(num * (num - 1) /2)
    return sum


#O(n) linear time
def addUp_2(num :int) -> int:
    sum = 0
    for i in range(num):
        sum += i
    return sum
print(addUp(2))
print(addUp_2(2))