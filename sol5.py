# Task

# Given a string str, reverse it and omit all non-alphabetic characters.

# Example

# For str = "krishan", the output should be "nahsirk".

# For str = "ultr53o?n", the output should be "nortlu".

def reverse_letter(string):
  arr = []
  for e in string:
    if e.isalpha():
      arr.append(e)
  return ''.join(arr)[::-1]

