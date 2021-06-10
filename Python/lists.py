languages = ['python', 'javascript', 'html', 'css']
#           [    0   ,      1      ,    2,      3 ]  

# this will print index 1 and up to, but not including index 3
# in other words, it will print index 1 and 2
# print(languages[1:3]);
# this will start at the beginning and go up to, but not including index 3
# print(languages[:3]);
# this will start at index 1 and include everything after it
# print(languages[1:]);


# index = 0;
# while index < len(languages):
#   print(f"No, {languages[index]} is the best language!")
#   index += 1

# For Loops
# for lang in languages:
#   print(f"No, {lang} is the best language!")


# 8. Reverse a String
# Given a string, print the string reversed.
str = "John"
str_rev = ""
counter = len(str) - 1
while counter >= 0:
  str_rev += str[counter]
  counter -= 1
print(str_rev)

