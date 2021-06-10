# name = input("What is your name?: ")

# if len(name) > 10:
#   print(f"Wow, long name! good to meet you {name}")
# elif len(name) > 5:
#   print("Ok, you have a medium name.")
# else:
#   print("Ok, you have a short name")

# And
# if len(name) < 10 and name == "John":
#   print("Hello John. And test")


# try:
#   day_number = int(input('Enter a day between 1 and 7 representing a day of the week: '))
#   if day_number <= 5:
#     print("Go to Work!")
#   elif day_number <= 7:
#     print("Sleep in.")
#   else:
#     print("Invalid input")
# except ValueError:
#   print("That's not a number. Noob.")

try:
  c = int(input('Temperature in C?: '))
  f = (c * 9/5) + 32
  print(f'Your temp in F is: {f}')
except:
  print('Invalid Input.')