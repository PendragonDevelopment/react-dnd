var TraitFields = React.createClass({
  render: function() {
    return (
      <div className="trait-fields">
        <div className="form-group">
          <label>Traits</label>
          <textarea value={this.props.character.traits} className="form-control" />
        </div>
        <button className="btn btn-default">Previous Step</button>
        <button className="btn btn-default">Next Step</button>
      </div>
    )
  }

});