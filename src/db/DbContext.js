import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PartSchema } from '../models/Part.js';
import { PcSchema } from '../models/PC.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Parts = mongoose.model('Parts', PartSchema);
  PCs = mongoose.model('PCs', PcSchema);
}

export const dbContext = new DbContext()
