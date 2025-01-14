import React,{Component} from 'react'
import {connect} from 'react-redux'

class ErrorBoundary extends Component{
    
    render(){
        const {error,code} = this.props.errorData
        if(error && (code !== 401 && code !==400))
            return <div style={{minHeight:'100vh', display:'flex', justifyContent:'center',alignItems:'center'}}> Something went wrong! Please try again later!</div>
        return this.props.children
        
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    errorData:state.error
  });

  export default connect(mapStateToProps)(ErrorBoundary);

