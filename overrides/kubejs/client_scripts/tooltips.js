// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// }

ItemEvents.tooltip(e => {
    Item.getList().forEach(it => {
        if (it.getMod().includes("compressium")) {
            let num = it.getDescriptionId().split("_")[1]
            e.add(it, `${9**num} blocks`)
        }
    })
})