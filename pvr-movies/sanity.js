import SanityClient from '@sanity/client'

export const client = SanityClient({
  projectId: 'snvtn8vb',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  token:
    'sk6WDAN2HGSTeYmook7rabzRbhGxnJ7ZIAnRTa35Mmh28mthEDmwzanbrzzyKppijdI3uS4L9CmXn1q4oSe7TuXcNdDnicTXNNdZHrbIth62OP5YAAycB30QGXImhv8MhMRkmTS73wv97sVLxFMCCFKtzGGDhjFuZ0WPdXHpH3ju2aXyhIbb',
})
