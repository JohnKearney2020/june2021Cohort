#print each time we eat a donut up to ten times
# donuts_eaten = 1;
# while donuts_eaten <= 10:
#   print(f"You have eaten {donuts_eaten} donuts.")
#   donuts_eaten += 1

# while True:
#   print("working...")
#   user_input = input('Should I Stop? (y/n): ')
#   if user_input == 'y':
#     print("Thank you!")
#     exit()
#   else:
#     print('Sigh...')

#print each time we eat a donut up to ten times
# donuts_eaten = 1;
# while donuts_eaten <= 10:
#   print(f"You have eaten {donuts_eaten} donuts.")
#   donuts_eaten += 1

# donuts_to_eat = int(input('How many donuts will you eat?'))
# user_donuts_eaten = 0
# while user_donuts_eaten < donuts_to_eat:
#   user_donuts_eaten += 1
#   if user_donuts_eaten == donuts_to_eat / 2:
#     print('You are halfway there!')
#     print(f"you have eaten {user_donuts_eaten} donuts.")
#   else:
#     print(f"you have eaten {user_donuts_eaten} donuts.")


# NxN square
squareSize = int(input("How big is the square?: "))
counter = 1
row = ""
while counter <= squareSize:
  row += '*';
  counter+= 1

counter = 1 # Reset the counter here
while counter <= squareSize:
  print(row)
  counter+= 1




squareSize = int(input("How big is the square?: "))
row = ""
for i in range(squareSize):
  row+= '*'

for i in range(squareSize):
  print(row)



# square = "*****"
# count = 1;
# while count <= 5:
#   print(square)
#   count += 1