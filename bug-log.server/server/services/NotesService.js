import { dbContext } from '../db/DbContext'
// import { account, accountService } from '../services/AccountService'
class NotesService {
  async deleteNote(userId, noteId) {
    const note = await this.getNoteById(noteId)
    if (note.creatorId.toString() !== userId) {
      throw new Error('Unable to delete - not yours')
    }
    return await dbContext.Notes.findByIdAndDelete({ _id: noteId }).populate('creator')
  }

  async updateNote(noteId, noteData, userId) {
    let note = await this.getNoteById(noteId)
    if (note.creatorId.toString() !== userId) {
      throw new Error('Unable to update - not yours')
    }
    note = await dbContext.Notes.findByIdAndUpdate(noteId, noteData, { new: true, runValidators: true })
    // TODO research  populate and .execPopulate()
    await note.populate('creator').execPopulate()
    return note
    // THE LONG WAY
    // let board = await dbContext.Cars.findById(id)
    // if(!car){
    //     throw new BadRequest("Invalid car id")
    // }
    // carData.id = id
    // await car.update(carData)
    // return car

    // async removeComment(carId, commentId, userId) {
    //   const car = await dbContext.Cars.findByIdAndUpdate(carId, {
    //     $pull: {
    //       comments: {
    //         _id: commentId,
    //         creatorId: userId
    //       }
    //     }
    //   }, { new: true })
    //   await car.populate('creator', 'name picture').populate('comments.creator', 'name picture').execPopulate()
    //   return car
  }

  async createNote(NoteData) {
    const note = await dbContext.Notes.create(NoteData)
    await note.populate('creator').execPopulate()
    return note
  }

  async getAllNotes(query = {}) {
    const note = await dbContext.Notes.find(query).populate('creator')
    return note
  }

  // const notes = await dbContext.Notes.find(query).select('-comments').populate('creator', 'name picture')
  // return cars
  async getNoteById(id) {
    const note = await dbContext.Notes.findById(id).populate('creator').populate('creator')
    return note

    // const note = await dbContext.Notes.findById(id).populate('creatorId')
    // return note
  }
}

export const notesService = new NotesService()
