# Create function that returns the name and balance of cash on an account

# Create function that transfers an balance of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - balance
#
# Print "404 - account not found" if any of the account numbers don't exist

input_account_num = 11234543 #int(input('Enter account number:'))

accounts = [
	{'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2},
	{'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23},
	{'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0}
]

def search(input_account_num):
    for an in accounts:
        if an['account_number'] == input_account_num:
            print(True)
        else:
            print('404 - account not found')

search(input_account_num)


"""
def output_name_and_balance(*args):
    for client in accounts:
        print(client['client_name'], "has the balance:", client['balance'])

output_name_and_balance(accounts)
"""