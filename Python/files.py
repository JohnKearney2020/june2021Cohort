# =========
# Reading
# =========
# with is most often used with the open() function
# open() takes the file name we want to open as a parameter, and which mode is the second parameter
# with open('greetings.txt', 'r') as file_handle:
#   contents = file_handle.read()
#   print (contents)

# =========
# Pickle
# =========
import pickle

to_do_list = [
  {
    "title": "Sand the floor",
    "priority": 1,
    "complete": True
  },
  {
    "title": "Wax on, wax off",
    "priority": 2,
    "complete": False
  },
  {
    "title": "Paint the fence",
    "priority": 3,
    "complete": False
  }
]
# w = write, b = binary
with open('todo.pickle', 'wb') as file_handle:
  pickle.dump(to_do_list, file_handle)
