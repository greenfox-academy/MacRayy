# Saturn is missing from the planetList
# Insert it into the correct position

planet_list = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"]

# one solution
planet_list.insert(5, "Saturn")

print(planet_list)

# another solution
new_planet_list = planet_list[:5]
new_planet_list.append("Saturn")
new_planet_list.extend(planet_list[6:])

print(new_planet_list)
