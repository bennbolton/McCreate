ServerEvents.recipes(e => {
    e.recipes.create.compacting("2x minecraft:coarse_dirt", ["minecraft:dirt", "minecraft:gravel"])

    //should be updated to find all other wood types:
    const weirdWoods = {"garnished": ["nut"], "ecologics": ["coconut", "walnut", "azalea"], "quark": ["ancient", "azalea", "blossom"], "architects_palette": ["twisted"]}

    for (let mod in weirdWoods) {
        for (let wood in weirdWoods[mod]) {
            e.recipes.farmersdelight.cutting(`${mod}:${weirdWoods[mod][wood]}_log`, "#minecraft:axes", [`${mod}:stripped_${weirdWoods[mod][wood]}_log`, "farmersdelight:tree_bark"])
            e.recipes.farmersdelight.cutting(`${mod}:${weirdWoods[mod][wood]}_wood`, "#minecraft:axes", [`${mod}:stripped_${weirdWoods[mod][wood]}_wood`, "farmersdelight:tree_bark"])
            if (!mod.includes("ecologics")) {
                e.recipes.create.item_application(`${mod}:stripped_${weirdWoods[mod][wood]}_log`, [`${mod}:${weirdWoods[mod][wood]}_log`, "#minecraft:axes"])
                e.recipes.create.item_application(`${mod}:stripped_${weirdWoods[mod][wood]}_wood`, [`${mod}:${weirdWoods[mod][wood]}_wood`, "#minecraft:axes"])
            }
        }
    }

    e.recipes.farmersdelight.cutting("ecologics:flowering_azalea_log", "#minecraft:axes", ["ecologics:stripped_azalea_log", "farmersdelight:tree_bark"])
    e.recipes.farmersdelight.cutting("ecologics:flowering_azalea_wood", "#minecraft:axes", ["ecologics:stripped_azalea_wood", "farmersdelight:tree_bark"])
    e.recipes.farmersdelight.cutting("garnished:sepia_stem", "#minecraft:axes", ["garnished:stripped_sepia_stem", "farmersdelight:tree_bark"])
    e.recipes.farmersdelight.cutting("garnished:sepia_hyphae", "#minecraft:axes", ["garnished:stripped_sepia_hyphae", "farmersdelight:tree_bark"])
        
    // e.recipes.create.item_application("garnsihed:stripped_nut_log", ["garnished:nut_log", "#minecraft:axes"])
    // e.recipes.farmersdelight.cutting("garnished:nut_log", "#minecraft:axes", ["garnished:stripped_nut_log", "farmersdelight:tree_bark"])

    e.recipes.create.compacting("3x minecraft:cobbled_deepslate", ["compressium:cobblestone_1", Fluid.of("minecraft:lava", 100)])
})