//1.引入react核心库
import React,{Component} from 'react'

//2.引入自己定义的组件
import Add from '../src/components/add'
import List from '../src/components/list'
//创建App组件，随后暴露
export default class App extends Component{

  state = {
    comments:[
      {id:'001',username:'杨幂',content:'好棒'},
      {id:'002',username:'佟丽娅',content:'淑女'},
      {id:'003',username:'高圆圆',content:'爱笑'}
    ]
  }

  //用来添加评论的方法
  addComment = (commentObj) =>{
    //获取原状态
    const {comments} =this.state
    //更新状态
    this.setState({comments:[commentObj,...comments]})
  }

  //根据id删除一条评论的方法
  deleteComment = (id) =>{
    //获取原状态
    let {comments} = this.state
    let index = comments.findIndex((commentObj)=>{
      return commentObj.id ===id 
    })
    comments.splice(index,1)
    //更新状态
    this.setState({comments})
  }

  render(){
    return(
      <div id="app">
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add  addComment={this. addComment}/>
            <List comments={this.state.comments} deleteComment={this.deleteComment}/>
          </div>
        </div>
      </div>     
    )
  }
}
