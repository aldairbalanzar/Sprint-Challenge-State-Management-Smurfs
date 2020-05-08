import React, { useState } from "react";
import { connect } from 'react-redux';
import { loadData, postData } from '../actions/appActions';
import "./App.css";

const App = props => {

 const [smurf, setSmurf] = useState({
      name: '',
      age: '',
      height: '' 
  })

  const handleLoad = e => {
    e.preventDefault();
    props.loadData();
  }

  const handleChanges = e => {
    e.preventDefault();
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.postData(smurf);
  }

  console.log('line 14: ', props.dataList);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <button onClick={handleLoad}> Load Data </button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
           type="text"
           id="name"
           name="name"
           onChange={handleChanges}
           placeholder="name"
          />
        </label>

        <label htmlFor="age">
          <input
           type="text"
           id="age"
           name="age"
           onChange={handleChanges}
           placeholder="age"
          />
        </label>

        <label htmlFor="height">
          <input
           type="text"
           id="height"
           name="height"
           onChange={handleChanges}
           placeholder="height"
          />
        </label>

        <button type="submit">submit</button>
      </form>

      <section>
        {props.dataList.map(item => {
          return(
            <div key={item.id}>
              <p>name: {item.name}</p>
              <p>age: {item.age}</p>
              <p>height: {item.height}</p>
            </div>
          )
        })}
      </section>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    dataList: state.dataList
  }
}

export default connect(mapStateToProps, { loadData, postData })(App);
