import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewTaskForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        let formTitle = document.getElementById('formTitle');
        let formDescr = document.getElementById('formDescription');
        let formDate = document.getElementById('formDate');

        const newTask = {
            id: props.taskId,
            title: formTitle.value,
            description: formDescr.value,
            deadline: formDate.value
        };

        props.submitHandler(newTask);
        
        formTitle.value = '';
        formDescr.value = '';
        formDate.value = '';
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="title" id='formTitle' placeholder="Task Title" required />
            </Form.Group>

            <Form.Group>
                <textarea className='form-control' id='formDescription' type="description" placeholder="Task Description" required
                style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group>
                <input className='form-control' id='formDate' type="datetime-local" placeholder="mm/dd/yyyy, hh:mm AM" required
                style={{ width: '100%' }} />
            </Form.Group>

            <Form.Group>
                <Button variant="success" type="submit">
                    Add Task
                </Button>
            </Form.Group>
        </Form>
    );
};

export default NewTaskForm;