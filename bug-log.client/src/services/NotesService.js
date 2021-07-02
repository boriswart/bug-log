import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NotesService {
  async getNotes(id) { // presume id is bugId
    try {
      const res = await api.get('/api/bugs/' + id + '/notes')
      if (id) {
        AppState.notes = res.data // .find(n => n.bug === id)
      }
      logger.log('Check getNotes', res.data)
    } catch (err) {
      logger.error('Problem in NotesService getNotes', err)
    }
  }

  async createNote(data) {
    try {
      // logger.log('createNote', data)
      const res = await api.post('/api/notes', data)
      logger.log(res.data)
      AppState.Notes.push(res.data)
    } catch (err) {
      logger.error('Problem in NotesService createNote', err)
    }
  }

  async deleteNote(id, data) {
    try {
      let res = null
      res = await api.delete('api/notes/' + id, data)

      logger.log(res.data)
      // AppState.Notes = res.data
      logger.log('Delete Notes', res.data)
    } catch (err) {
      logger.error('Problem in NotesService Delete Note', err)
    }
  }

  async editNote(id, data) {
    try {
      let res = null
      res = await api.put('api/notes/' + id, data)

      logger.log(res.data)
      // AppState.Notes = res.data
      logger.log('Edit Notes', res.data)
    } catch (err) {
      logger.error('Problem in NotesService Edit Note', err)
    }
  }
}

export const notesService = new NotesService()
