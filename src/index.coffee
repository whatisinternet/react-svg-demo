Index = require("./components/demo.coffee")

document.addEventListener "DOMContentLoaded", (e) ->
    React.render(
      Index()
      document.body
    )
