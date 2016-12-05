/**
 * Copyright (с) 2015, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule UIKernel
 */

var MainComponent = React.createClass({
  getInitialState: function () {
    return {
      model: model, // let's store model in the state
      createForm: {}
    };
  },

  addRecord: function (recordId) {
    this.refs.grid.addRecordStatus(recordId, 'new'); // mark the record as new
  },

  applyFilters: function (filters) {
    this.setState({
      model: UIKernel.applyGridFilters(model, filters)
    });
  },

  onSave: function () {
    this.refs.grid.save()
      .catch(() => {
        alert('Error');
      });
  },

  onClear: function () {
    this.refs.grid.clearAllChanges();
  },

  onCreateFormStateHandler: function (newFormState) {
    this.setState({createForm: newFormState});
  },

  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Add record</h3>
              </div>
              <div className="panel-body">
                <CreateForm
                  onSubmit={this.addRecord}
                  stateHandler={this.onCreateFormStateHandler}
                  state={this.state.createForm}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Filters</h3>
              </div>
              <div className="panel-body">
                <FiltersForm
                  onSubmit={this.applyFilters}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Records</h3>
              </div>
              <UIKernel.Grid
                ref="grid"
                model={this.state.model} // Grid model
                cols={columns} // columns configuration
                viewCount={20} // 20 records limit to display by default
              />
              <div className="panel-footer">
                <a className="btn btn-success" onClick={this.onClear}>Clear</a>
                {' '}
                <a className="btn btn-primary" onClick={this.onSave}>Save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
