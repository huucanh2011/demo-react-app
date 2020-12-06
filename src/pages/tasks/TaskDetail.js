import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ItemList from '../../components/items/ItemList'
import TaskImage from '../../components/tasks/TaskImage'

function TaskDetail() {
  return (
    <div>
      <Row>
        <Col md="4">
          <div className="sticky-top" style={{ top: 64 }}>
            <div className="h3">Task detail</div>
            <TaskImage srcImage="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" />
          </div>
        </Col>
        <Col md="8">
          <ItemList />
        </Col>
      </Row>
    </div>
  )
}

export default TaskDetail
