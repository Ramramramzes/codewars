# Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

# Examples

# "hello"     -->  "hll"
# "codewars"  -->  "cdwrs"
# "goodbye"   -->  "gdby"
# "HELLO"     -->  "HELLO"

def shortcut(s):
  cut = ['a', 'e', 'i', 'o', 'u']
  for l in s:
    if l in cut:
      s = s.replace(l,"")
  return s