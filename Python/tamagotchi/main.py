#Define a dictionary that holds our pet's attributes
from cuddlypet import CuddlyPet
from pet import Pet
from toy import Toy

# cujo = Pet('Cujo the Dog')
# benji = Pet('Benji')
# print(cujo.name)
# print(benji.name)

# print(cujo.fullness)
# cujo.eat_food()
# print(cujo.fullness)

pet_name = input("What is your pet's name?: ")
pet_type = int(input('''
1. Pet
2. Cuddly Pet
Which type of pet would you like?
'''))

if pet_type == 1:
  pet = Pet(pet_name)
elif pet_type == 2:
  pet = CuddlyPet(pet_name)

# This will print out something obb b/c it's an object
print(pet)

while True:
  print(pet)
  print("""
  1. Feed Pet
  2. Play with Pet
  3. Do Nothing
  4. Give toy
  """)
  choice = int(input(": "))
  if choice == 1:
    #feed pet
    pet.eat_food()
  elif choice == 2:
    #play with the pet
    pet.get_love()
  elif choice == 4:
    #play with the pet
    pet.give_toy(Toy())
  # each time the loop runs the pet will need some attention
  pet.be_alive()
  if not pet.is_alive():
    print(pet)
    print(f"Rest in peace {pet.name}")
    break
