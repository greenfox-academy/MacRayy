from fleet import Fleet
from thing import Thing

fleet = Fleet()
# Create a fleet of things to have this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch

milk = Thing("Get milk")
fleet.add(milk)

remove = Thing("Remove the obstacles")
fleet.add(remove)

stand = Thing("Stand up")
stand.complete()
fleet.add(stand)

eat = Thing("Eat lunch")
eat.complete()
fleet.add(eat)

print(fleet)
