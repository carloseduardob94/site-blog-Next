import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string", required: true }
  }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    author: { type: 'nested', of: Author, required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace('.md', '')
    }
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })