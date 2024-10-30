import type { HttpContext } from '@adonisjs/core/http'
import AppOpening from '#models/app_opening'

export default class AppOpeningsController {
    public async increment({ response }: HttpContext) {
        let appOpening = await AppOpening.first()
        if (!appOpening) {
            appOpening = new AppOpening()
            appOpening.count = 1
        } else {
            appOpening.count += 1
        }
        await appOpening.save()
        return response.status(200).json({ success: true, count: appOpening.count })
    }
}