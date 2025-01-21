ServerEvents.recipes(e => {
    // remove dough overlap
    e.replaceInput({}, "farmersdelight:wheat_dough", "#forge:dough")
    e.remove([{output: "farmersdelight:wheat_dough"}, {id: "create_bic_bit:compat/farmersdelight/oliebollen_recipe2"}])
    e.remove({output: "ratatouille:salty_dough"})
    e.remove({output: "farmersdelight:raw_pasta"})
    e.custom({
        type: "ratatouille:squeezing",
        ingredients: [
            {
                item: 'createfood:salt_dough'
            }
        ],
        results: [
            {
                item: "farmersdelight:raw_pasta"
            }
        ]
    })
    // salt
    e.remove([ {output: "ratatouille:salt"}])
    e.replaceInput({}, "ratatouille:salt", "createfood:salt")
    e.replaceInput({not: {id: "garnished:salt_compound_block"}}, "garnished:salt_compound", "createfood:salt")
    e.remove({output: "createfood:salt", not: {type: "create:crushing"}})
    e.recipes.create.crushing("createfood:salt", "garnished:salt_compound")
    e.recipes.create.crushing("4x createfood:salt", "garnished:salt_compound_block")

})