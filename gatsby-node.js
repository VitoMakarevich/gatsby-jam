// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  createPage({
    path: '/posts/add',
    component: path.resolve('./src/pages/posts/add/index.tsx'),
    context: {},
  })
}
