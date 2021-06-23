import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
// import { account, accountService } from '../services/AccountService'

class BugsService {
  async closeBug(userId, bugId) {
    const bug = await this.getBugById(bugId)
    if (bug.creatorId.toString() !== userId) {
      throw new Error('Unable to delete - not yours')
    }
    return await dbContext.Bugs.findByIdAndUpdate(bugId, { closed: true })
  }

  async updateBug(bugId, bugData, userId) {
    const bug = await dbContext.Bugs.findById(bugId)
    if (bug.creatorId.toString() !== userId) {
      throw new Forbidden('that is not your bug')
    }
    if (bug.closed) {
      throw new BadRequest('sorry that bug is closed')
    }
    // this prevents updates from being able to change the creator
    delete bugData.creatorId
    // this prevents updates from being able to close the bug
    delete bugData.closed

    await dbContext.Bugs.findByIdAndUpdate(bugId, bugData, { new: true, runValidators: true })
    // TODO research  populate and .execPopulate()
    await bug.populate('creator').execPopulate()
    return bug
  }

  async createBug(bugData) {
    // Business Logic should you be able to do what you are doing
    const bug = await dbContext.Bugs.create(bugData)
    await bug.populate('creator').execPopulate()
    return bug
  }

  async getAllBugs(query = {}) {
    const bug = await dbContext.Bugs.find(query).populate('creator')
    return bug
  }

  async getBugById(id) {
    const bug = await dbContext.Bugs.findById(id).populate('creator')
    return bug

    // const bug = await dbContext.Bugs.findById(id).populate('creatorId')
    // return bug
  }
}

export const bugsService = new BugsService()
