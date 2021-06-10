import json

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# load existing value(s) from the json file into a variable called 'todos'
with open('todos.json', 'r') as to_do_list:
  todos = json.load(to_do_list)

def print_todos():
    count = 1
    for todo in todos:
        print(f"{count}: {todo}")
        count += 1

while True:
  print("""
    Choose an option:
    1. Print to-dos
    2. Add to-dos
    3. Remove to-dos
    0. Quit
  """)
  user_choice = input('')

  if user_choice == '1': # print current to dos 
    count = 1
    for todo in todos:
      print(f"{count}: {todo}")
      count += 1

  elif user_choice == '2': # add new item 
    new_item = input('What do you want to add?: ')
    todos.append(new_item)
    # update the json file with the new to-do list with the new item
    with open('todos.json', 'w') as to_do_list:
      # dump the contents of our todos list into to_do_list
      json.dump(todos, to_do_list)
    
    # # if we wanted to print what we just added to our json file
    # with open('todos.json', 'r') as to_do_list:
    #   data = json.load(to_do_list)
    #   print(data)

  elif user_choice == '3': # remove an item from our to-do list
    delete_index = int(input('which item would you like to remove?: '))
    print_todos() #print out our current to do list
    del todos[delete_index - 1] # - 1 b/c our list is zero indexed
    # update the json file with the new to-do list that no longer has the item we just deleted
    with open('todos.json', 'w') as to_do_list:
      json.dump(todos, to_do_list)

  # exit the program loop
  elif user_choice == '0':
      break
