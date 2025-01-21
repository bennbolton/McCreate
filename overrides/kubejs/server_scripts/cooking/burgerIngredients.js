ServerEvents.recipes(e => {
    // ~~~~ Chicken Pipeline ~~~~~~
    e.remove({output: "createfood:shredded_chicken", not: {id: "createfood:farmersdelight/cutting/shredded_chicken_from_cutting"}})
    e.remove({id: 'createfood:farmersdelight/cutting/unbreaded_chicken_patty_from_cutting'})
    // unbreaded chicken patty
    e.remove({id: 'createfood:create/compacting/unbreaded_chicken_patty_from_compacting'})
    e.recipes.create.compacting(Item.of('createfood:unbreaded_chicken_patty'), Item.of('createfood:shredded_chicken', 2))
    // raw chicken patty
    // e.recipes.create.mixing('kubejs:raw_chicken_patty', ['createfood:unbreaded_chicken_patty', Fluid.of('kubejs:liquid_egg', 250), 'kubejs:breadcrumbs'])
    e.recipes.create.mixing('kubejs:raw_chicken_patty', ['createfood:unbreaded_chicken_patty', Fluid.of(global.liquidEgg, 250), global.breadcrumbs])
    // chicken patty
    e.remove({output: "createfood:chicken_patty"})
    e.custom({
        type: 'create_bic_bit:deep_frying',
        heatRequirement: 'heated',
        ingredients: [
            { item: 'kubejs:raw_chicken_patty'},
            {
                amount: 125,
                fluid: "create_bic_bit:frying_oil"
            }
        ],
        results: [
            {item: "createfood:chicken_patty"}
        ]
    })
    // ~~~~ Beef Pipeline ~~~~~
    e.replaceInput({id: "create:mixing/mince_meat"}, "#ratatouille:raw_meat", "minecraft:beef")
    e.remove({output: "farmersdelight:minced_beef"})
    e.recipes.create.compacting("farmersdelight:minced_beef", [Fluid.of("ratatouille:mince_meat", 250), Fluid.of("ratatouille:egg_yolk", 250), "kubejs:breadcrumbs"])
    // e.custom({
    //     type: "ratatouille:squeezing",
    //     ingredients: [
    //         {
    //             amount: 250,
    //             fluid: "ratatouille:mince_meat"
    //         },
    //         {
    //             item: "minecraft:egg"
    //         }
    //     ],
    //     results: [
    //         {
    //             item: "farmersdelight:minced_beef"
    //         }
    //     ]
    // })
})