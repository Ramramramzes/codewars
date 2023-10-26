# Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

# The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

# Examples:

# "String" => "StRiNg"
# "Weird string case" => "WeIrD StRiNg CaSe"

def to_weird_case(words):
  res = ''
  words = words.lower().split()
  for el in enumerate(words):
    if el[0] is not 0:
      res += ' '
    for i in enumerate(el[1]):
      if i[1].isalpha() == False:
        res += i[1]
        continue
      if i[0] == 0 or i[0] % 2 == 0:
        res += i[1].upper()
      else:
        res += i[1]
  return res