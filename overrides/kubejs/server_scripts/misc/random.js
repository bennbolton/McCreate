ServerEvents.recipes(e => {
    e.recipes.create.compacting("18x createdeco:industrial_iron_ingot", "minecraft:iron_ingot").heated()
    e.remove({id: 'create:industrial_iron_block_from_iron_ingots_stonecutting'})
    e.recipes.create.compacting("18x create:industrial_iron_block", "minecraft:iron_block").heated()
})