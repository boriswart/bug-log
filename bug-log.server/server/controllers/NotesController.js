import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('/api/notes')
    this.router
      .get('', this.getAllNotes) // this shouldn't be here
      .get('/:id', this.getNoteById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .put('/:id', this.updateNote)
      .delete('/:id', this.deleteNote)
  }

  async getNoteById(req, res, next) {
    try {
      const note = await notesService.getNoteById(req.params.id)
      res.send(note)
    } catch (e) {
      next(e)
    }
  }

  async deleteNote(req, res, next) {
    try {
      const deletedNote = await notesService.deleteNote(req.userInfo.id, req.params.id)
      res.send(deletedNote)
    } catch (error) {
      next(error)
    }
  }

  async updateNote(req, res, next) {
    try {
      const id = req.params.id
      if (req.userInfo.id === id) {
        const note = await notesService.updateNote(id, req.body)
        return res.send(note)
      }
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.createNote(req.body)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async getAllNotes(req, res, next) {
    try {
      const notes = await notesService.getAllNotes(req.query)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }
}
