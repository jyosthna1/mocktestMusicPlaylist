import './App.css'
import {Component} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

// Replace your code here
const RenderSongDetail = props => {
  const {details, onDeleteSongItem} = props
  const {id, imageUrl, name, genre, duration} = details

  const onClickDeleteItem = () => {
    onDeleteSongItem(id)
  }

  return (
    <li className="song-list-item">
      <div className="song-image-name-genera">
        <img src={imageUrl} className="song-image" alt="track" />
        <div>
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="time-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onClickDeleteItem}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

class App extends Component {
  state = {songsList: initialTracksList, searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
    const {songsList, searchInput} = this.state
    const searchList = songsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({songsList: searchList})
  }

  onDeleteSongItem = id => {
    const {songsList} = this.state
    const filteredList = songsList.filter(eachItem => eachItem.id !== id)
    this.setState({songsList: filteredList})
  }

  render() {
    const {songsList, searchInput} = this.state
    const listLength = songsList.length === 0
    return (
      <div className="music-playlist-container">
        <div className="singer-image">
          <h1 className="singer-name">Ed Sheeran</h1>
          <p className="occupation">Singer</p>
        </div>
        <div className="songs-list-container">
          <div className="search-container">
            <h1 className="songs-playlist-head">Songs Playlist</h1>
            <div className="search-container-icon">
              <input
                type="search"
                value={searchInput}
                placeholder="Search"
                className="input-search"
                onChange={this.onChangeSearch}
              />
              <BiSearchAlt2 className="search-icon" />
            </div>
          </div>
          {listLength ? (
            <div className="empty-list">
              <p className="empty-head">No Songs Found</p>
            </div>
          ) : (
            <div className="songs-list-display-container">
              <ul className="song-un-order-list">
                {songsList.map(eachItem => (
                  <RenderSongDetail
                    details={eachItem}
                    key={eachItem.id}
                    onDeleteSongItem={this.onDeleteSongItem}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
