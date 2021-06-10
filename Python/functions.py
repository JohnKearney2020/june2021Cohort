# def is short for define

def add(num1,  num2):
  return num1 + num2

def add5(num1):
  return num1 + 5

# we technically 'invoke' a function, but often refer to it as 'calling' a function
# print(add(15, 1))
# print(add(8, 3))
# print(add(6, 17))
user_num = int(input('What Number would you like to add 5 to? '))

print(add5(user_num))