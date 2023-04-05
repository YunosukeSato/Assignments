import { useState } from 'react'
import './App.css'

const fetchSearchTopStories = (searchTerm, page = 0) => {
  fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(err => err)
}

function App() {
  
  const [result, setResult] = useState(null)
  const [searchTerm, setSearchTerm] = useState('React')

  const setSearchTopStories = result => {
    const { hits, page } = result

    const oldHits = page !== 0 ? state.result.hits : []

    const updatedHits = [...oldHits, ...hits]

    this.setState({
        result: { hits: updatedHits, page }
    })
}

  return (
    <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                        onSubmit={this.onSearchSubmit}
                    >
                        Search
                    </Search>
                </div>
                <div className="articles">
                    {result && (
                        <Table
                            list={result.hits}
                            onDismiss={this.onDismiss}
                        />
                    )}
                </div>
                <footer>
                    <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </footer>
            </div>
  )
}

export default App
