import mongoose from 'mongoose'
import { NoteSchema } from '../../models/Note'
import { BugSchema } from '../../models/Bug'
import { AccountSchema } from '../../models/Account'

class DbContext {
  Bugs = mongoose.model('bug', BugSchema);

  Notes = mongoose.model('note', NoteSchema);

  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
