import json

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

with open('superhero.json', 'w') as file_handle:
  # dump the contents of superhero into our filehandle
  json.dump(superhero, file_handle)

with open('superhero.json', 'r') as file_handle:
  # contents = file_handle.read()
  # print(contents['name'])
  data = json.load(file_handle)
  print(data['name'])