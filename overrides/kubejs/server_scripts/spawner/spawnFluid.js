ServerEvents.recipes(e => {
    e.recipes.create.mixing(Fluid.of("create_mechanical_spawner:spawn_fluid_random", 250), [Fluid.of("createfood:chorus_fruit_juice", 250), "garnished:void_dust"])
    e.recipes.create.haunting("minecraft:magma_cream", "minecraft:slime_ball")
})