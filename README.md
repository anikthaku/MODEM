## **MO**nument **D**etection from sat**E**llite i**M**age (MODEM)
<br>

## __MOTIVATION__
---
In the old days, finding monuments was considered a monumental task for archaeologists. The story of the accidental discovery of the famous Khajuraho temple inspired me to look for evidence of monuments scattered around the world through satellite images. Given the recent advancement of CNNs and the easy availability of satellite images, I could concoct a solution to discover satellite images automatically.

## __PROBLEM STATEMENT__
---
The goal is to label a given satellite image as a monument with sufficient evidence backing the claim. The solution involves using CNNs and transfer-learning to learn the abstract monument representations and then using CAM (Class Activation Map) techniques to provide empirical justification for the classification.

## __SOLUTION DETAILS__
---
The solution has three main modules:
1. **Data Collection Module:** I started with a small sample of hand-collected coordinates comprising 39 monuments and 25 random landmarks in India. Then I created a tool to collect satellite images using "[Bhuvanlite](https://bhuvanlite.nrsc.gov.in/)". However, this task was challenging without well-defined REST APIs, which I overcame by using the Mozilla plugin's automated screenshots of browser images. The images were trimmed, rotated, and shifted to create more samples. Thus I was able to generate 384 satellite images. 

2. **Model Selection and Tuning Parameters:** I used two different approaches to create models: <br>
+ Bare-bones CNN: Used a few Conv layers with max-pooling and some dense layers with relu activation in the penultimate layer and finally a dense sigmoid layer to achieve 0.9826 and 0.9487 as training and test accuracy, respectively.
+ Transfer learning: Used "[MobileNetV2](https://tfhub.dev/google/tf2-preview/mobilenet_v2/feature_vector/4)" and a few dense layers with relu activation to achieve 1.0 training and testing accuracy.

3. **Work In progress:** I plan to use CAM (Class Activation Map) techniques to explain the model decisions to ease the search for unknown monuments with reasonable confidence and hints.

## __RESULTS__
---
+ ### _*ONLY CNN*_ <br>
    #### Accuracy = 0.9487
    <br>

    | ![](docs/img/CNN_Correct.png) |
    |:---:|
    | <b>Some Correct Predictions</b>|
    | ![](docs/img/CNN_Wrong.png) |
    | <b>Wrong Predictions</b>|

<br>

+ ### _*TRANSFER LEARNING*_ <br>
    #### Accuracy = 1.0
    <br>

    | ![](docs/img/Transfer_Correct.png) |
    |:---:|
    | <b>Some Correct Predictions</b>|
    | ![](docs/img/Transfer_Wrong.png) |
    | <b>Wrong Predictions</b>|

## __CONCLUSION__
---
Through my experiments, I can safely conclude that detecting monuments from satellite images can be achieved even with smaller samples with the help of transfer learning. Even though the satellite images of monuments are not present in a well-organized manner in any data repository, however, thanks to some government initiatives like "[Bhuvanlite](https://bhuvanlite.nrsc.gov.in/)", we can leverage their infrastructure to collect data. After these experiments, I feel that the next logical step is to decode the underlying patterns in monuments using explainable AI (like Class Activation Map techniques) to help archeologists search in the right direction.

Monument detection has many positive societal impacts. It can bolster local tourism opportunities and help local people identify their rich cultural heritage.

## __PRE REQUISITE__
---
You will need to install some python libraries and [geckodriver](https://github.com/mozilla/geckodriver/releases)
<br>
Run the following on windows powershell
+ `pip install selenium`
+ `pip install Pillow`

## __HOW TO USE__
---

1. Make changes to image locations if needed and run `python data_collection.py` to store the images for training the model.
2. Choose either `Monument_CNN_TransferLearn.ipynb` or `Monument_CNN.ipynb` and run.

## __LICENSE__
---
+ This repository has no open-source license.
+ You can't modify or redistribute the code without explicit permission. However, you are allowed to run the code for private/educational use only.
+ According to terms and conditions of GitHub, in absence of any open source license, every user has the right to view and fork any public repository only.