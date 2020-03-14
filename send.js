let amqp = require('amqplib/callback_api'); // connect to the rabbit mq server

amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
        throw error0
    }
    connection.createChannel(function (error1, channel) { // create channel
     if (error1) {
         throw error1
     }
     const queue = "hello"
    const msg = "hello world"

    channel.assertQueue(queue, {
        durable: false
    })

    channel.sendToQueue(queue, Buffer.from(msg))
    console.log("Sent,", msg)
    })
})

setTimeout(() => {
    connection.close()
    process.exit(0)
}, 5000);