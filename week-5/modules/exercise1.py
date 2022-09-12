import calendar
import datetime

#print(calendar.isleap(2020))

sum_of_leap = 0

for year in range(2020, 2080, 1):
   if calendar.isleap(year):
    sum_of_leap += 1

#print(sum_of_leap)

day = datetime.date(day = 14, month = 3, year = 2028).weekday()
print(calendar.day_name[day])
