ServerEvents.tags('item', e => {
    // burger tag
    Item.getTypeList().forEach(item => {
        if (item.includes('burger')) {
            e.add('forge:burger', item)
        }
    })
    // cheese tag
    e.remove("forge:cheeses", "create_bic_bit:unripe_cheese_wedge")
    e.remove("forge:cheeses", "create_bic_bit:young_cheese_wedge")

    //salt tag
    e.remove("forge:salt", "garnished:salt_compound")

    //nuts
    e.add("forge:peanut_butter", "delightful:nut_butter_bottle")

    // stones 
    e.removeAll("garnishedstoneautomation:acceptable_stone_ingredients")
    e.add("garnishedstoneautomation:acceptable_stone_ingredients", "tuff")
})

ServerEvents.tags('block', e => {
    // stones
    e.add("c:mechanical_extractor/heat_sources", "create:blaze_burner")
    e.add("forge:mechanical_extractor/heat_sources", "create:blaze_burner")
    e.add("forge:sources/mechanical_extractor/heat", "create:blaze_burner")
})