hotel = {
  '1': {
    '101': ['George Jefferson', 'Wheezy Jefferson'],
  },
  '2': {
    '237': ['Jack Torrance', 'Wendy Torrance'],
  },
  '3': {
    '333': ['Neo', 'Trinity', 'Morpheus'],
  }
}

# hotel['1']['102'] = ['John Kearney', 'Hayden Gregory']
# hotel[user_floor][user_room] = [user_names]

print(bool(hotel['1']['102']))

# while True:
#   print("========================== | ==============================")
#   print("1 for checkin, 2 for checkout...")
#   in_or_out = input("Would you like to check in or out? ")
#   # Checking In
#   if in_or_out == "1":
#     floor = input("What floor would you like to stay on?: ")
#     room_num = input("What room number would you like to stay in?: ")
#     print(floor)
#     print(room_num)
#     # hotel['1']['102'] = ['John Kearney', 'Hayden Gregory']
#     if(false):
#       print("Sorry, that room is already occupied...")
#     else:
#       num_occupants = input("How many occupants?: ")
#       names = []
#       count = 1
#       for occupant in range(int(num_occupants)):
#         name = input(f"What is the name of occupant number {count}?: ")
#         names.append(name)
#         count += 1
#       hotel[floor][room_num] = names
#       print(hotel[floor][room_num])
#   # Checking Out
#   else:
#     print("get to this")