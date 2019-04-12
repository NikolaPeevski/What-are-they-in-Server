import pyrebase

from firebase import firebase
config = {
    "apiKey": "AIzaSyAC2EZZpJA5CQU1pK3l-Q8yy3D7Gw0H81w",
    "authDomain": "whataretheyin.firebaseapp.com",
    "databaseURL": "https://whataretheyin.firebaseio.com",
    "projectId": "whataretheyin",
    "storageBucket": "whataretheyin.appspot.com",
    "messagingSenderId": "695718494982"
  } 

firebase = firebase.FirebaseApplication('https://whataretheyin.firebaseio.com/',None)
result=firebase.put('/result_actor','ID2', '8832100')

