import React from 'react'
import {Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom'
import './Styling.css'

const FormItem = Form.Item;

class EventForm extends React.Component{
    render(){
        return(
            <div>
                <Form>
                    <FormItem className='form' label='Event'>
                        <Input placeholder=""/>
                    </FormItem>
                    <FormItem className='form' label='Location'>
                        <Input placeholder="Where's the party?"/>
                    </FormItem>
                    <FormItem className='form' label='Date, Time'>
                        <Input placeholder=""/>
                    </FormItem>
                    <FormItem className='form' label='City, State'>
                        <Input placeholder=""/>
                    </FormItem>
                    <FormItem className='form' label='Host'>
                        <Input placeholder=""/>
                    </FormItem>
                    <Button><Link to='../events'>Submit</Link></Button>

                </Form>
            </div>
        )
    }
}

export default EventForm