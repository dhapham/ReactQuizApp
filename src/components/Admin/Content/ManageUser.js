import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import TableUserPaginate from "./TableUserPaginate";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";



const ManageUser = (props) => {
  const LIMIT_USER = 3;
  const [pageCount, setPageCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);


  const [showModalCreateUser, setShowModaleCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});


  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [listUsers, setListUsers] = useState([])

  // ComponentDidMount
  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT)
    }
  }

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log('res.data=', res.DT)
      setListUsers(res.DT.users)
      setPageCount(res.DT.totalPages)
    }
  }

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  }

  const resetUpdateData = () => {
    setDataUpdate({})
  }

  const resetViewData = () => {
    setDataView({})
  }

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
  }

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user)
  }


  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModaleCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          {/* <TableUser
          listUsers={listUsers}
          handleClickBtnUpdate={handleClickBtnUpdate}
          handleClickBtnView={handleClickBtnView}
          handleClickBtnDelete={handleClickBtnDelete}
        />      */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModaleCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}

        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataView={dataView}
          fetchListUsers={fetchListUsers}
          resetViewData={resetViewData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}

        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}


        />
      </div>
    </div>
  );
};
export default ManageUser;
