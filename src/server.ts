import 'reflect-metadata'
import app from './app'

app.listen({ port: 4000 }, () => {
    console.log('Server listenting on port 4000')
})