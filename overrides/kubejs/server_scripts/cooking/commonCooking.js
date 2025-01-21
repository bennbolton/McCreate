ServerEvents.recipes(e => {
    // custom breadcrumbs
    e.recipes.farmersdelight.cutting("createfood:toast_slice", '#farmersdelight:tools/knives', "kubejs:breadcrumbs")
    // custom liquid egg
    // e.recipes.create.mixing(Fluid.of("kubejs:liquid_egg", 125), "#forge:eggs/bird")
    // e.recipes.create.mixing(Fluid.of("kubejs:liquid_egg", 250), [Fluid.of("minecraft:water", 250), "#forge:egg_powder"])
    // frying oil
    e.remove({id: "create_bic_bit:mixing/frying_oil_recipe"})
    e.recipes.create.compacting(Fluid.of("create_bic_bit:frying_oil", 25), 'create_bic_bit:crushed_sunflower_seeds').heated()
    // vegetable oil replacements
    e.remove({id: /(?=.*mixing)(?=.*createfood)(?=.*oil)/})
    e.remove({type: "create:mixing", input: "createfood:vegetable_oil"})
    global.deepFryingRecipe(e, "createfood:sliced_potato", "createfood:potato_chips")
    let ings = e.findRecipes({id: "createfood:create/compacting/vegetable_oil_fluid_from_compacting_heated"})[0].getOriginalRecipeIngredients()
    e.remove({id: "createfood:create/compacting/vegetable_oil_fluid_from_compacting_heated"})
    e.recipes.create.compacting(Fluid.of("createfood:vegetable_oil", 250), ings)

    e.remove({id: "createfood:create/mixing/vinegar_bucket_from_mixing_water"})
    e.remove({id: "sliceanddice:cooking/createfood/farmersdelight/cooking/vinegar_bucket_from_cooking"})
    e.replaceInput({id: "createfood:create/mixing/vinegar_from_mixing_water"}, "#forge:fruits", Item.of("#forge:apple", 3))
    
    
    // tomato sauce)
    e.remove({id: "create_central_kitchen:mixing/tomato_sauce"})
    e.recipes.create.compacting(Fluid.of("create_central_kitchen:tomato_sauce", 125), "2x #forge:tomato")
    // ketchup
    e.remove([{id: "create_bic_bit:mixing/ketchup_recipe"}, {id: "create_bic_bit:compat/farmersdelight/ketchup_tomato_recipe"}])
    e.recipes.create.mixing(Fluid.of("create_bic_bit:ketchup", 250), [Fluid.of("create_central_kitchen:tomato_sauce", 200), Item.of("sugar", 2), Fluid.of("createfood:vinegar", 50), "createfood:salt", "create_bic_bit:crushed_nether_wart"]).heated()
    // mayonaise
    e.remove({id: "create_bic_bit:mixing/mayonnaise_recipe"})
    e.recipes.create.mixing(Fluid.of("create_bic_bit:mayonnaise", 250), [Fluid.of("ratatouille:egg_yolk", 100), "#forge:salt", Fluid.of("createfood:vegetable_oil", 100), Fluid.of("createfood:vinegar", 50)]).heated()
    // cheese
    e.remove({output: "createfood:cheese_block"})
    e.recipes.create.compacting("createfood:cheese_block", [Fluid.of("create_bic_bit:curdled_milk", 500), "createfood:salt"])

    // peanut butter
    e.recipes.create.emptying([Fluid.of("kubejs:peanut_butter", 250), "minecraft:glass_bottle"], "delightful:nut_butter_bottle")
    
    e.remove({output: "delightful:nut_butter_bottle"})
    e.recipes.create.filling("delightful:nut_butter_bottle", [Fluid.of("kubejs:peanut_butter", 250), "minecraft:glass_bottle"])
    e.recipes.create.mixing(Fluid.of("kubejs:peanut_butter", 250), ["minecraft:sugar", "createfood:salt", "3x #forge:nuts"])

    let bottleRec = e.findRecipes({input: "delightful:nut_butter_bottle", type: "create:deploying"})
    bottleRec.forEach(rec => {
        let ing = rec.getOriginalRecipeIngredients()[0].getItemIds()[0]
        e.recipes.create.filling(rec.getOriginalRecipeResult(), [Fluid.of("kubejs:peanut_butter", 250), ing])
    })
    e.remove({input: "delightful:nut_butter_bottle", type: "create:deploying"})
    e.remove({id: "createfood:create/filling/peanut_butter_melon_jam_sandwich_from_filling_melon_jam"})

    // ~~~~ recipe type alterations ~~~~
    // force skillet use 
    e.remove([{id: "farmersdelight:fried_egg_from_smoking"}, {id: "farmersdelight:fried_egg"}])
    e.remove([{id: "farmersdelight:cooked_bacon_from_smoking"}, {id: "farmersdelight:cooked_bacon"}])
    e.remove([{id: "farmersdelight:beef_patty_from_smoking"}, {id: "farmersdelight:beef_patty"}])

    //force oven
    e.remove([{mod: "create_bic_bit", type: "smelting", not: {output: "create_bic_bit:cooked_herring"}}])
    e.remove([{mod: "create_bic_bit", type: "campfire_cooking", not: {output: "create_bic_bit:cooked_herring"}}])
    e.remove([{id: "farmersdelight:pie_crust"}, {id: "createfood:minecraft/campfire/pie_crust_from_campfire"}, {id: "createfood:minecraft/smelting/pie_crust_from_smelting"}, {id: "farmersdelight:integration/create/mixing/pie_crust_from_mixing"}])   
    e.remove([{mod: "createfood", type: "smelting"}, {mod: "createfood", type: "campfire_cooking"}])


    //force create
    e.remove({id: "createfood:minecraft/crafting/raw_pie_crust"})

    // change salty dough to only use water and rebalance
    e.remove([{id: "createfood:create/mixing/salt_dough_from_mixing"}, {id: "createfood:minecraft/crafting/salt_dough_from_egg_crafting"}, {id: "createfood:create/mixing/salt_dough_from_mixing_water"}])
    e.recipes.create.mixing(Item.of("createfood:salt_dough", 6), [Item.of("create:wheat_flour", 6), Item.of("createfood:salt"), Fluid.of("minecraft:water", 1000)])
    // 
    e.remove({id: "farmersdelight:integration/create/mixing/cabbage_slice_from_mixing"})
    
})

global.deepFryingRecipe = (e, input, output) => {
    e.custom({
        type: 'create_bic_bit:deep_frying',
        heatRequirement: "heated",
        ingredients: [
            { item: input},
            {
                amount: 125,
                fluid: "create_bic_bit:frying_oil"
            }
        ],
        results: [
            {item: output}
        ]
    })
}