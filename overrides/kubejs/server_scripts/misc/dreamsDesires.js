ServerEvents.recipes(e => {
    e.remove({output: "create_dd:hydraulic_press"})
    e.remove({output: 'create_dd:cog_crank'})
    e.remove({output: 'create_dd:item_stockpile'})
    e.remove({output: 'create_dd:fluid_reservoir'})
    e.remove({output: 'create_dd:magnet'})
    e.remove({output: 'create_dd:gilded_rose_sword'})
    e.remove({output: 'create_dd:gilded_rose_pickaxe'})
    e.remove({output: 'create_dd:gilded_rose_shovel'})
    e.remove({output: 'create_dd:gilded_rose_hoe'})
    e.remove({output: 'create_dd:gilded_rose_axe'})
    e.remove({output: 'create_dd:deforester_saw'})
    e.remove({output: 'create_dd:excavation_drill'})
    e.remove({output: 'create_dd:integrated_circuit'})
    e.remove({output: 'create_dd:integrated_mechanism'})
    e.remove({output: 'create_dd:calculation_mechanism'})
    e.remove({output: 'create_dd:infernal_mechanism'})
    e.remove({output: 'create_dd:sealed_mechanism'})
    e.remove({output: 'create_dd:abstruse_mechanism'})
    // e.remove({output: })




    e.remove({output: 'create_dd:diamond_shard'})
    e.custom({
        "type": "create_dd:seething",
        "ingredients": [
          {
            "item": "minecraft:coal_block"
          }
        ],
        "results": [
          {
            "chance": 0.01,
            "item": "create_dd:diamond_shard"
          }
        ]
      })


    e.recipes.minecraft.crafting_shaped('create_dd:blueprint_block', ['BB','BB'], {B: "create:empty_schematic"})
    e.recipes.create.item_application("create_dd:creative_casing", ["createcasing:creative_casing", "createcasing:chorium_ingot"])
    e.recipes.create.compacting(Fluid.of("create_dd:sap", 50), ['4x #minecraft:saplings']).heated()
    e.recipes.create.mechanical_crafting("create_dd:giant_gear", [
            ' BBB ',
            'BBSBB',
            'BSFSB',
            'BBSBB',
            ' BBB '
        ],
        {B: "create:brass_ingot", S: "create:shaft", F: "create:flywheel"}
    )
})