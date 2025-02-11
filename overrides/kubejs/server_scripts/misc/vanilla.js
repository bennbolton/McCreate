ServerEvents.recipes(e => {
    e.recipes.create.compacting("2x minecraft:coarse_dirt", ["minecraft:dirt", "minecraft:gravel"])

    //should be updated to find all other wood types:
    e.recipes.create.item_application("garnsihed:stripped_nut_log", ["garnished:nut_log", "#minecraft:axes"])
    e.recipes.farmersdelight.cutting("garnished:nut_log", "#minecraft:axes", ["garnished:stripped_nut_log", "farmersdelight:tree_bark"])

    e.recipes.create.compacting("3x minecraft:cobbled_deepslate", ["compressium:cobblestone_1", Fluid.of("minecraft:lava", 100)])
})