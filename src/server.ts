import 'dotenv/config'
import { app } from './app'

app
  .listen({
    host: '0.0.0.0',
    port: 3000,
  })
  .then(() => {
    console.log('🍃 HTTTP Server Running.')
  })
