import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="search">
      <form>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Search City</label>
                <input type="input" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}

export default Search;
