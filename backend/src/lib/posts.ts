import _ from "lodash";

export const posts = _.times(100, (i) => ({
  id: i,
  name: `Post ${i}`,
  description: `Post ${i} description...`,
  text: _.times(100, (j) => `<p>Text paragraph ${j} of idea ${i}...</p>`).join(''),
}))