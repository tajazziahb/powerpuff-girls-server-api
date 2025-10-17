const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080

app.use(cors())

const pppGirls = {
    'blossom': {
        'image': './img/blossom.webp',
        'voiceAnimator': 'Cathy Cavadini',
        'fullName': 'Blossom Utonium',
        'personality': 'The Leader',
        'color': 'Pink',
        'ingredient' : 'Everything nice & Chemical X',
    },
    'bubbles': {
        'image': './img/bubbles.webp',
        'voiceAnimator': 'Tara Strong',
        'fullName': 'Bubbles Utonium',
        'personality': 'The Joyful',
        'color': 'Blue',
        'ingredient' : 'Sugar & Chemical X',
    },
    'buttercup': {
        'image': './img/buttercup.webp',
        'voiceAnimator': 'Elizabeth Daily',
        'fullName': 'Buttercup Utonium',
        'personality': 'The Tough One',
        'color' : 'Green',
        'ingredient' : 'Spice & Chemical X',
    },
    'unknown': {
        'voiceAnimator': 'unknown',
        'fullName': 'unknown',
        'personality': 'unknown',
         'color' : 'unknown',
        'ingredient' : 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/css/styles.css', (request, response)=>{
    response.sendFile(__dirname + '/css/styles.css')
})

app.get('/img/:imageName', (request, response)=> {
    const imageName = request.params.imageName
    response.sendFile(__dirname + '/img/' + imageName)
})

app.get('/api/:name',(request,response)=>{
    const pppGirlName = request.params.name.toLowerCase()

    if( pppGirls[pppGirlName] ){
        response.json(pppGirls[pppGirlName])
    }else{
        response.json(pppGirls['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})

