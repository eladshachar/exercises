country_population = {}

country_population["Ghana"] = 28
country_population["Brazil"] = 209
country_population["Mongolia"] = 3

for country in country_population.keys():
    if country_population[country] < 50:
        print(country, ' is a small country')
    else:
        print(country, ' is a big country')

