# # dictionaries are defined with {}
# friend = {
#     # they have keys/value pairs
#     "name": "Alan Turing",
#     "cell": "1234567",
#     "birthday": "june 23"
# }

# # empty dictionary
# nothing = {}

# # values can be anything
# superhero = {
#     "name": "Tony Stark",
#     "level": 9,
#     "avenger": True,
#     "gear": [
#         "fast cars",
#         "money",
#         "iron man suit"
#     ],
#     "vehicle": {
#         "make": "audi",
#         "model": ["R8", "A4"]
#     },
#     "weakness": "his ego"
# }

# # get values with key name
# print(superhero['name'])
# # get method also works, and can have a "fallback" or default value
# print(superhero.get('name', 'Unknown'))

# # access all values of all keys
# print(superhero.values())

# # check for a key in a dictionary
# if "weakness" in superhero:
#     print('bad guys might win')
# else:
#     print('bad guys, go home')

# # update values by the key and assigning a new value
# superhero['avenger'] = 'potato'

# # delete items from dictionary with del keyword
# del superhero['gear']

# # loop over keys/items together with .items()
# for key, value in superhero.items():
#     print(f"Superhero's {key} is")
#     print(value)

# # accessing nested data is done by using multiple keys and/or indexes (depending
# # on the value data type you are accessing)
# print(superhero['vehicle']['model'][1])


superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}
# Ways to access values in a dictionary
vehicle = superhero["vehicle"]
vehicle_title = vehicle["title"]
all_in_one = superhero["vehicle"]["title"]

# print(vehicle)
# print(vehicle_title)
# print(all_in_one)

# arrays (lists) in a dictionary
# lasso = superhero["gear"][0]
# bracelets = superhero["gear"][1]
# print(lasso)
# print(bracelets)

# iterate over a list in a dictionary
for item in superhero["gear"]:
    # print("%s has %s" % (superhero["name"], item))
    name = superhero["name"]
    print(f"{name} has {item}")