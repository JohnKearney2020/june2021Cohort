# print("test print")

# name = input('WHAT IS YOUR NAME? ').upper()
# name = input('WHAT IS YOUR NAME? ')
# print('HELLO ' + name.upper())

# name = input("What is your name?: ")

# print("Hello" + str(1) + ((("Lets see some parenthesis!"))))


# F strings
name = input('Name: ')
subject = input('Subject: ')
# story = f"{name}'s fav subject is {subject}"
# story = "%s's fav subject is %s. %d" % (name, subject, 10)
story = "%s's fav subject is %s. %.2f" % (name, subject, 10.978654321)
print(story)


