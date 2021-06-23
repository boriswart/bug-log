import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { router } from '../router'

// import { account } from '../AppState.js'

class BugsService {
  async getBugs() {
    // logger.log('Did we arrive in getBugs?')
    try {
      let res = null
      res = await api.get('/api/bugs')

      // logger.log(res.data)
      AppState.bugs = res.data
      logger.log('Check getBugsAll', AppState.bugs)
    } catch (err) {
      logger.error('Problem in BugsService get Bugs', err)
    }
  }

  async getBugDetails(id) {
    // logger.log('Did we arrive in getBugs?')
    try {
      let res = null
      res = await api.get('/api/bugs/' + id)
      logger.log('suspect res Data', res.data)
      AppState.activeBug = res.data
      logger.log('Check getBugsDetails', AppState.bugs)
    } catch (err) {
      logger.error('Problem in BugsService getBugDetails', err)
    }
  }

  async deleteBug(id) {
    try {
      await api.delete('/api/bugs/' + id)
    } catch (err) {
      logger.error('Problem in BugsService Delete Bugs', err)
    }
  }

  async createBug(data) {
    try {
      let res = null
      res = await api.post('/api/bugs/', data)

      logger.log(res.data)
      AppState.activeBug = res.data
      router.push({ name: 'bug-details', params: { id: res.data.id } })
      // logger.log('Updata Bug', res.data)
    } catch (err) {
      logger.error('Problem in BugsService Create Bugss', err)
    }
  }

  async updateBug(id, data) {
    try {
      let res = null
      res = await api.delete('/api/bugs/' + id, data)

      logger.log(res.data)
      // AppState.bugs = res.data
      logger.log('Delete Bugss', res.data)
    } catch (err) {
      logger.error('Problem in BugsService Delete Bugss', err)
    }
  }
}

export const bugsService = new BugsService()
