JEIEvents.hideItems(e => {
    e.hide("create_dd:hydraulic_press")
    e.hide('create_dd:cog_crank')
    e.hide('create_dd:item_stockpile')
    e.hide('create_dd:fluid_reservoir')
    e.hide('create_dd:magnet')
    e.hide('create_dd:gilded_rose_sword')
    e.hide('create_dd:gilded_rose_pickaxe')
    e.hide('create_dd:gilded_rose_shovel')
    e.hide('create_dd:gilded_rose_hoe')
    e.hide('create_dd:gilded_rose_axe')
    e.hide('create_dd:deforester_saw')
    e.hide('create_dd:excavation_drill')
    e.hide('create_dd:integrated_circuit')
    e.hide('create_dd:integrated_mechanism')
    e.hide('create_dd:calculation_mechanism')
    e.hide('create_dd:infernal_mechanism')
    e.hide('create_dd:sealed_mechanism')
    e.hide('create_dd:abstruse_mechanism')
    // e.hide()
})

JEIEvents.addItems(e => {
    let colors = [
        "white", "orange", "magenta", "yellow", "lime", "pink", "gray", "light_gray",
        "cyan", "purple", "brown", "green", "red", "black", "light"
    ];
    
    colors.forEach(color => {
        e.add(`create_dd:${color}_blueprint_block`)
    })
    e.add("create_dd:blueprint_block")

    Item.list.forEach(item => {
        if (item.id.includes('_limestone')) {
            e.add(item.id)
        }
    })
})