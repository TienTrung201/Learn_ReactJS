import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
// import {replaceSearchChange,statusFiltersChange} from '../../redux/action'
// import {SearchTextSelector,todoRemainingSelector} from '../../redux/selector'
// import { addTodo } from '../../redux/action';
import {filtersSlice} from './filtersSlice'

import { useDispatch, useSelector } from 'react-redux/es/exports';
const { Search } = Input;
export default function Filters() {
  const dispatch = useDispatch()
  const [search,setSearch]=useState("")
  const [statusChange,setStatusChange]=useState("All") 
  const handleSearchChange=(e)=>{
    // todoRemainingSelector()
    dispatch(filtersSlice.actions.replaceSearch(e.target.value))
    setSearch(e.target.value)
  }
  const handleStatusChange=(e)=>{
    setStatusChange(e.target.value)
    dispatch(filtersSlice.actions.statusFiltersChange(e.target.value))
  }
  return (

    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={search} onChange={handleSearchChange} placeholder='input search text' />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusChange} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
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
      </Col>
    </Row>
  );
}
