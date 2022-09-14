def is_prime(number):
    for n in range(2, int(num**0.5) +1):
        if number%n==0:
            return False
    
    return True

def are_prime_numbers(*numbers):
    for number in numbers:
        if not is_prime(number):
            return False
    
    return True