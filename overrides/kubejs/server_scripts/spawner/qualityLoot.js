ServerEvents.recipes(e => {
    function qualitySpawner (mob, output){
        let loot = [
            {
                item: output
            },
            {
                item: output,
                chance: 0.1,
                nbt: {quality_food:{quality:1}}
            },
            {
                item: output,
                chance: 0.03,
                nbt: {quality_food:{quality:2}}
            },
            {
                item: output,
                chance: 0.005,
                nbt: {quality_food:{quality:3}}
            },
        ]
        e.findRecipes({id: `create_mechanical_spawner:spawner/${mob}`})[0].json.add("customLoot", loot)
    }

    let mobLoot = {
        "pig": "minecraft:porkchop",
        "cow": "minecraft:beef",
        "chicken": "minecraft:chicken"

    }

    for (let key in mobLoot) {
        qualitySpawner(key, mobLoot[key])
    }
    e.findRecipeIds({output: "minecraft:egg"}).forEach(rec => {console.log(rec)})

    e.replaceInput({id: "create_mechanical_spawner:loot_collector"}, "minecraft:barrel", 'create:brass_casing')
})


