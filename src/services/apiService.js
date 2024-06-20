import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    // Submit data
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);

    return axios.post(
        "api/v1/participant",
        data
    );
}

const getAllUsers = () => {
    return axios.get(
        "api/v1/participant/all"
    );
}

const putUpdateUser = (id, username, role, image) => {
    // Submit data
    const data = new FormData();
    data.append('id', id)
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);

    return axios.put(
        "api/v1/participant",
        data
    );
}

const putViewUser = (id, username, role, image) => {
    // Submit data
    const data = new FormData();
    data.append('id', id)
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);

    return axios.put(
        "api/v1/participant",
        data
    );
}

const deleteUser = (userId) => {
    return axios.delete(
        "api/v1/participant", { data: { id: userId } }
    );
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(
        `api/v1/participant?page=${page}&limit=${limit}`
    );
}

const postLogin = (userEmail, userPassword) => {
    return axios.post(
        `api/v1/login`, {
        email: userEmail,
        password: userPassword,
        delay: 500
    }
    );
}



const postRegister = (userEmail, userPassword, userUsername) => {
    return axios.post(
        `api/v1/register`, { email: userEmail, password: userPassword, user: userUsername }
    );
}

const getQuizByUser = () => {
    return axios.get('/api/v1/quiz-by-participant')
}

const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuiz = (data) => {
    return axios.post(`api/v1/quiz-submit`, { ...data })

}

const postCreatNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description)
    data.append("name", name);
    data.append("difficulty", difficulty);
    data.append("quizImage", image);
    return axios.post(
        "api/v1/quiz",
        data
    );

}

const getAllQuizForAdmin = (id) => {
    return axios.get(`/api/v1/quiz/all`)
}

const deleteQuizForAdmin = (id) => {
    return axios.delete(`/api/v1/quiz/${id}`);

}

const postCreatNewQuestionForQuiz = (quiz_id, description, image) => {
    const data = new FormData();
    data.append('quiz_id', quiz_id);
    data.append('description', description)
    data.append('questionImage', image);
    return axios.post(
        "api/v1/question",
        data
    );

}

const postCreatNewAnswerForQuestion = (description, correct_answer, question_id) => {
    return axios.post(
        "api/v1/answer", {
        description, correct_answer, question_id
    });
}

const logout = (email, refresh_token) => {
    return axios.post('api/v1/logout' , {
        email, refresh_token
    });
}

const postAssignQuiz = (quizId, userId) => {
    return axios.post('api/v1/quiz-assign-to-user', {
        quizId, userId
    });
}

const getQuizWithQA = (quizId) => {
    return axios.get(`api/v1/quiz-with-qa/${quizId}`);
}
const postUpsertQA = (data) => {
    return axios.post(`api/v1/quiz-upsert-qa`, {...data})
}

export {
    postCreateNewUser, getAllUsers, putUpdateUser, putViewUser, deleteUser,
    getUserWithPaginate, postLogin, postRegister, getQuizByUser, getDataQuiz, postSubmitQuiz, postCreatNewQuiz, getAllQuizForAdmin, deleteQuizForAdmin,
    postCreatNewQuestionForQuiz, postCreatNewAnswerForQuestion, logout, postAssignQuiz, getQuizWithQA, postUpsertQA
}