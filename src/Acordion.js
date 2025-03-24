import Accordion from 'react-bootstrap/Accordion';
import { formData } from './data';

export default function Acordion({data, deleteItem}) {

    const localData = JSON.parse(localStorage.getItem("items"))

    const delt = (ID) => {
        const index = formData.findIndex((item) => item.id === ID)
        formData.splice(index, 1)
        deleteItem(formData)
    }

    return (
        <Accordion>
            {
                localStorage.getItem("items") != null ? (localData.map((item, index) => {
                    return(
                        <Accordion.Item key={index} eventKey={item.id.toString()} >
                            <Accordion.Header>
                                {item.question}
                            </Accordion.Header>
                            <Accordion.Body className='d-flex align-items-center justify-content-between gap-1'>
                                <div>{item.answer}</div>
                                <button onClick={() => delt(item.id)} className='btn btn-primary'>delete</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })) : <h3 className='text-center'>لا يوجد اسئله</h3>
            }
        </Accordion>
    );
}
