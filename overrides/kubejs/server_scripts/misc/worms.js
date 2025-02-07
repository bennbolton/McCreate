ServerEvents.recipes(e => {
    e.custom({
        "type": "ratatouille:threshing",
        "ingredients": [
          {
            "item": "minecraft:dirt"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": 'fishofthieves:earthworms',
            "count": 1,
            "chance": 0.05
          }
        ]
      })
    e.custom({
        "type": "ratatouille:threshing",
        "ingredients": [
          {
            "item": "minecraft:sand"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": 'fishofthieves:grubs',
            "count": 1,
            "chance": 0.05
          }
        ]
      })
    e.custom({
        "type": "ratatouille:threshing",
        "ingredients": [
          {
            "item": "chipped:wet_sand"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "item": 'fishofthieves:leeches',
            "count": 1,
            "chance": 0.05
          }
        ]
      })
})