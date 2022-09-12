def encode(msg):
    
    output = ''

    for c in msg:
        output += str(ord(c))
        output += ' '
    
    return output

def decode(msg):

    output = ''
    
    for word in msg.split():
        output += chr(int(word))
    
    return output

#print(encode('Hello'))
#print(decode("72 101 108 108 111"))