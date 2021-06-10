from person import Person
from vehicle import Vehicle

# Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in a variable sonny.
sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
# Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in a variable jordan.
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")
# print(sonny)
# print(jordan)

# Have sonny greet jordan using the greet method
# sonny.greet(jordan)
# Have jordan greet sonny using the greet method.
# jordan.greet(sonny)

# Write a print statement to print the contact info (email and phone) of Sonny.
# print(f"""Sonny's contact info:
#   {sonny.email}
#   {sonny.phone}
# """)

# Write another print statement to print the contact info of Jordan.
# print(f"""Jordan's contact info:
#   {jordan.email}
#   {jordan.phone}
# """)

# legacy = Vehicle("Subaru", "Legacy","2018")
# legacy.print_info()

jordan.add_friend(sonny)
print(len(jordan.friends))