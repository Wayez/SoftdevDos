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
