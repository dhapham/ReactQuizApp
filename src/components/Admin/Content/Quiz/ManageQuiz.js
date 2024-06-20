import { useEffect, useState } from "react";

import './ManageQuiz.scss';
import Select from 'react-select';
import { postCreatNewQuiz } from '../../../../services/apiService';
import { toast } from 'react-toastify';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';
import AssignQuiz from "./AssignQuiz";
import QuizQA from "./QuizQA";
// import ModalDeleteQuiz from "./ModalDeleteQuiz";
// import { getAllQuizForAdmin } from "../../../../services/apiService";

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY')
    const [image, setImage] = useState(null)
    const handleChangeFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }
    const handleSubmitQuiz = async () => {

        // validate
        if (!name || !description) {
            toast.error('Name/Description is required');
            return;
        }
        let res = await postCreatNewQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setName('');
            setDescription('');
            setImage(null);
        } else {
            toast.error(res.EM)
        }
    }
    // const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    // const [dataDelete, setDataDelete] = useState({});
    // const [listQuiz, setListQuiz] = useState([])


    // useEffect(() => {
    //     fetchQuiz()
    // }, [])

    // const fetchQuiz = async () => {
    //     let res = await getAllQuizForAdmin();
    //     if (res && res.EC === 0) {
    //         setListQuiz(res.DT)
    //     }
    //     console.log('res', res)
    // }


    // const handleClickBtnDelete = (quiz) => {
    //     setShowModalDeleteQuiz(true);
    //     setDataDelete(quiz)
    // }


    return (
        <div className="quiz-container">
            {/* <Accordion defaultActiveKey="0"> */}
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Manage Quizzes - Reload after save please</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Add new quiz:</legend>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder='your quiz name'
                                        value={name}
                                        onChange={(event) => setName(event.target.value)} />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='description'
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)} />
                                    <label>Description</label>
                                </div>
                                <div className='my-3'>
                                    <Select
                                        defaultValue={type}
                                        onChange={setType}
                                        options={options}
                                        placeholder={"Quiz type..."}
                                    />
                                </div>
                                <div className="more=action form-group">
                                    <label className='mb-1'>Upload Image</label>
                                    <br></br>
                                    <input type='file' className='form-control'
                                        onChange={(event) => handleChangeFile(event)} />

                                </div>
                                <div className='mt-3'>
                                    <button
                                        onClick={() => handleSubmitQuiz()}
                                        className='btn btn-warning'>
                                        Save
                                    </button>
                                </div>
                            </fieldset>

                        </div>
                        <div className="list-detail">
                            <TableQuiz />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Update Q/A Quizzes
                    </Accordion.Header>
                    <Accordion.Body>
                        <QuizQA />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Assign to Users
                    </Accordion.Header>
                    <Accordion.Body>
                        <AssignQuiz />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    )
}

export default ManageQuiz;