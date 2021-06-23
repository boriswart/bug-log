/* eslint-disable no-console */
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugServices'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'

export class BugController extends BaseController {
  constructor() {
    super('/api/bugs')
    this.router
      .get('', this.getAllBugs)
      .get('/:id', this.getBugById)
      .get('/:id/notes', this.getBugNotes)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBug)
      .put('/:id', this.updateBug)
      .delete('/:id', this.deleteBug)
  }

  async getBugById(req, res, next) {
    try {
      const bug = await bugsService.getBugById(req.params.id)
      res.send(bug)
    } catch (e) {
      next(e)
    }
  }

  async deleteBug(req, res, next) {
    try {
      const deletedBug = await bugsService.closeBug(req.userInfo.id, req.params.id)
      res.send(deletedBug)
    } catch (error) {
      next(error)
    }
  }

  async updateBug(req, res, next) {
    try {
      const bugId = req.params.id
      const bug = await bugsService.updateBug(bugId, req.body, req.userInfo.id)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.account.id
      const bug = await bugsService.createBug(req.body)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getAllBugs(req, res, next) {
    try {
      const bugs = await bugsService.getAllBugs(req.query)
      return res.send(bugs)
    } catch (error) {
      next(error)
    }
  }

  async getBugNotes(req, res, next) {
    try {
      const bug = req.params.id
      const notes = await notesService.getAllNotes({ bug })
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }
}
