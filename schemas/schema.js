import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import scores from './scores'
import card from './card'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    scores, card
  ]),
})
