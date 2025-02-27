greeting = 'Hello greeting python'

print("fist character : ",greeting[0])
print("Second characetr with Last character => ", greeting[2:-1])

text = '  Hello,w orld   '

print("Before : ",text ,"Characeter :",len(text))

clearn_whitespace = text.strip()
print("Removing the whitespace with strip() => ",clearn_whitespace ,len(clearn_whitespace))

split_text = text.split()
split_text_2 = clearn_whitespace.split(",")
print("split string into a list based  : ",split_text , len(split_text))
print("split stirng => ",split_text_2)

#f {} f

name = "alice"
age = 25
address = "Yangon Myanmar"
print(f"My name is {name} and I'm {age}, live from {address}")
