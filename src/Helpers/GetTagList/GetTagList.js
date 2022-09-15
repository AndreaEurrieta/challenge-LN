export const GetTagList = (items = []) => {
    const filterTags = (items.map(article => article.taxonomy.tags)).flat()

    const orderedArray = []

    const countTags = filterTags.map(article => article.slug)
        .reduce((obj, slug) => {
            if (obj[slug]) {
                obj[slug] = obj[slug] + 1;
            } else {
                obj[slug] = 1;
            }
            return obj;
        }, {})

    for (const slugObj in countTags) {
        const { text } = filterTags.find(({ slug }) => slug === slugObj)
        orderedArray.push({
            slug: slugObj,
            text: text,
            count: countTags[slugObj]
        })
    }

    orderedArray.sort((a, b) => a.count - b.count).reverse()

    const newArray = orderedArray.slice(0, 10)

    return newArray
}
