const collectionId = [
  429493780502, 429493813270, 429493846038, 429493911574, 429493944342,
  429493977110, 429512622102, 429531037718,
]

const fetchCollection = async (controller) => {
  const collections = []
  for (const id of collectionId) {
    const request = await fetch(
      `https://mock.shop/api?query={collection(id:"gid://shopify/Collection/${id}"){id,handle,title,description,image{id,url},products(first: 20){edges{node{id,title,featuredImage{id,url}}}}}}`,
      { signal: controller.signal }
    )
    const response = await request.json()
    const collection = response.data.collection
    const products = response.data.collection.products.edges
    collection.products = products
    collections.push(collection)
  }
  return collections
}

export default fetchCollection
