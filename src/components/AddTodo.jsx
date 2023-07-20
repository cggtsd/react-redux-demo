import React, { useState } from 'react'
import { Col, Container, Row,Card, Form,Button } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
 const AddTodo = ({addTodo}) => {
    const[todo,setTodo]=useState({
        title:'',
        description:'',
        id:''
    })
    const handleSubmit=e=>{
        e.preventDefault()
        //add todo in store
        addTodo({...todo,id:v4()})
        //console.log(todo)
        setTodo({
            title:'',
            description:'',
            id:''
        })
    }
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                      <Card.Body>
                        <h3>Add Todo Here !!</h3>
                        <DisplayCount/>
                        {/* form */}
                        <Form onSubmit={handleSubmit}>
                            {/* title */}
                            <Form.Group>
                                <Form.Label>Todo Title</Form.Label>
                                <Form.Control type='text'
                                placeholder='Enter here'
                                value={todo.title}
                                onChange={e=>setTodo({...todo,title:e.target.value})}/>
                            </Form.Group>
                            {/* description */}
                            <Form.Group className='mt-3'>
                                <Form.Label>Todo Description</Form.Label>
                                <Form.Control as={'textarea'} type='text'
                                placeholder='Enter here'
                                value={todo.description}
                                onChange={e=>setTodo({...todo,description:e.target.value})}/>
                            </Form.Group>
                            <Container className='text-center mt-3'>
                                <Button type='submit'  variant='primary'>
                                    Add Todo
                                </Button>
                            </Container>
                        </Form>
                      </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps=(state)=>({})

const mapDispatchToProps = (dispatch)=>(
    {
        addTodo:todo=>(dispatch(addTodo(todo)))
    }
)
export default connect(mapStateToProps,mapDispatchToProps) (AddTodo)
