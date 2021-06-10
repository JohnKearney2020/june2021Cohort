
presents = {
  "good": [],
  "bad": "lump of coal"
}

while True:
  print("0 to exit, 1 to go on to the next question...")
  next_present = input("What would you like for Christmas?: ")
  if next_present == "0":
    break
  elif next_present == "1":
    break
  else:
    presents["good"].append(next_present)

if next_present == "1":
  while True:
    good_bad = input("Have you been good this year?: (Y/N) ")
    good_bad = good_bad.lower()
    if good_bad == "y":
      print("Congratulations, here are all the toys you will be getting:")
      print(presents["good"])
      break
    else:
      print(f"Sorry. You were bad this year. You'll be getting a {presents['bad']}")
      break
