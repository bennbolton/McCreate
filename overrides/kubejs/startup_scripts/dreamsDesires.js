BlockEvents.modification(e => {
    e.modify("create_dd:hazard_block", block => {
        block.setSpeedFactor(1)
        block.setJumpFactor(1)
    })
})