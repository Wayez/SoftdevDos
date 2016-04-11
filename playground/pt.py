def pt(n):
    ans = []
    for x in range(1, n):
        for y in range (1, n):
            for z in range(1, n):
                temp = [x, y, z]
                if x * x + y * y == z * z and pth(z, ans):
                     ans.append(temp)
    return ans

#to handle duplicates
def pth(z, ans):
    for x in ans:
        if x[2] == z:
            return False
    return True
            
print pt(20)

def pt2(n):
    return [[a, b, c]
            for a in range(1, n)
            for b in range(a + 1, n)
            for c in range(b + 1, n)
            if a * a + b * b == c * c]

print pt2(20)

#1. Pick a Pivot
#2. PARTITION into 2 Lists
#   *all values < p are LH
#   *all values > p are OH
#   *PIVOT is at right place
#3. qsort(LH) + p + qsort(OH)

import random, time

def name_log(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print 'execution time: ' + str(time.time() - t)
        return x
    return inner


def randList(n, lower = 100, upper = 100):
    l = []
    for i in range(n):
        l.append( random.randrange(lower, upper))
    return l

test = [random.randint(0, 1000) for x in range(10)]
#test = [3, 23, 5,3 , 354, 2, 5435,5, 234, 2, 86, 64, 9]

@name_log
def qsort(List):
    if len(List) <= 1:
        return List
    index = random.randint(0, len(List) - 1)
    pivot = List[index]
    lh = [ x for x in List if x < pivot]
    oh = [ x for x in List if x > pivot]
    c = [ x for x in List if x == pivot]
    return qsort(lh) + c + qsort(oh)

print test
print qsort(test)
