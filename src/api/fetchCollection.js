const collectionId = [
  429493780502, 429493813270, 429493846038, 429493911574, 429493944342,
  429493977110, 429512622102, 429531037718,
]

function urlBuilder(id) {
  const BASE_URL = 'https://mock.shop/api?query='
  const COLLECTION = `{collection(id:"gid://shopify/Collection/${id}"){id,handle,title,description,image{url},`
  const PRODUCTS =
    'products(first: 20){edges{node{id,title,description,featuredImage{url},variants(first:1){edges{node{price{amount}}}}}}}}}'

  return BASE_URL + COLLECTION + PRODUCTS
}

function refactorArray(oldArray) {
  const newArray = oldArray.map((product) => {
    const price = product.node.variants.edges[0].node.price.amount

    product.node.image = product.node.featuredImage
    product.node.price = price

    delete product.node.variants
    delete product.node.featuredImage

    return product
  })
  return newArray
}

const fetchCollection = async (controller) => {
  const collections = []
  for (const id of collectionId) {
    const request = await fetch(urlBuilder(id), { signal: controller.signal })
    const response = await request.json()
    const collection = response.data.collection
    const products = response.data.collection.products.edges
    collection.products = refactorArray(products)
    collections.push(collection)
  }
  return collections
}

export default fetchCollection
