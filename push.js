var push = require('web-push')

let vapidkey = {
    publicKey: 'BF_ItU4pPDNoEe-Y1R3ylLqn9LMbIs1VNO4uph5QiHiSf0naN-scx3G0DmjUHumX33jEXWu9dbaw5b63IQzDj-4',
    privateKey: 'gwcggNt5PzQY3Eyrdg4tfN-8QsnfMO9P1fggPBFmHbQ'
  }

push.setVapidDetails('mailto:mrreach9@gmail.com',vapidkey.publicKey,vapidkey.privateKey)

let sub= {endpoint:"https://fcm.googleapis.com/fcm/send/dxeEzg4OYcc:APA91bFvZ1nM1RtzgwOyXXO7-viQWkilg84b57L4dreX3gd3z1YHW3pSBT6yvHuieoaDzGswzfoCa5P16RQFVug3wMCRISdsRMdRxHnkgHBxHuUHrcMxk4Wii1q6HMW2kO-WpX_uJc-N",
    expirationTime:null,
    keys:{
        p256dh:"BJe535IHgbStHEKvcm_sonLYRZIKAafs_DsC1iDtgI2h6ixq2JIoTbof2SdBLs99qcF2l1DE7wX8kgQbL1hPu7A",
        auth:"I-ImHj80J_wugYb7miGSbQ"
        }
};
push.sendNotification(sub,'test message')