import { Container, Row } from "react-bootstrap";
import Acordion from "./Acordion";
import { useState } from "react";
import { formData } from "./data";
import toast, { Toaster } from 'react-hot-toast';





export default function Form({data, save, deleteAll, deleteItem}){

    const snotify = (message) => {
        toast.success(message)
    }
    const enotify = (message) => {
        toast.error(message)
    }

    const [qu , setQu] = useState("")
    const [an , setAn] = useState("")

    // save
    const onSave = () => {
        if(qu.trim()==="" || an.trim()===""){
            enotify("حط البيانات حلو يااااض")
            return
        }else{
        formData.push({id:Math.random(), question: qu, answer: an})
        setQu("")
        setAn("")
        save()
        snotify("تمت الاضافه بنجاح")
        }
    }

    // deleteAll
    const deleteData = () => {
        formData.splice(0, formData.length)
        deleteAll()
        snotify("تمت مسح الكل بنجاح")
    }

    
    return(
        <Row className="gy-2">
                <div className="col-lg-5 col-sm-12">
                    <input value={qu} onChange={(e) => setQu(e.target.value)} type="text" className="form-control" id="inputText1" placeholder="السؤال"/>
                </div>
                <div className="col-lg-5 col-sm-12"> 
                    <input value={an} onChange={(e) => setAn(e.target.value)} type="text" className="form-control" id="inputText2" placeholder="الاجابة"/>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <button onClick={() => onSave()} className="btn btn-primary mb-3 w-100">اضافة</button>
                </div>
                <Acordion data={data} deleteItem={deleteItem}/>
                <Container >
                    {
                        localStorage.getItem("items") != null ? (
                            <>
                            <button onClick={() => deleteData()} className="btn btn-primary my-3 w-100">مسح الكل</button>
                            </>
                        ) : null
                    }
                </Container>
                <Toaster/>
        </Row>
    )
}