# Add "a" to every string in far

far = ["kuty", "macsk", "kacs", "rók", "halacsk"]

def add_letter_to_list_items(item):
    for item in range(len(far)):
        far[item] += "a"
    return far


print(add_letter_to_list_items(far))
