current_hours = 14;
current_minutes = 34;
current_seconds = 42;

# Write a program that prints the remaining seconds (as an integer) from a
# day if the current time is represented bt the variables

current_hours = current_hours * 60 ** 2
current_minutes = current_minutes * 60
dayinseconds = 24 * 60 ** 2

remainingseconds = dayinseconds - current_hours - current_minutes - current_seconds

print(remainingseconds)
