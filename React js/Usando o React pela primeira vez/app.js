let root = document.getElementById('root')

let title = React.createElement('h1', { id: "main-title" }, 'titulo')
let subt = React.createElement('h2', { id: "sub-title" }, 'sub-titulo')
let div = React.createElement('div', { id: "container" }, title, subt )

ReactDOM.render(div, root)