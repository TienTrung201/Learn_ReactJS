import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { addTodo } from '../../redux/action';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// thu vien id: npm install uuid
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import {todoListSlice} from './todoListSlice'
import {todoRemainingSelector,selectorTodoList } from '../../redux/selector';

export default function TodoList() {
  const todoList = useSelector(todoRemainingSelector)
  const dispatch = useDispatch()
  const handleAddButtonClick = () => {
    dispatch(todoListSlice.actions.addTodo(
      {
        id: uuid(),
        name: todoApp,
        completed: false,
        prioriry: prioriry
      }
    ))
  }
  const [todoApp, setTodoApp] = useState("")
  const [prioriry, setPrioriry] = useState("Medium")

  const handleChangeInput = (e) => {
    setTodoApp(e.target.value)
  }
  const handleChangePriority = (value) => {
    setPrioriry(value)
  }
  const TodoApp=todoList.map(todo=>{
    return(
      <Todo key={todo.id} id={todo.id} completed={todo.completed} name={todo.name} prioriry={todo.prioriry} />
    )
  })
  console.log(selectorTodoList)
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' /> */}
      {TodoApp}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoApp} onChange={(e) => { handleChangeInput(e) }} />
          <Select defaultValue="Medium" value={prioriry} onChange={(e) => { handleChangePriority(e) }} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button
            onClick={() => handleAddButtonClick()}
            type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
