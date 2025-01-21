const possibleIngredient = 
    {
    'chicken': "createfood:chicken_patty",
    'beef': "farmersdelight:beef_patty",
    'cheese': "createfood:cheese_slice",
    'onion': "createfood:diced_onion",
    'bacon': "farmersdelight:cooked_bacon",
    'lettuce': "farmersdelight:cabbage_leaf",
    'tomato': "createfood:sliced_tomato",
}

ServerEvents.recipes(e => {
    // remove and make construction recipes
    let burgers = Item.getTypeList().filter(ele => ele.includes('burger') || ele.includes('bun'))
    for (let burg of burgers) {
        // skip uneeded
        if ((['createfood:bun', 'create_central_kitchen:incomplete_hamburger'].includes(burg)) || burg.includes("eggplant")) {continue}
        // remove all crafting grid recipes
        e.remove([{output: burg, type: "crafting_shaped"}, {output: burg, type: "crafting_shapeless"}])
        // get ingredients
        let ingredients = []
        for (let ing in possibleIngredient) {
            if (burg.includes(ing)) {
                ingredients.push(ing)
            }
        }
        if (ingredients.length < 2) {continue}
        if (burg.includes('ham') || !(ingredients.some(item => ['beef', 'chicken'].includes(item)))) {ingredients.unshift('beef')}
        // make sequenced recipe
        let steps = ingredients.map(i => {return e.recipes.create.deploying('createfood:beef_bun', ['createfood:beef_bun', possibleIngredient[i]])})
        if (burg.includes('burger')) {
            steps.push(e.recipes.create.deploying('createfood:beef_bun', ['createfood:beef_bun', "createfood:bun"]))
        }
        e.recipes.create.sequenced_assembly(burg, 'createfood:bun', steps).transitionalItem("createfood:beef_bun").loops(1)
        
    }

    // modify recipes to be specific
    e.replaceInput({type: "create:deploying", mod: "createfood", input: "#forge:salad_ingredients"}, "#forge:salad_ingredients", "farmersdelight:cabbage_leaf")
    e.replaceInput({type: "create:deploying", mod: "createfood", input: "#forge:cheese"}, "#forge:cheese", "#forge:cheese_slice")
    e.replaceInput({type: "create:deploying", mod: "createfood", input: "#forge:tomato"}, "#forge:tomato", "createfood:sliced_tomato")
    e.replaceInput({type: "create:deploying", mod: "createfood", input: "#forge:onion"}, "#forge:onion", "createfood:diced_onion")
    e.replaceInput({type: "create:deploying", mod: "createfood", input: "#forge:cooked_pork"}, "#forge:cooked_pork", "farmersdelight:cooked_bacon")
    e.replaceInput({type: "create:deploying", mod: "createfood", input: "#forge:cooked_beef_or_vegan"}, "#forge:cooked_beef_or_vegan", "farmersdelight:beef_patty")
    // few fixes
    e.replaceOutput({id: "createfood:create/deploying/cheese_and_beef_bun_onion_bacon_lettuce_from_deploying"}, 'createfood:cheese_and_beef_bun_onion_bacon', 'createfood:cheese_and_beef_bun_onion_bacon_lettuce')
    e.remove({id: "create_central_kitchen:sequenced_assembly/hamburger"})

    // deluxe burger
    let transitional = 'createfood:cheese_and_chicken_bun_lettuce_tomato'
    e.recipes.create.sequenced_assembly('delightful:deluxe_cheeseburger', 'createfood:cheese_and_chicken_bun_lettuce_tomato', [
        e.recipes.create.filling(transitional, [transitional, Fluid.of("create_bic_bit:ketchup", 125)]),
        e.recipes.create.deploying(transitional, [transitional, 'createfood:cheese_and_beef_bun_onion_bacon']),
        e.recipes.create.deploying(transitional, [transitional, "farmersdelight:fried_egg"]),
        e.recipes.create.filling(transitional, [transitional, Fluid.of("create_bic_bit:mayonnaise", 125)]),
        e.recipes.create.deploying(transitional, [transitional, "createfood:bun"])
    ]).loops(1).transitionalItem(transitional)
})
