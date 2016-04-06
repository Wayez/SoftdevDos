def makeAdder(n):
    def inner(x):
        return x + n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

#print add3(10) #returns 13
#print add5(10) #returns 15

########################################################################################################################
def make_counter():
    # private "instance" data
    # has to be a list due to weird python scoping rules
    count = [0]

    #public methods
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    #returns a dictionary
    #return ["inc": inc, "dec": dec, "reset": reset, "get": get]
c1 = make_counter()
c2 = make_counter()

#c1['inc']()
#c1['inc']()
#c1['inc']()
#print c1['get']()

########################################################################################################################
#def dble():
#    name = f()
#    return name + name



########################################################################################################################

import random

def doubler(f):
    def inner():
        name = f()
        return name + name
    return inner

@doubler
def get_name():
    names = ["tom", "sue", "harry", "lisa", "sarah", "horatio"]
    return random.choice(names)

print get_name()
