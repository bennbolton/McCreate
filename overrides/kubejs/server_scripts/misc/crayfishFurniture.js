ServerEvents.recipes(e => {
    let woodTypes = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry", "crimson", "warped"]
    let colors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"]
    let stones = ["stone", "granite", "diorite", "andesite", "deepslate"]
    woodTypes.forEach(wood => {
        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_chair`, [
            'S  ',
            'SSS',
            'S S'
        ], {S: `minecraft:${wood}_slab`})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_table`, [
            'SSS',
            'S S',
            'S S'
        ], {S: `minecraft:${wood}_slab`})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_desk`, [
            'SSS',
            'P P',
            'P P'
        ], {S: `minecraft:${wood}_slab`, P: `minecraft:${wood}_planks`})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_drawer`, [
            'SSS',
            'SBS'
        ], {S: `minecraft:${wood}_slab`, B: 'minecraft:barrel'})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_light_ceiling_fan`, [
            ' S ',
            'SPS',
            ' S '
        ], {S: `minecraft:${wood}_slab`, P: "create:propeller"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_storage_cabinet`, [
            'SS',
            'BS',
            'SS'
        ], {S: `minecraft:${wood}_slab`, B: "minecraft:barrel"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${wood}_kitchen_cabinetry`, [
            'SSS',
            'QQQ'
        ], {S: `minecraft:${wood}_slab`, Q: "minecraft:quartz_block"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${wood}_kitchen_drawer`, [
            'SSS',
            'QBQ'
        ], {S: `minecraft:${wood}_slab`, Q: "minecraft:quartz_block", B: "minecraft:barrel"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${wood}_kitchen_sink`, [
            ' F ',
            'SSS',
            'QQQ'
        ], {S: `minecraft:${wood}_slab`, Q: "minecraft:quartz_block", F: "supplementaries:faucet"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_kitchen_storage_cabinet`, [
            'QS',
            'BS',
            'QS'
        ], {S: `minecraft:${wood}_slab`, B: "minecraft:barrel", Q: "minecraft:quartz_block"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_storage_jar`, [
            'S',
            'G'
        ], {S: `minecraft:${wood}_slab`, G: "#forge:glass"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${wood}_crate`, [
            'PPP',
            'PBP',
            'PPP'
        ], {P: `minecraft:${wood}_slab`, B: "minecraft:barrel"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${wood}_mail_box`, [
            'PPP',
            'PPP',
            ' F '
        ], {P: `minecraft:${wood}_planks`, F: `minecraft:${wood}_fence`})

        let exclude = "crimson, warped"
        if (!exclude.includes(wood)) {
            e.recipes.minecraft.crafting_shaped(`8x refurbished_furniture:${wood}_hedge`, [
                'PPP',
                'PPP',
            ], {P: `minecraft:${wood}_leaves`})
        }

        e.recipes.minecraft.crafting_shaped(`4x refurbished_furniture:${wood}_lattice_fence`, [
            'PLP',
            'PLP',
        ], {P: `minecraft:${wood}_planks`, L: "decorative_blocks:lattice"})

        e.recipes.minecraft.crafting_shaped(`4x refurbished_furniture:${wood}_lattice_fence_gate`, [
            'PLP',
            'PLP',
        ], {L: `minecraft:${wood}_planks`, P: "decorative_blocks:lattice"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_toilet`, [
            'Q  ',
            'QSS',
            ' Q '
        ], {Q: "minecraft:quartz_block", S: `minecraft:${wood}_slab`})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_basin`, [
            ' F ',
            ' S ',
            ' Q '
        ], {S: `minecraft:${wood}_slab`, Q: "minecraft:quartz_block", F: "supplementaries:faucet"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${wood}_bath`, [
            'Q Q',
            'QQQ',
            'SSS'
        ], {S: `minecraft:${wood}_slab`, Q: "minecraft:quartz_slab"})

        

        e.recipes.create.item_application(`refurbished_furniture:${wood}_cutting_board`, [`minecraft:${wood}_slab`, "#minecraft:axes"])

    })

    colors.forEach(color => {
        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_sofa`, [
            'W  ',
            'WWW',
            'S S'
        ], {W: `minecraft:${color}_wool`, S: '#minecraft:wooden_slabs'})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_stool`, [
            'WW',
            'BB',
        ], {W: `minecraft:${color}_wool`, B: '#minecraft:wooden_buttons'})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${color}_lamp`, [
            'WWW',
            'RGR',
            ' P '
        ], {W: `minecraft:${color}_wool`, P: '#minecraft:planks', R: "minecraft:redstone", G: "minecraft:glowstone_dust"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${color}_kitchen_cabinetry`, [
            'CCC',
            'QQQ'
        ], {C: `minecraft:${color}_concrete`, Q: "minecraft:quartz_block"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${color}_kitchen_drawer`, [
            'CCC',
            'QBQ'
        ], {C: `minecraft:${color}_concrete`, Q: "minecraft:quartz_block", B: "minecraft:barrel"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${color}_kitchen_sink`, [
            ' F ',
            'CCC',
            'QQQ'
        ], {C: `minecraft:${color}_concrete`, Q: "minecraft:quartz_block", F: "supplementaries:faucet"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_kitchen_storage_cabinet`, [
            'QC',
            'BC',
            'QC'
        ], {C: `minecraft:${color}_concrete`, B: "minecraft:barrel", Q: "minecraft:quartz_block"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_grill`, [
            'GGG',
            'IRI'
        ], {G: `chipped:grill_${color}_concrete`, I: "minecraft:iron_ingot", R: "minecraft:redstone"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${color}_cooler`, [
            'III',
            'CPC'
        ], {C: `minecraft:${color}_concrete`, I: "minecraft:iron_ingot", P: "minecraft:packed_ice"})

        e.recipes.minecraft.crafting_shaped(`2x refurbished_furniture:${color}_trampoline`, [
            'IWI',
            'ISI'
        ], {W: `minecraft:${color}_wool`, I: "minecraft:iron_ingot", S: "minecraft:slime_ball"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_toilet`, [
            'Q  ',
            'QSS',
            ' Q '
        ], {Q: "minecraft:quartz_block", S: `minecraft:${color}_concrete`})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_basin`, [
            ' F ',
            ' S ',
            ' Q '
        ], {S: `minecraft:${color}_concrete`, Q: "minecraft:quartz_block", F: "supplementaries:faucet"})

        e.recipes.minecraft.crafting_shaped(`refurbished_furniture:${color}_bath`, [
            'Q Q',
            'QQQ',
            'SSS'
        ], {S: `minecraft:${color}_concrete`, Q: "minecraft:quartz_slab"})
    })

    // misc
    e.recipes.minecraft.crafting_shaped("8x refurbished_furniture:plate", [
        'Q Q',
        'QQQ'
    ], {Q: "minecraft:quartz_slab"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_fridge", [
        'BID',
        'BPD',
        'BID'
    ], {B: "minecraft:iron_block", D: "minecraft:iron_trapdoor", I: "minecraft:iron_ingot", P: "minecraft:packed_ice"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_toaster", [
        'III',
        'IRI'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_microwave", [
        'III',
        'IRG'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone", G: "#forge:glass"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_stove", [
        'III',
        'IGI',
        'IRI'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone", G: "#forge:glass"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_range_hood", [
        'II',
        'RR'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:frying_pan", [
        ' II',
        ' II',
        'S  '
    ], {I: "minecraft:iron_ingot", S: "minecraft:stick"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:recycle_bin", [
        'III',
        'I I',
        'IRI'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:television", [
        'III',
        'RAP',
        'III'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone", A: "minecraft:amethyst_shard", P: "#forge:glass_panes"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:computer", [
        'III',
        'RAP',
        'III'
    ], {I: "minecraft:iron_ingot", R: "minecraft:redstone", A: "minecraft:amethyst_shard", P: "refurbished_furniture:television"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:post_box", [
        ' D ',
        ' B ',
        'III'
    ], {I: "minecraft:iron_ingot", B: "minecraft:iron_bars", D: "minecraft:blue_concrete"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_ceiling_light", [
        'R',
        'G',
        'I'
    ], {I: "minecraft:iron_ingot", G: "minecraft:glowstone_dust", R: "minecraft:redstone"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:light_lightswitch", [
        'L',
        'I'
    ], {I: "minecraft:iron_ingot", L: "minecraft:lever"})

    e.recipes.minecraft.crafting_shaped("refurbished_furniture:doorbell", [
        'I',
        'N'
    ], {I: "minecraft:iron_ingot", N: "minecraft:note_block"})

    e.recipes.create.item_application('refurbished_furniture:door_mat', ["minecraft:hay_block", "minecraft:shears"])

    stones.forEach(stone => {
        e.recipes.minecraft.stonecutting(`refurbished_furniture:${stone}_stepping_stones`, `minecraft:${stone}`)
    })

    e.recipes.minecraft.crafting_shaped(`8x refurbished_furniture:azalea_hedge`, [
        'PPP',
        'PPP',
    ], {P: `minecraft:azalea_leaves`})

})

