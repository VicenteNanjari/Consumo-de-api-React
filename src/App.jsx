import { useState } from 'react'
import './App.css'
import Api from './components/MiApi.jsx'
import MyModal from './components/Modal.jsx'
import Header from './components/Header.jsx'
import Loader from './components/Loader'
import Paginacion from './components/Pagination'


function App() {
  const [modalShow, setModalShow] = useState(false);
  const [bird, setBird] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [pages, setPages] = useState(1);

  const handleModal = (show) => {
    setModalShow(show)
  }

  const handleBird = (bird) => {
    setBird(bird)
  }

  const handleFilter = (filter) => {
    const sameData = [...data]
    const value = filter.toLowerCase();
    const filterYes = sameData.filter((bird) => {
      return bird.name.spanish.toLowerCase().includes(value);
    });
    setFilter(filterYes);
    setPages(1)
  };

  const handleData = (data) => {
    setFilter(data)
    setData(data)
  }

  const handlePagination = (page) => {
    setPages(page)
  }
  return (
    <div >
      <Header onChange={handleFilter} />
      { data.length === 0 ? <center><Loader/></center> : null}
      <Api 
        showModal={handleModal} 
        birdy={handleBird} 
        dataOfApi={handleData}
        filteredBirds={filter
          .sort((a, b) => a.name.spanish.localeCompare(b.name.spanish))}
        className='container'
        page={pages}
        />
      <MyModal
        show={modalShow}
        onHide={() => {
          setModalShow(false)
          setBird('')
        }}
        bird={bird}
      />
      { filter.length <= 9 ? null :
      <Paginacion 
      length={filter.length}
      currentPage={handlePagination}
      filterPage={pages}/>}
    </div>
  )
}

export default App
