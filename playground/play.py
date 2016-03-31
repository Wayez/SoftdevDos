p = "myNoobPass1234"
print [x for x in p]
print [x for x in "1234"]
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
print [x for x in p if x in UC_LETTERS]
print [1 for x in p if x in UC_LETTERS]
print [1 if x in UC_LETTERS else 0 for x in p]
