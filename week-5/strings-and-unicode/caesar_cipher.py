def encode(msg, n):
    encoded = ''

    for c in msg:
        if ord(c) + n > 90:
           encoded += chr(64 + ((ord(c) + n) - 90))
        
        else:
            encoded += chr(ord(c) +n)
    
    msg = encoded
    return msg


def decode(msg, n):
    decoded = ''

    for c in msg:
        if ord(c) - n < 65:
            decoded += chr(91 + ((ord(c) - n) - 65))
        
        else:
            decoded += chr(ord(c) - n)

    msg = decoded
    return  msg

print(encode("ABXYZ", 3))   # "DEABC"
print(decode("DEABC", 3))    # "ABXYZ" 