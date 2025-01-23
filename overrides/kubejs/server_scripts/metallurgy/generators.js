let stones = ["diorite", "granite", "andesite"]

ServerEvents.recipes(e => {
    //extruder
    e.replaceInput({output: "create_mechanical_extruder:mechanical_extruder"}, "#forge:glass", "minecraft:tinted_glass")

    //stones
    stones.forEach(stone => {
        e.recipes.create_mechanical_extruder.extruding("minecraft:" + stone, [Fluid.of("minecraft:lava"), Fluid.of("minecraft:water")]).withCatalyst("compressium:" + stone + "_2")
    })
    e.recipes.create_mechanical_extruder.extruding("create:crimsite", [Fluid.of("minecraft:water"), Fluid.of("createmetallurgy:molten_iron")]).withCatalyst("create:layered_crimsite")
    e.recipes.create_mechanical_extruder.extruding("create:ochrum", [Fluid.of("minecraft:water"), Fluid.of("createmetallurgy:molten_gold")]).withCatalyst("create:layered_ochrum")
    e.recipes.create_mechanical_extruder.extruding("create:veridium", [Fluid.of("minecraft:water"), Fluid.of("createmetallurgy:molten_copper")]).withCatalyst("create:layered_veridium")
    e.recipes.create_mechanical_extruder.extruding("create:asurine", [Fluid.of("minecraft:water"), Fluid.of("createmetallurgy:molten_zinc")]).withCatalyst("create:layered_asurine")
})