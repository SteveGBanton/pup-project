import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import getPrivateFile from '../../../modules/server/get-private-file';
import parseMarkdown from '../../../modules/parse-markdown';

export const utilityGetPage2 = new ValidatedMethod({
  name: 'utility.getPage',
  validate: new SimpleSchema({
    page: { type: String }
  }).validator(),
  run({page}) {
    return parseMarkdown(getPrivateFile(`pages/${page}.md`));
  }
})
