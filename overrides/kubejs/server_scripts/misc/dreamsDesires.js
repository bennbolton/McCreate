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
    // need replacement recipe


    e.recipes.minecraft.crafting_shaped('create_dd:blueprint_block', ['BB','BB'], {B: "create:empty_schematic"})
})