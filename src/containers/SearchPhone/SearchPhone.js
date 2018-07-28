import React, {Component} from 'react';
import axios from 'axios';
import PhoneList from './components/PhoneList';
import {connect} from "react-redux";
import {updateList} from "../../actions/index";

var apiUrl = '/numbers';

const mapDispatchToProps = dispatch => {
  return {
    updateList: telephones => dispatch(updateList(telephones))
  };
};
const mapStateToProps = state => {
  if (state.telephones.data) {
    return {telephones: state.telephones};
  } else {
    return {telephones: []};
  }
};

class SearchPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }
  handlePagination(direction) {
    const temp = this;
    axios.get(apiUrl, {
      params: {
        page: this.props.telephones.meta
          ? (parseInt(this.props.telephones.meta.page) + direction)
          : 1,
        perPage: this.props.telephones.meta
          ? this.props.telephones.meta.perPage
          : 0
      }
    }).then(function(response) {
      temp.props.updateList(response.data);
    }).catch(function(error) {
      console.log(error);
    });
  }
  handleChange(event) {
    const temp = this;
    axios.get(apiUrl, {
      params: {
        page: this.props.telephones.data
          ? this.props.telephones.meta.page
          : 1,
        perPage: event.target.value % 1 == 0 ? event.target.value : 100
      }
    }).then(function(response) {
      temp.props.updateList(response.data);
    }).catch(function(error) {
      console.log(error);
    });
  }
  componentWillMount() {
    const temp = this;
    axios.get(apiUrl, {
      params: {
        page: 1,
        perPage: 100
      }
    }).then(function(response) {
      temp.props.updateList(response.data);
    }).catch(function(error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className='pageContainer'>
        <div className="itensSel">
          <span>Itens per page:</span><input
            type="number"
            value={this.props.telephones.meta ? this.props.telephones.meta.perPage : 0}
            onChange={this.handleChange}/></div>
        <PhoneList></PhoneList>
        <div className="paginator">
          <button onClick={() => this.handlePagination(-1)} disabled={this.props.telephones.meta ? this.props.telephones.meta.page == 1 : false}>previous</button>
          <div className="page"><span>{this.props.telephones.meta ? this.props.telephones.meta.page : 0}</span></div>
          <button onClick={() => this.handlePagination(1)} disabled={this.props.telephones.meta ? this.props.telephones.meta.page == this.props.telephones.meta.totalPages : false}>next</button>
        </div>
      </div>
    );
  }
}
const Search = connect(mapStateToProps, mapDispatchToProps)(SearchPhone);
export default Search;
