import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
export default class Add extends Component {
  //添加一条评论
  add = () =>{
    //获取用户的输入
    const {usernameNode,contentNode} = this.refs//一定注意 此处拿到的是用户节点，不是value
    //校验数据
    if(!usernameNode.value || !contentNode.value){
      alert('用户名和内容不能为空')
    }
    //更新状态
    this.props. addComment({
      id:uuidv4(),
      username:usernameNode.value,
      content:contentNode.value
    })
    //清空用户输入
    usernameNode.value = ''
    contentNode.value = ''
  }





  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input  ref = "usernameNode"type="text" className="form-control" placeholder="用户名"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref="contentNode"className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button  onClick={this.add}type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
    </div>
    )
  }
}
