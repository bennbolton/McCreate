StartupEvents.registry('fluid', e => {
    e.create('peanut_butter')
        .flowingTexture("createfood:fluid/cacao_butter_flow")
        .stillTexture("createfood:fluid/cacao_butter_still")
        .noBlock()
        .noBucket()
        .displayName("Peanut Butter")
})

StartupEvents.registry('item', e => {
    // raw chicken patty
    e.create('raw_chicken_patty')
        .texture('createfood:item/unbreaded_chicken_patty')
        .color(0, 0xedd08a)
        .food(food => {
            food
                .hunger(2)
                .saturation(0.24)
                .meat()
                .effect('hunger', 600, 0, 0.3)
        })
        .displayName('Raw Chicken Patty')

    // breadcrumbs
    e.create('breadcrumbs')
        .texture('createfood:item/cookie_crumbs')
        .color(0, 0xEFD2A8)
        .displayName('Breadcrumbs')
    
    // transitional burger
    // e.create('incomplete_burger', 'create:sequenced_assembly')
    //     .texture('createfood:cheese_and_chicken_bun_lettuce_tomato')
        
})