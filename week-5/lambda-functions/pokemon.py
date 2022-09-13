import json

with open("pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)
    
#ex1

pokemon_data = list(map(lambda p:{'id': p['id'], 'name': p['name'], 'type': p['type'], 'weight': p['weight'], 'height': p['height'], 'weaknesses': p['weaknesses']}, pokemon_data))


#pokemon names

pokemon_names = list(map(lambda p: p['name'], pokemon_data))

#strong pokemon

strong_pokemon = list(filter(lambda p: p['weight'] > 100, pokemon_data))

print(list(map(lambda p: p['name'], strong_pokemon)))

#water pokemon

