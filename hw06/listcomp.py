#p = "myNoobPass1234"
#print [x for x in p]
#print [x for x in "1234"]
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcddefghijklmnopqrstuvwxyz"
#print [x for x in p if x in UC_LETTERS]
#print [1 for x in p if x in UC_LETTERS]
#print [1 if x in UC_LETTERS else 0 for x in p]
SP_CHARS = ".?!&#,;:-_*"
INTEGERS = "1234567890"
def validate(password):
    l0 = [x for x in password]
    l1 = [x for x in password if x in UC_LETTERS]
    l2 = [x for x in password if x in LC_LETTERS]
    l3 = [x for x in password if x in SP_CHARS]
    l4 = [x for x in password if x in INTEGERS]
    if len(l0) < 8:
        return "Password too short"
    if len(l1) == 0:
        return "You need an upper case letter"
    if len(l2) == 0:
        return "You need a lower case letter"
    if len(l3) == 0:
        return "You need a special character"
    if len(l4) == 0:
        return "You need a number"
    return "Good Password"

def strength(password):
    l1 = [1 for x in password if x in UC_LETTERS]
    l2 = [1 for x in password if x in LC_LETTERS]
    l3 = [5 for x in password if x in SP_CHARS]
    l4 = [3 for x in password if x in INTEGERS]
    score = len(l1) + len(l2)
    if len(l1) > 0 and len(l2) > 0:
        score *= 2
    for x in l2:
        score += x
    for x in l3:
        score += x
    for x in l4:
        score += x
    return score / 5

#print validate("duck")
#print validate("DUCK")
#print validate("Duck")
#print validate("Du*k")
print strength("1234567Ab.")
print strength("dswh")
print strength("Abc123")
print strength("GV79BUIOH8008090bhj**6Jfwfw")
