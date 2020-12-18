var push = require('web-push')

let vapidkey = {
    publicKey: 'BF_ItU4pPDNoEe-Y1R3ylLqn9LMbIs1VNO4uph5QiHiSf0naN-scx3G0DmjUHumX33jEXWu9dbaw5b63IQzDj-4',
    privateKey: 'gwcggNt5PzQY3Eyrdg4tfN-8QsnfMO9P1fggPBFmHbQ'
  }

push.setVapidDetails('mailto:mrreach9@gmail.com',vapidkey.publicKey,vapidkey.privateKey)

let sub= 
push.sendNotification(sub,'test message')