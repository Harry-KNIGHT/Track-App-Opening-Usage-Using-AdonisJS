/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AppOpeningsController = () => import('#controllers/app_openings_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/app-opened', [AppOpeningsController, `increment`])
router.get('/count', [AppOpeningsController, 'count'])
