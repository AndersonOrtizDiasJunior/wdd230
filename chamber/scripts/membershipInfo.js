let image = document.querySelector("#membershipImage")
let title = document.querySelector("#membershipName")
let price = document.querySelector("#membershipPrice")
let selector = document.querySelector("#type")
let description = document.querySelector("#membershipDescription")

npDesc = "Exclusive level for Non-profit organizations, grants all the basic benefits and attend specific needs with no fee."
bzDesc = "Basic level, grants access to the meetings, trainings and 4 ads/year."
svDesc = "Intermediate level. Grants all the bronze benefits, 2 more ads per year (6 in total) and acces to the guild exclusive comercial advise content."
gdDesc = "Premium level. Grants all bronze and silver benefits, 6 more ads per year (12 in total) and acces to individual customized comercial advise."

selector.addEventListener("change",updateByMembership )
function updateByMembership() {
    level = selector.value
    switch (level) {
        case "np":
            image.src = "images/np.webp"
            title.textContent = "Non-profit"
            price.textContent = "Free"
            description.textContent = npDesc
        break;
        case "b":
            image.src = "images/bronze.webp"
            title.textContent = "Bronze"
            price.textContent = "$50 year"
            description.textContent = bzDesc
        break;
        case "s":
            image.src = "images/silver.webp"
            title.textContent = "Silver"
            price.textContent = "$150 year"
            description.textContent = svDesc
        break;
        case "g":
            image.src = "images/gold.webp"
            title.textContent = "Gold"
            price.textContent = "$250 year"
            description.textContent = gdDesc
        break;
    }
}
