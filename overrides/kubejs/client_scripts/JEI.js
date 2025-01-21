//unused metals
let metals = ["aluminum", "lead", "nickel", "osmium", "silver", "tin", "invar", "electrum", "bronze", "constantan", "void_steel"]


// hide unused
JEIEvents.hideItems(event => {
    event.hide(/eggplant/)
    event.hide('delightful:cheeseburger')
    event.hide("farmersdelight:wheat_dough")
    event.hide('ratatouille:salty_dough')
    event.hide("ratatouille:salt")
    //metals
    metals.forEach(metal => {
      event.hide("createmetallurgy:molten_" + metal + "_bucket")
    })
    event.hide("createmetallurgy:graphite_rod_mold")
    event.hide("createmetallurgy:graphite_gear_mold")

  })
// show hidden
JEIEvents.addFluids(event => {
  event.add("ratatouille:egg_yolk")
  event.add("ratatouille:mince_meat")
})

JEIEvents.information(event => {
  // Cheese
  event.addItem("create_bic_bit:unripe_cheese", ['Unripe cheese can be aged by placing in the world'])
  event.addItem("create_bic_bit:young_cheese", ['Unripe cheese can be aged by placing in the world'])
  event.addItem("create_bic_bit:aged_cheese", ['Unripe cheese can be aged by placing in the world'])
  event.addItem("farmersdelight:cabbage", ["Lettuces can be commonly found as a wild plant in beach coasts"])
  event.addItem("farmersdelight:cabbage_leaf", ["Lettuces can be commonly found as a wild plant in beach coasts"])
  event.addItem("farmersdelight:wild_cabbages", ["Lettuces can be commonly found as a wild plant in beach coasts"])
  // Create garnished generators
  // event.addItem("#garnished:stone_types/zultanite", ["Zultanite blocks can be generated like cobblestone using Lava and their corresponding colour of Liquefied Mastic Resin"])
})

JEIEvents.hideFluids(event => {
  metals.forEach(metal => {
    event.hide("createmetallurgy:molten_" + metal)
  })
  
})
