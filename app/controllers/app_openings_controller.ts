import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { AppOpeningService } from '#services/app_opening_service'

@inject()
export default class AppOpeningsController {
  constructor(private appOpeningService: AppOpeningService) {}

  /**
   * Increments the number of visits to the app
   */
  public async increment({ response }: HttpContext) {
    const appOpened = await this.appOpeningService.increment()
    return response.ok({ code: response.getStatus(), appOpened })
  }

  /**
   * @Returns the number of visits to the app
   */
  public async count({ response }: HttpContext) {
    const count = await this.appOpeningService.count()
    return response.status(200).send({ count })
  }
}
