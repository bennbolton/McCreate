let metals = ["aluminum", "lead", "nickel", "osmium", "silver", "tin", "invar", "electrum", "bronze", "constantan", "void_steel"]

ServerEvents.recipes(e => {
    e.remove("minecraft:netherite_ingot")
    e.remove("create:mixing/brass_ingot")
    metals.forEach(metal => {
        let ou = "createmetallurgy:alloying/" + metal
        e.remove(ou)
    })
    // coke
    e.remove({output: "createmetallurgy:coke", not: {type: "minecraft:crafting_shapeless"}})
    e.recipes.create.compacting("createmetallurgy:coke", "#minecraft:coals").heated()

    // copper metling fix
    // e.recipes.createmetallurgy.melting(Fluid.of("createmetallurgy:molten_copper", 90))
})