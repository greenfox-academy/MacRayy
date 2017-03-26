# Queue of festivalgoers at entry
# no. of alcohol units
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

def remove_watchlist(gun):
    watchlist = []
    for gun in queue:
        if gun['guns'] > 0:
            watchlist.append(gun['name'])
            gun['guns'] = 0
    return watchlist

print(remove_watchlist(queue))


def remove_alcohol(booze):
    security_alchol_loot = 0
    for booze in queue:
        if booze['alcohol'] > 0:
            security_alchol_loot += booze['alcohol']
            booze['alcohol'] = 0
    return security_alchol_loot

print("Looted alcohol: " + str(remove_alcohol(queue)))

print(queue)
