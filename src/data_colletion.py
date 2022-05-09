from selenium import webdriver
from time import sleep
from PIL import Image
from io import BytesIO
import csv
import os

file = open('CoordinateList.csv')
type(file)
csvreader = csv.reader(file)

header = []
header = next(csvreader)

rows = []
for row in csvreader:
    rows.append(row)

# i = rows[0]
# print(i[0])

newsize = (299, 299)

parent_dir =  "\data"  # Enter your folder location or it will create in current working dir
# print(parent_dir)

count = 1
for i in rows:
    
    directory = i[0]
    if not os.path.exists(parent_dir):
        os.mkdir(parent_dir)
    path = os.path.join(parent_dir, directory)
    if not os.path.exists(path):
        os.mkdir(path)
    else :
        count += 1
        continue
    
    # path = "C:/geckodriver-v0.30.0-win64/geckodriver.exe"
    driver = webdriver.Firefox()
    driver.get(f"https://bhuvanlite.nrsc.gov.in/?x={i[1]}&y={i[2]}&z=25")
    sleep(3)

    # driver.get_screenshot_as_file("TajMahal1.jpeg")
    png = driver.get_screenshot_as_png()
    driver.quit()
    im = Image.open(BytesIO(png))
    width, height = im.size
    # print(f"height = {height}")
    
    left = 150
    top = 75
    right = 1200
    bottom = 800
    im1 = im.crop((left, top, right, bottom))  # defines crop points
    im1 = im1.resize(newsize)
    # saves new cropped image
    im1.save(f"{parent_dir}/{i[0]}/{i[0]}.png")         # Enter your folder location before /{i[0]}
    im1 = im1.rotate(180, Image.NEAREST, expand=1)
    im1.save(f"{parent_dir}/{i[0]}/{i[0]}Rot.png")       # Enter your folder location before /{i[0]}
    # im1.show()

    left = 260
    top = 90
    right = 1545
    bottom = 1080
    im1 = im.crop((left, top, right, bottom))  # defines crop points
    im1 = im1.resize(newsize)
    im1.save(f"{parent_dir}/{i[0]}/{i[0]}LT.png") # Enter your folder location before /{i[0]}
    # im1.show()

    left = 300
    top = 90
    right = 1545
    bottom = 700
    im1 = im.crop((left, top, right, bottom))  # defines crop points
    im1 = im1.resize(newsize)
    im1.save(f"{parent_dir}/{i[0]}/{i[0]}LB.png")  # Enter your folder location before /{i[0]}
    # im1.show()

    left = 55
    top = 170
    right = 1100
    bottom = 1080
    im1 = im.crop((left, top, right, bottom))  # defines crop points
    im1 = im1.resize(newsize)
    im1.save(f"{parent_dir}/{i[0]}/{i[0]}RT.png")       # Enter your folder location before /{i[0]}
    # im1.show()

    left = 50
    top = 100
    right = 1100
    bottom = 600
    im1 = im.crop((left, top, right, bottom))  # defines crop points
    im1 = im1.resize(newsize)
    im1.save(f"{parent_dir}/{i[0]}/{i[0]}RB.png")      # Enter your folder location before /{i[0]}
    # im1.show()
    print(f"end of {count}")
    count += 1
