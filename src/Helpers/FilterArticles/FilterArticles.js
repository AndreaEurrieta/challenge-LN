export const FilterArticles = (data) => {
        if (!data || !data.length) return null    
        return data.filter(article => article.subtype === "7")
}
