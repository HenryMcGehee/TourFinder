import React from 'react';
import './forms.css';

const AddVenue = () => {
  return (
    <div className="d-flex justify-content-center spacer">
        <div className="card formsize">
            <div className="card-body">
                <h1>Add Venue</h1>
                <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="input" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Website</label>
                            <input type="input" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </div>
  );
}

export default AddVenue;