import React from 'react';
import './forms.css';

const AddCity = () => {
  return (
    <div className="d-flex justify-content-center spacer">
        <div className="card formsize">
            <div className="card-body">
                <h1>Add City</h1>
                <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="input" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </div>
  );
}

export default AddCity;