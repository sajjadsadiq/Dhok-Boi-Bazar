import React from 'react';

const Search = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <form action="" >
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col">
                                
                                <input type="search" class="form-control form-control-lg form-control-borderless" placeholder="Search Books" />
                            </div>
                            <div className="col-auto">
                                <button class="btn btn-lg btn-success" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;