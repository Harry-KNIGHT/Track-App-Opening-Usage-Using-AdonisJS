import AppOpening from '#models/app_opening'

export class AppOpeningService {
  public async increment() {
    let appOpening = await AppOpening.first()
    if (!appOpening) {
      appOpening = new AppOpening()
    }
    const previousCount = appOpening.count ?? 0
    appOpening.count = previousCount + 1
    await appOpening.save()

    return { previousCount, newCount: appOpening.count }
  }

  public async count() {
    const count = await AppOpening.firstOrFail()
    return count.count
  }
}
