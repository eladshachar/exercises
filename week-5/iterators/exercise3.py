def get_prime_factors_generator(number):
    denominator = 2
    
    while denominator <= number:
        if number % denominator == 0:
            number = number/denominator
            yield denominator

            if not number % denominator == 0:
                denominator += 1

        else:
            denominator += 1

for x in get_prime_factors_generator(100):
  print(x) 
