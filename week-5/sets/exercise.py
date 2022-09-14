import json

with open('nyc_jobs.json') as j:
    jobs = json.load(j)

def find_jobs_by_word(word):
    return [job for job in jobs if word in job.get('job_description')]

def junior_jobs_in_brooklin():
    junior_jobs = list(filter(lambda j: j['career_level'] == 'Entry-Level', jobs))
    junior_jobs_agency = set(map(lambda j: j['agency'], junior_jobs))

    broadway_jobs = list(filter(lambda j: 'Broadway' in j['work_location'], jobs))
    broadway_jobs_agency = set(map(lambda j: j['agency'], broadway_jobs))

    res = broadway_jobs_agency.intersection(junior_jobs_agency)
    return res

def max_hourly_salary():
    junior_jobs = set(map( lambda j: j['salary_range_to'], filter(lambda j: j['career_level'] == 'Entry-Level', jobs)))
    hourly_jobs = set(map( lambda j: j['salary_range_to'], filter(lambda j: j['salary_frequency'] == 'Hourly', jobs)))

    hourly_but_not_beginner = hourly_jobs.difference(junior_jobs)

    print(max(hourly_but_not_beginner))

max_hourly_salary()

